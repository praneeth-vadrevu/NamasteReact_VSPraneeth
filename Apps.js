import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => <h1 className="head">Namaste react from JSX!</h1>;

const JsxHeadingComponent = () => (
  <div id="container">
    <Title />
    <h1 className="heading">Namaste react from functional component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
//  rendering React element
root.render(<JsxHeadingComponent />);
