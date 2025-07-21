import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../sass/main.scss";
import "./index.css";
import App from "./App.jsx";
import StarRating from "./components/StarRating";
import Test from "./components/Test";

createRoot(document.getElementById("root")).render(
    <App />,
    // <StrictMode>
    //     <App />
    //     <StarRating
    //         // maxRating={10}
    //         messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
    //     />
    //     <StarRating
    //         maxRating={10}
    //         color="red"
    //         size={2.4}
    //     />
    //     <Test />
    // </StrictMode>,
);
