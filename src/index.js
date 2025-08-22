import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// function Test() {
//   const [movieRating, setMovieRating] = useState(0);

//   return (
//     <div>
//       <StarRating maxRating={5} color="blue" onSetRating={setMovieRating} />
//       <p>this move had {movieRating} stars</p>
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
