import { useEffect, useState } from "react";
import axios from "../../axios";
import { requests } from "../../request";

export type Movie = {
  id: string;
  name: string;
  poster_path: string;
  backdrop_path: string;
};

export const useProps = (fetchUrl: string) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [trailerUrl, setTrailerUrl] = useState<string | null>("");

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      const movies = request.data.results.map((movie: Movie) => ({
        id: movie.id,
        name: movie.name,
        poster_path: movie.poster_path,
        backdrop_path: movie.backdrop_path,
      }));
      setMovies(movies);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const handleClick = async (movie: Movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      const moviePrayUrl = await axios.get(requests.fetchMovieVideos(movie.id));
      setTrailerUrl(moviePrayUrl.data.results[0]?.key);
      console.log(setTrailerUrl);

    }
  };

  return { movies, trailerUrl, handleClick };
};
