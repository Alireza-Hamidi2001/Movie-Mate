import sprite from "../assets/SVGs/sprite.svg";

function WatchedMovie({ movie, onDeleteWatched }) {
    return (
        <li key={movie.imdbID}>
            <img
                src={movie.poster}
                alt={`${movie.title} poster`}
            />
            <h3>{movie.title}</h3>
            <div>
                <p>
                    {/* <span> */}
                    <svg className="icon-summary icon-summary-star2">
                        <use xlinkHref={`${sprite}#icon-star2`}></use>
                    </svg>
                    {/* </span> */}
                    <span>{movie.imdbRating}</span>
                </p>
                <p>
                    {/* <span> */}
                    <svg className="icon-summary icon-summary-star">
                        <use xlinkHref={`${sprite}#icon-star-o`}></use>
                    </svg>
                    {/* </span> */}
                    <span>{movie.userRating}</span>
                </p>
                <p>
                    {/* <span> */}
                    <svg className="icon-summary icon-summary-clock">
                        <use xlinkHref={`${sprite}#icon-hourglass-2`}></use>
                    </svg>
                    {/* </span> */}
                    <span>{movie.runtime} min</span>
                </p>
                <button
                    className="btn-delete"
                    onClick={() => onDeleteWatched(movie.imdbID)}
                >
                    <svg className="icon-summary icon-summary-x">
                        <use xlinkHref={`${sprite}#icon-x`}></use>
                    </svg>
                </button>
            </div>
        </li>
    );
}

export default WatchedMovie;
