import { Movie } from "./Movie";

export function MovieList({ movies }) {
  return (
    <ul className="list">
      {movies?.map((movie) => (
        <Movie movie={movie} key={`ml_${movie.imdbID}`}></Movie>
      ))}
    </ul>
  );
}
