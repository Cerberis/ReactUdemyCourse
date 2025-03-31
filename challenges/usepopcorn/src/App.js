import { useEffect, useState } from "react";
import { Box } from "./Box";
import { FoundResults } from "./FoundResults";
import { Main } from "./Main";
import { MovieList } from "./MovieList";
import { NavBar } from "./NavBar";
import { Search } from "./Search";
import { WatchedMovieList } from "./WatchedMovieList";
import { WatchedSummary } from "./WatchedSummary";
import { MovieDetails } from "./MovieDetails";
import { KEY } from "./KEY";
import { Loader } from "./Loader";
import { ErrorMessage } from "./ErrorMessage";
import { useMovies } from "./Hooks/useMovies";
import { useLocalStorageState } from "./useLocalStorageState";

export default function App() {
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState(null);

  const { movies, isLoading, error } = useMovies(query, handleCloseMovie);
  const [watched, setWatched] = useLocalStorageState([], "watched");


  function handleSelectMovie(id) {
    setSelectedId((selectedId) => (selectedId === id ? null : id));
  }

  function handleCloseMovie(id) {
    setSelectedId(null);
  }

  function handleAddWatched(movie) {
    setWatched((watched) => [...watched, movie]);
  }

  function handleDeleteWatched(id) {
    setWatched((watched) => watched.filter((movie) => movie.imdbId !== id));
  }


  return (
    <>
      <NavBar>
        <Search query={query} setQuery={setQuery}></Search>
        <FoundResults movies={movies}></FoundResults>
      </NavBar>
      <Main>
        <Box>
          {isLoading && <Loader></Loader>}
          {!isLoading && !error && (
            <MovieList
              movies={movies}
              onSelectMovie={handleSelectMovie}
            ></MovieList>
          )}
          {error && <ErrorMessage message={error}></ErrorMessage>}
        </Box>
        <Box>
          {selectedId ? (
            <MovieDetails
              selectedId={selectedId}
              onCloseMovie={handleCloseMovie}
              onAddWatched={handleAddWatched}
              watched={watched}
            ></MovieDetails>
          ) : (
            <>
              <WatchedSummary watched={watched}></WatchedSummary>
              <WatchedMovieList
                watched={watched}
                onDeleteWatched={handleDeleteWatched}
              ></WatchedMovieList>
            </>
          )}
        </Box>
      </Main>
    </>
  );
}
