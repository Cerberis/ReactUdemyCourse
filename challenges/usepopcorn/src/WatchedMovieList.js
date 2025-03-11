import { WatchedMovie } from "./WatchedMovie";

export function WatchedMovieList({ watched }) {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <WatchedMovie movie={movie} key={`wm_${movie.imdbID}`}></WatchedMovie>
      ))}
    </ul>
  );
}
