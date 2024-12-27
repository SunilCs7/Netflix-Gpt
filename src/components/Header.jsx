import React from "react";
import {NETFLIX_LOGO} from "../utils/Constants";

const Header = () => {
  return (
    <div className="absolute top-0 left-0 w-full px-4 sm:px-8 py-2 bg-gradient-to-b from-black z-10">
      <img
        className="w-28 sm:w-36 md:w-44"
        src={NETFLIX_LOGO}
        alt="Netflix Logo"
      />
    </div>
  );
};

export default Header;
