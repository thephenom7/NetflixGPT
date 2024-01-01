import React from "react";
import { LOGO } from "../utils/constant";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";

const GptSearch = () => {
  return (
    <div>
      <div className="h-screen w-screen fixed -z-10  ">
        <img className="h-screen w-full object-cover" src={LOGO} />
      </div>
      <div className="pt-[40%] md:pt-0">
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </div>
  );
};

export default GptSearch;
