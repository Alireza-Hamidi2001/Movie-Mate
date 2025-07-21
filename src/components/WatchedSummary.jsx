import sprite from "../assets/SVGs/sprite.svg";

function WatchedSummary({ watched }) {
    const average = (arr) =>
        arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

    const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
    const avgUserRating = average(watched.map((movie) => movie.userRating));
    const avgRuntime = average(watched.map((movie) => movie.runtime));

    return (
        <div className="summary">
            <h2>Movies you watched</h2>
            <div>
                <p>
                    {/* <span> */}
                    <svg className="icon-summary icon-summary-pin">
                        <use xlinkHref={`${sprite}#icon-pin`}></use>
                    </svg>
                    {/* </span> */}
                    <span>{watched.length} movies</span>
                </p>
                <p>
                    {/* <span> */}
                    <svg className="icon-summary icon-summary-star2">
                        <use xlinkHref={`${sprite}#icon-star2`}></use>
                    </svg>
                    {/* </span> */}
                    <span>{avgImdbRating.toFixed(2)}</span>
                </p>
                <p>
                    {/* <span> */}
                    <svg className="icon-summary icon-summary-star">
                        <use xlinkHref={`${sprite}#icon-star-o`}></use>
                    </svg>
                    {/* </span> */}
                    <span>{avgUserRating.toFixed(2)}</span>
                </p>
                <p>
                    {/* <span> */}
                    <svg className="icon-summary icon-summary-clock">
                        <use xlinkHref={`${sprite}#icon-hourglass-2`}></use>
                    </svg>
                    {/* </span> */}
                    <span>{avgRuntime} min</span>
                </p>
            </div>
        </div>
    );
}

export default WatchedSummary;
