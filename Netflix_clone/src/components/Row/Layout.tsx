import { Movie } from "./useProps";
import Youtube from "react-youtube";

type LayoutProps = {
  title: string;
  isLargeRow?: boolean;
  movies: Movie[];
  trailerUrl: string | null;
  handleClick: (movie: Movie) => void;
};

type Options = {
  height: string;
  width: string;
  playerVars: {
    autoplay: 0 | 1 | undefined;
  };
};

export const Layout = ({ title, movies, isLargeRow, handleClick, trailerUrl }: LayoutProps) => {
  const image_url = "https://image.tmdb.org/t/p/original";
  const opts: Options = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="ml-5 text-white">
      <h2 className="text-left">{title}</h2>
      <div className="flex overflow-y-hidden overflow-x-scroll p-5 hidden-scrollbar">
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`object-contain w-full max-h-24 m-2 transform transition-transform duration-450 ${isLargeRow ? "max-h-60 hover:scale-110" : "hover:scale-108"}`}
            src={`${image_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
            onClick={() => handleClick(movie)}
          />
        ))}
      </div>
      {trailerUrl && (
        <Youtube
          videoId={trailerUrl}
          opts={opts}
        />
      )}
    </div>
  );
};
