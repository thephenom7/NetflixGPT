import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addTrailerVideo } from "../utils/moviesSlice";
export const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const trailerVideo = useSelector((store) => store.movies.trailerVideo);
  const getMovieVideos = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos`,
      API_OPTIONS
    );
    const json = await data.json();
    const trailers = json.results.filter((video) => video.type === "Trailer");
    const trailer = trailers.length ? trailers[0] : json.results[0];
    dispatch(addTrailerVideo(trailer));
    console.log(trailer);
  };
  useEffect(() => {
    getMovieVideos();
  }, []);
};
