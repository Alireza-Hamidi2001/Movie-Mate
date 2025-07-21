import { useEffect, useState } from "react";
import Main from "./components/Main";
import NavBar from "./components/NavBar";
import tempMovieData from "./components/TempMovieData";
import tempWatchedData from "./components/TempWatchedData";
import Footer from "./components/Footer";

// LOADER
import Loader from "./components/Loader";

// ERROR
import ErrorMessage from "./components/ErrorMessage";

// NAVBAR
import Search from "./components/Search";
import NumResults from "./components/NumResults";
import Logo from "./components/Logo";
// MAIN
import ListBox from "./components/ListBox";
import WatchedBox from "./components/WatchedBox";
// LIST BOX
import MovieList from "./components/MovieList";
// SELECTED MOVIE
import SelectedMovie from "./components/MovieDetails";
// SUMMARY
import WatchedSummary from "./components/WatchedSummary";
import WatchedMoviesList from "./components/WatchedMoviesList";
// MOVIE DETAIL
import MovieDetails from "./components/MovieDetails";
// const KEY = "a41893e8";

function App() {
    const [query, setQuery] = useState("inception");
    const [movies, setMovies] = useState([]);
    const [watched, setWatched] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const [selectedId, setSelectedId] = useState(null);
    // const tempQuery = "spider man";

    function handleSelectMovie(id) {
        setSelectedId((selectedId) => (id === selectedId ? null : id));
    }

    function handleCloseMovie() {
        setSelectedId(null);
        // document.title = "Movie Mate";
    }

    function handleAddWatched(movie) {
        setWatched((watched) => [...watched, movie]);
    }

    function handleDeleteWatched(id) {
        setWatched((watched) => watched.filter((movie) => movie.imdbID !== id));
    }

    useEffect(
        function () {
            const controller = new AbortController();
            async function fetchMovies() {
                try {
                    setIsLoading(true);
                    setError("");
                    const res = await fetch(
                        `https://www.omdbapi.com/?apikey=a41893e8&s=${query}`,
                        { signal: controller.signal },
                    );
                    if (!res.ok)
                        throw new Error(
                            "Something went wrong with fetching data .",
                        );
                    const data = await res.json();
                    if (data.Response === "False")
                        throw new Error("Movie not found");
                    setMovies(data.Search);
                    setError("");
                    // console.log(data);
                } catch (err) {
                    console.error(err.message);
                    if (err.name !== AbortError) {
                        setError(err.message);
                    }
                } finally {
                    setIsLoading(false);
                }
            }
            if (query.length < 3) {
                setMovies([]);
                setError("");
                return;
            }
            handleCloseMovie();
            fetchMovies();
            return function () {
                controller.abort();
            };
        },
        [query],
    );

    return (
        <>
            <NavBar>
                <Logo />
                <Search
                    query={query}
                    setQuery={setQuery}
                />
                <NumResults movies={movies} />
            </NavBar>
            <Main>
                <ListBox>
                    {isLoading && <Loader />}
                    {!isLoading && !error && (
                        <MovieList
                            movies={movies}
                            onSelectMovie={handleSelectMovie}
                        />
                    )}
                    {error && <ErrorMessage message={error} />}
                </ListBox>
                <WatchedBox>
                    {selectedId ? (
                        <MovieDetails
                            selectedId={selectedId}
                            onCloseMovie={handleCloseMovie}
                            onAddWatched={handleAddWatched}
                            watched={watched}
                        />
                    ) : (
                        <>
                            <WatchedSummary watched={watched} />
                            <WatchedMoviesList
                                watched={watched}
                                onDeleteWatched={handleDeleteWatched}
                            />
                        </>
                    )}
                </WatchedBox>
            </Main>
            <Footer />
        </>
    );
}

export default App;
