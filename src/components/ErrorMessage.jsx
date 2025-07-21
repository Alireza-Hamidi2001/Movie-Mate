import sprite from "../assets/SVGs/sprite.svg";

function ErrorMessage({ message }) {
    return (
        <div className="error">
            <svg className="icon-error">
                <use xlinkHref={`${sprite}#icon-warning`}></use>
            </svg>
            <p className="error-failed">
                {message}
                <div className="error-failed-container">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </p>
        </div>
    );
}

export default ErrorMessage;
