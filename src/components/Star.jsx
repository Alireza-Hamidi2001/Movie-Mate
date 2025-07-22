import sprite from "../assets/SVGs/sprite.svg";

function Star({ onRate, full, onHoverIn, onHoverOut, color, size }) {
    const starStyle = {
        width: `${size}rem`,
        height: `${size}rem`,
        fill: color,
    };

    return (
        <span
            onClick={onRate}
            onMouseEnter={onHoverIn}
            onMouseLeave={onHoverOut}
        >
            {full ? (
                <svg
                    style={starStyle}
                    strokeWidth="1"
                    className="starFull"
                >
                    <use xlinkHref={`${sprite}#icon-star2`}></use>
                </svg>
            ) : (
                <svg
                    style={starStyle}
                    strokeWidth="1"
                    className="starHole"
                >
                    <use xlinkHref={`${sprite}#icon-star-o`}></use>
                </svg>
            )}
        </span>
    );
}

export default Star;
