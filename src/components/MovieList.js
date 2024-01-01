import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies, isWrapped = false }) => {
  const searchClass = isWrapped ? "flex-wrap gap-4 justify-center" : "";
  return (
    <div className="">
      <h1 className="text-3xl font-bold py-2 text-white">{title}</h1>
      <div className="flex overflow-x-scroll scrollbar-hide">
        <div className={`flex ${searchClass}`}>
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
