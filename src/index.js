import React, { useState } from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
import StarRating from "./StarRating";

function Test() {
  const [movieRating, setMovieRating] = useState(0);

  return (
    <div>
      <StarRating maxRating={5} color="blue" onSetRating={setMovieRating} />
      <p>this move had {movieRating} stars</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {
      <>
        <StarRating
          maxRating={5}
          className={"test"}
          messages={["terrible", "bad", "okay", "good", "amazing"]}
          defaultRating={3}
        />

        <StarRating maxRating={10} color="red" size={24} />
        <Test />
      </>
    }
  </React.StrictMode>
);
