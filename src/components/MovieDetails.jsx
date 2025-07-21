import { useEffect, useState } from "react";
import sprite from "../assets/SVGs/sprite.svg";
import StarRating from "./StarRating";
import Loader from "./Loader";

function MovieDetails({ selectedId, onCloseMovie, onAddWatched, watched }) {
    const [movie, setMovie] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [userRating, setUserRating] = useState("");
    const isWatched = watched.map((movie) => movie.imdbID).includes(selectedId);
    console.log(isWatched);
    // const watchedUserRating = watched.find(
    //     (movie) => movie.imbdID === selectedId,
    // )?.userRating;
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
    // console.log(title, year);
    // console.log(movie);

    function handleAdd() {
        const newWatchedMovie = {
            imdbID: selectedId,
            title,
            year,
            poster,
            imdbRating: Number(imdbRating),
            runtime: Number(runtime.split(" ").at(0)),
            userRating,
        };
        onAddWatched(newWatchedMovie);
        onCloseMovie();
    }

    useEffect(
        function () {
            function callback(e) {
                if (e.code === "Escape") {
                    onCloseMovie();
                }
            }
            document.addEventListener("keydown", callback);
            return function () {
                document.removeEventListener("keydown", callback);
            };
        },
        [onCloseMovie],
    );

    useEffect(
        function () {
            async function getMovieDetails() {
                setIsLoading(true);
                const res = await fetch(
                    `https://www.omdbapi.com/?apikey=a41893e8&i=${selectedId}`,
                );
                const data = await res.json();
                setMovie(data);
                setIsLoading(false);
                // console.log(data);
            }
            getMovieDetails();
        },
        [selectedId],
    );
    useEffect(
        function () {
            if (!title) return;
            document.title = `Movie | ${title}`;

            return function () {
                document.title = "Movie Mate";
            };
        },
        [title],
    );
    return (
        <div className="details">
            {isLoading ? (
                <Loader />
            ) : (
                <>
                    <header>
                        <button
                            className="btn-back"
                            onClick={onCloseMovie}
                        >
                            <svg className="icon-back">
                                <use
                                    xlinkHref={`${sprite}#icon-keyboard_arrow_left`}
                                ></use>
                            </svg>
                        </button>
                        <img
                            src={poster}
                            alt={`Poster of ${movie} movie`}
                        />
                        <div className="details-overview">
                            <h2>{title}</h2>
                            <p>
                                <svg className="icon-detail">
                                    <use
                                        xlinkHref={`${sprite}#icon-calendar`}
                                    ></use>
                                </svg>
                                {released}
                                <svg className="icon-detail icon-detail-clock">
                                    <use
                                        xlinkHref={`${sprite}#icon-hourglass-2`}
                                    ></use>
                                </svg>
                                {runtime}
                            </p>
                            <p>
                                <svg className="icon-detail icon-paint-format">
                                    <use
                                        xlinkHref={`${sprite}#icon-paint-format`}
                                    ></use>
                                </svg>
                                {genre}
                            </p>
                            <p>
                                <span className="details-star">
                                    <svg className="icon-rate">
                                        <use
                                            xlinkHref={`${sprite}#icon-star2`}
                                        ></use>
                                    </svg>
                                    {imdbRating} IMDB rating
                                </span>
                            </p>
                        </div>
                    </header>
                    <section>
                        <div className="rating">
                            {!isWatched ? (
                                <>
                                    <StarRating
                                        maxRating={10}
                                        size={2.4}
                                        onSetRating={setUserRating}
                                    />
                                    {userRating > 0 && (
                                        <button
                                            className="btn-add details-add"
                                            onClick={handleAdd}
                                        >
                                            Add to list
                                        </button>
                                    )}
                                </>
                            ) : (
                                <p>You rated this movie</p>
                            )}
                        </div>
                        <p>
                            <em>{plot}</em>
                        </p>
                        <p>Actors : {actors}</p>
                        <p>
                            Directed by <em>{director}</em>
                        </p>
                    </section>
                </>
            )}
        </div>
    );
}

export default MovieDetails;
