import React from "react";
import Header from "./Header";
import { useState, useRef } from "react";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
const Login = () => {
  const [isSignInForm, setSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const fullName = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleToggle = () => {
    setSignInForm(!isSignInForm);
    const message = checkValidData();
  };

  const handleSunmit = (e) => {
    e.preventDefault();
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;
    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          updateProfile(userCredential.user, {
            displayName: fullName.current.value,
            photoURL: "https://example.com/jane-q-user/profile.jpg",
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch(addUser({ uid, email, displayName }));
            })
            .catch((error) => {
              console.log(error);
              // An error occurred
              // ...
            });
          navigate("/browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
          // ..
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          navigate("/browse");

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
        });
    }
  };
  return (
    <div className="h-screen relative overflow-hidden">
      <Header />
      <div className="h-screen w-screen absolute">
        <img
          className="h-screen w-full"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/563192ea-ac0e-4906-a865-ba9899ffafad/6b2842d1-2339-4f08-84f6-148e9fcbe01b/IN-en-20231218-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        />
      </div>
      <form className="absolute w-3/12 p-12 bg-black mx-auto my-36 right-0 left-0 text-white bg-opacity-80 text-sm">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={fullName}
            type="text"
            placeholder="Full Name"
            className="p-2 my-4 w-full text-sm bg-gray-700"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email address"
          className="p-2 my-4 w-full text-sm bg-gray-700"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-2 my-4 w-full text-sm bg-gray-700"
        />
        {errorMessage && (
          <p className="text-red-500 font-bold">{errorMessage}</p>
        )}
        <button
          className="p-4 my-6 bg-red-700 w-full text-sm"
          onClick={handleSunmit}
        >
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
