import { DotLottieReact } from "@lottiefiles/dotlottie-react";

function Loader() {
    return (
        <>
            <p className="loader">Loading ...</p>
            <div className="wave-loader">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </>
    );
}

export default Loader;
