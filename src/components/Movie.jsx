import sprite from "../assets/SVGs/sprite.svg";

function Movie({ movie, onSelectMovie }) {
    return (
        <li
            key={movie.imdbID}
            onClick={() => onSelectMovie(movie.imdbID)}
        >
            <img
                src={movie.Poster}
                alt={`${movie.Title} poster`}
            />
            <h3>{movie.Title}</h3>
            <div>
                <p>
                    {/* <span> */}
                    <svg className="icon-summary icon-summary-arrow">
                        <use xlinkHref={`${sprite}#icon-calendar`}></use>
                    </svg>
                    {/* </span> */}
                    <span>{movie.Year}</span>
                </p>
            </div>
        </li>
    );
}

export default Movie;
