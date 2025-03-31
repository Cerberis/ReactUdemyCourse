import { useEffect, useRef, useState } from "react";
import { KEY } from "./KEY";
import { StarRating } from "./StarRating";
import { Loader } from "./Loader";
import { useKey } from "./Hooks/useKey";

export function MovieDetails({
  selectedId,
  onCloseMovie,
  onAddWatched,
  watched,
}) {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [userRating, setUserRating] = useState(0);

  const countRef = useRef(0);

  useEffect(function () {
    if (userRating) countRef.current++;
  }, [userRating]);
  const isWatched = watched.map((movie) => movie.imdbId).includes(selectedId);
  const watchedUserRating = watched.find(
    (movie) => movie.imdbId === selectedId
  )?.userRating;

  const {
    Title: title,
    Year: year,
    Poster: poster,
    Runtime: runtime,
    imdbRating,
    Plot: plot,
    Released: released,
    Actors: actors,
    Director: director,
    Genre: genre,
  } = movie;

  useEffect(
    function () {
      async function getMovieDetails() {
        setIsLoading(true);
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&i=${selectedId}`
        );
        const data = await res.json();
        setMovie(data);
        setIsLoading(false);
      }
      getMovieDetails();
    },
    [selectedId]
  );

  useKey("Escape", onCloseMovie);

  useEffect(
    function () {
      if (!title) return;
      document.title = `Movie | ${title}`;
      return () => (document.title = "usePopcorn");
    },
    [title]
  );

  function handleAdd() {
    const newWatchedMovie = {
      imdbId: selectedId,
      title,
      year,
      poster,
      imdbRating: Number(imdbRating),
      userRating: userRating,
      runtime: Number(runtime.split(" ").at(0)),
      countRatingDecision: countRef.current
    };
    onAddWatched(newWatchedMovie);
    onCloseMovie();
  }
  if (isLoading) return <Loader></Loader>

  return (
    <div className='details'>
      (
      <>
        <header>
          <button className='btn-back' onClick={onCloseMovie}>
            &larr;
          </button>
          <img src={poster} alt={`Poster of ${movie}`}></img>
          <div className='details-overview'>
            <h2>{title}</h2>
            <p>
              {released} &bull; {runtime}
            </p>
            <p>{genre}</p>
            <p>
              <span>⭐</span>
              {imdbRating}
            </p>
          </div>
        </header>
        <section>
          <div className='rating'>
            {!isWatched ? (
              <>
                <StarRating
                  maxRating={10}
                  size={24}
                  onSetRating={setUserRating}
                ></StarRating>

                {userRating > 0 && (
                  <button className='btn-add' onClick={handleAdd}>
                    + Add to list
                  </button>
                )}
              </>
            ) : (
              <p>
                You rated the movie {watchedUserRating} <span>⭐</span>
              </p>
            )}
          </div>
          <p>
            <em>{plot}</em>
          </p>
          <p>Starring {actors}</p>
          <p>Director {director}</p>
        </section>
      </>
      )}
    </div>
  );
}
