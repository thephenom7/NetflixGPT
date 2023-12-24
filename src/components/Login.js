import React from "react";
import Header from "./Header";
import { useState } from "react";
const Login = () => {
  const [isSignInForm, setSignInForm] = useState(true);
  const handleToggle = () => {
    setSignInForm(!isSignInForm);
  };
  return (
    <div className="h-full relative">
      <Header />
      <div className="h-full w-full absolute">
        <img
          className="h-full w-full"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/563192ea-ac0e-4906-a865-ba9899ffafad/6b2842d1-2339-4f08-84f6-148e9fcbe01b/IN-en-20231218-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        />
      </div>
      <form className="absolute w-3/12 p-12 bg-black mx-auto my-36 right-0 left-0 text-white bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-2 my-4 w-full text-sm bg-gray-700"
          />
        )}
        <input
          type="text"
          placeholder="Email address"
          className="p-2 my-4 w-full text-sm bg-gray-700"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 my-4 w-full text-sm bg-gray-700"
        />
        <button className="p-4 my-6 bg-red-700 w-full text-sm">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 text-sm cursor-pointer" onClick={handleToggle}>
          {isSignInForm
            ? "New to NetFlix?Sign Up"
            : "Already registered Sign In now!"}
        </p>
      </form>
    </div>
  );
};

export default Login;
