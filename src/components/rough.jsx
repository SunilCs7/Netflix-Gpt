// import React, { useState, useRef } from "react";
// import Header from "./Header";
// import { BACKGROUD_IMG } from "../utils/Constants";
// import { checkValidData } from "../utils/validate"
// import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";

// import {auth} from "../utils/firebase"

// const Login = () => {
//   const [isSignInForm, setIsSignInForm] = useState(true);
//   const [errorMessage, setErrorMessage] = useState(null);
  
//   const email = useRef(null);
//   const password = useRef(null);
//   const name = useRef(null);

//   const handleButtonClick = () => {
//     // form validation
//     const message = checkValidData(
//       email.current.value,
//       password.current.value,
//       isSignInForm ? null : name.current.value // handle the case where name might not be needed
//     );
//     setErrorMessage(message);

//     if (message) return;


//     // signUp logic
//     if (!isSignInForm) {


//       createUserWithEmailAndPassword(auth,  email.current.value,
//       password.current.value)
//   .then((userCredential) => {
//     const user = userCredential.user;
//     // console.log(user);
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     setErrorMessage(errorMessage+ "_"+ errorCode);
//   });


//     }
//     else {
//       // signIn logic

//       signInWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     const user = userCredential.user;
//     console.log(user);
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     setErrorMessage(errorMessage+ "_"+ errorCode);
//   });


//     }

//   }

//     const toggleSignInForm = () => {
//       setIsSignInForm(!isSignInForm);
//     }

  

// return (
//     <div
//       className="relative h-screen bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center"
//       style={{ backgroundImage: `url(${BACKGROUD_IMG})` }}
  
//   >
//       <Header />


//       {/* Form */}
//       <form
//         onSubmit={(e) => e.preventDefault()}

//         className="w-11/12 max-w-md p-8 bg-black bg-opacity-80 text-white rounded-lg shadow-md "
//       >
//         <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center">
//           {isSignInForm ? "Sign In" : "Sign Up"}
//         </h1>

//         {!isSignInForm && (
//           <input
//              ref={name}
//             type="text"
//             placeholder="Full Name"
//             className="w-full mb-4 p-3 bg-gray-800 rounded-lg focus:outline-none focus:ring focus:ring-red-500"
//           />
//         )}

//         <input
//           type="text"
//            ref={email}
//           placeholder="Enter Email Address"
//           className="w-full mb-4 p-3 bg-gray-800 rounded-lg focus:outline-none focus:ring focus:ring-red-500"
//         />

//         <input
//           type="password"
//            ref={password}
//           placeholder="Enter Password"
//           className="w-full mb-6 p-3 bg-gray-800 rounded-lg focus:outline-none focus:ring focus:ring-red-500"
//         />

//         {!isSignInForm && (
//           <div className="mb-4">
//             <label htmlFor="gender" className="block mb-2 text-sm">
//               Gender:
//             </label>
//             <select
//               id="gender"
//               name="gender"
//               className="w-full p-3 bg-gray-800 rounded-lg focus:outline-none focus:ring focus:ring-red-500"
//             >
//               <option value="">Select Gender</option>
//               <option value="male">Male</option>
//               <option value="female">Female</option>
//               <option value="other">Other</option>
//             </select>
//           </div>
//         )}
//         <p className="font-bold text-sm text-red-900  py-3">{errorMessage}</p>

//         <button
//           onClick={handleButtonClick}
//           type="submit"
//           className="w-full py-3 bg-red-700 hover:bg-red-600 transition-colors rounded-lg font-semibold text-lg"
//         >
//           {isSignInForm ? "Sign In" : "Sign Up"}
//         </button>

//         <p
//           className="mt-6 text-center text-sm underline  cursor-pointer"
//           onClick={toggleSignInForm}
//         >
//           {isSignInForm
//             ? "New to NetflixGpt? Sign Up Now"
//             : "Already Registered? Sign In Now"}
//         </p>
//       </form>
//     </div>
//     );
    
//   }
// export default Login;
