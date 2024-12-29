import React from "react";
import { NETFLIX_LOGO } from "../utils/Constants";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user=useSelector((state)=>state.user);
  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful. so nagivate to login page
      navigate("/")

      
      
}).catch((error) => {
  // An error happened.
      navigate("/error")

});
  }
  return (
    <div className="absolute top-0 left-0 w-full px-4 sm:px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-28 sm:w-36 md:w-44"
        src={NETFLIX_LOGO}
        alt="Netflix Logo"
      />

      
      {/* Netfilx userIcon and button */}

      { user &&<div className="flex p-2">
        <img
          className="w-12 h-12"
          src={user?.photoURL}
          alt="userIcon"
        />
        <button
          className="font-bold text-white"
          onClick={handleSignOut}
        >
          (Sign Out)
        </button>
      </div>
      }


    </div> 

  );
};

export default Header;
