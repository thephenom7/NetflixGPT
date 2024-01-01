import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changeLanguage } from "../utils/configSlice";
import { AVATAR, NETFLIX_LABEL, SUPPORTED_LANGUAGES } from "../utils/constant";
import { auth } from "../utils/firebase";
import { toggleGptSearchView } from "../utils/gptSlice";
import { addUser, removeUser } from "../utils/userSlice";
const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        navigate("/browse");
        dispatch(addUser({ uid, email, displayName }));
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };
  const handleGptToggle = () => {
    dispatch(toggleGptSearchView());
  };
  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
  return (
    <div className="absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between text-sm box-border">
      <img className="w-44 mx-auto md:mx-0" src={NETFLIX_LABEL} />

      {user && (
        <div className="flex">
          {showGptSearch && (
            <select
              className="p-2 m-4 mt-5 bg-gray-900 text-white"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="bg-purple-800 rounded-xl py-2 px-4 mx-4 my-4 mt-5 text-white"
            onClick={handleGptToggle}
          >
            {showGptSearch ? "Home" : "GPT Search"}
          </button>
          <img className="w-14 h-16 p-2 pt-4 m-2" src={AVATAR} />
          <div className="flex flex-col justify-center">
            <div className="text-red-600">{user.displayName}</div>
            <button className="font-bold text-white" onClick={handleSignOut}>
              Sign Out
            </button>{" "}
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
