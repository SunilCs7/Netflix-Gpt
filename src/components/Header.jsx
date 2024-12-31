import React, { useEffect } from "react";
import { NETFLIX_LOGO } from "../utils/Constants";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGptSearchView } from "../utils/gptSlice";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
    const dispatch = useDispatch()

  

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());

  }
  


  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful. so nagivate to login page

      
      
}).catch((error) => {
  // An error happened.
      navigate("/error")

});
  }


  // firebase API

  useEffect(() => {
    const unSubscribe= onAuthStateChanged(auth, user => {
      if (user) {
        // User is signedIN,signedUp

        const { uid, email, displayName, photoURL } = user
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL
          })
        )
        navigate("/browse")
      } else {
        // User is signed out
        dispatch(removeUser())
        navigate("/");
      }
    })
    // Unsubscribe when components unmounts
    return ()=> unSubscribe();
  }, [])

  return (
    <div className="absolute top-0 left-0 w-full px-4 sm:px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-28 sm:w-36 md:w-44"
        src={NETFLIX_LOGO}
        alt="Netflix Logo"
      />

      
      {/* Netfilx userIcon and button */}

      {user && <div className="flex p-2">
        <button
          className="py-2 px-4 mx-4 my-2 text-white bg-green-600 rounded-lg "
          onClick={handleGptSearchClick}
        >
          GPT Search
        </button>
        <img
          className="w-12 h-12"
          src={user?.photoURL}
          alt="userIcon"
        />
        <button
          className="font-bold text-white cursor-pointer  bg-red-600 py-2 px-4 mx-4 my-2 rounded-lg"
          onClick={handleSignOut}
        >
          Sign Out
        </button>
      </div>
      }


    </div> 

  );
};

export default Header;
