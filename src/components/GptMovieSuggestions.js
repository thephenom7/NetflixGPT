import { useSelector } from "react-redux";
import ClipLoader from "react-spinners/ClipLoader";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const { movieResults, movieNames, loading } = useSelector(
    (store) => store.gpt
  );
  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };
  const color = "#ffffff";

  return (
    <>
      {!loading && movieNames && (
        <div className="p-4 m-4 bg-black text-white bg-opacity-90">
          {movieNames !== "error" ? (
            movieNames.map((movieName, index) => (
              <MovieList
                key={movieName}
                title={movieName}
                movies={movieResults[index]}
              />
            ))
          ) : (
            <div>Something went wrong pls try again!!</div>
          )}
        </div>
      )}{" "}
      {loading && (
        <div className="p-4 m-4">
          <ClipLoader
            color={color}
            loading={loading}
            cssOverride={override}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      )}
    </>
  );
};
export default GptMovieSuggestions;
