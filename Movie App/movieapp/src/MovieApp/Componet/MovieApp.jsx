
import React, { useState } from "react";
import useFetch from "../Data/useFetch";
import Card from "./Card";

function MovieApp() {
  const [input, setInput] = useState("");
  const [movieData, setMovieData] = useState([]);
  const [loading, setLoading] = useState(false);

  const updateInput = (e) => {
    setInput(e.target.value);
  };

  const searchMovie = async () => {
    if (input.trim()) {
      setLoading(true);  
      const getMovieData = await useFetch(input);
      setMovieData(getMovieData);
      setLoading(false); 
    }
  };

  const handleSearchClick = () => {
    searchMovie();
  };

  return (
    <div className="movie-app">
      <h1>Search Movies</h1>
      <input
        type="text"
        onChange={updateInput}
        value={input}
        placeholder="Search for a movie..."
      />
      <button onClick={handleSearchClick}>Search</button>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="movies-list">
          {movieData && movieData.length > 0 ? (
            movieData.map((movie) => (
              <Card
                key={movie.imdbID}
                poster={movie.Poster}
                title={movie.Title}
                year={movie.Year}
              />
            ))
          ) : (
            <p>No movies found. Try another search.</p>
          )}
        </div>
      )}
    </div>
  );
}

export default MovieApp;
