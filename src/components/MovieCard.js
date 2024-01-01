import React from "react";
import { IMG_CDN } from "../utils/constant";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return;
  return (
    <div className="w-48 pr-4">
      <img src={IMG_CDN + posterPath} />
    </div>
  );
};

export default MovieCard;
