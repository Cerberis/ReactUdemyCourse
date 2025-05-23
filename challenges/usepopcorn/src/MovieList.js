import { Movie } from './Movie';

export function MovieList({ movies, onSelectMovie }) {
  return (
    <ul className="list list-movies">
      {movies?.map((movie) => (
        <Movie
          movie={movie}
          key={`ml_${movie.imdbID}`}
          onSelectMovie={onSelectMovie}></Movie>
      ))}
    </ul>
  );
}
