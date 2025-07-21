import sprite from "../assets/SVGs/sprite.svg";

function NumResults({ movies }) {
    return (
        <p className="num-results">
            <svg className="icon-bell">
                <use xlinkHref={`${sprite}#icon-bell`}></use>
            </svg>
            Found &nbsp;<strong>{movies.length}</strong>&nbsp; results
        </p>
    );
}

export default NumResults;
