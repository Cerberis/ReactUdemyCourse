import { WatchedMovie } from "./WatchedMovie";

export function WatchedMovieList({ watched, onDeleteWatched }) {
  return (
    <ul className='list'>
      {watched.map((movie) => (
        <WatchedMovie
          movie={movie}
          key={`wm_${movie?.imdbId}`}
          onDeleteWatched={onDeleteWatched}
        ></WatchedMovie>
      ))}
    </ul>
  );
}
