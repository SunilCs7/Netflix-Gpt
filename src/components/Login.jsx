import React, { useState } from "react";
import Header from "./Header";
import { BACKGROUD_IMG } from "../utils/Constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div
      className="relative h-screen bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center"
      style={{ backgroundImage: `url(${BACKGROUD_IMG})` }}
  
  >
      <Header />


      {/* Form */}
      <form
        className="w-11/12 max-w-md p-8 bg-black bg-opacity-80 text-white rounded-lg shadow-md "
      >
        <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="w-full mb-4 p-3 bg-gray-800 rounded-lg focus:outline-none focus:ring focus:ring-red-500"
          />
        )}

        <input
          type="text"
          placeholder="Enter Email Address"
          className="w-full mb-4 p-3 bg-gray-800 rounded-lg focus:outline-none focus:ring focus:ring-red-500"
        />

        <input
          type="password"
          placeholder="Enter Password"
          className="w-full mb-6 p-3 bg-gray-800 rounded-lg focus:outline-none focus:ring focus:ring-red-500"
        />

        {!isSignInForm && (
          <div className="mb-4">
            <label htmlFor="gender" className="block mb-2 text-sm">
              Gender:
            </label>
            <select
              id="gender"
              name="gender"
              className="w-full p-3 bg-gray-800 rounded-lg focus:outline-none focus:ring focus:ring-red-500"
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
        )}

        <button
          type="submit"
          className="w-full py-3 bg-red-700 hover:bg-red-600 transition-colors rounded-lg font-semibold text-lg"
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <p
          className="mt-6 text-center text-sm underline cursor-pointer"
          onClick={toggleSignInForm}
        >
          {isSignInForm
            ? "New to NetflixGpt? Sign Up Now"
            : "Already Registered? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
