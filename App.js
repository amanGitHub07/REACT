import React from "react";
import ReactDOM from "react-dom/client";

// JSX HTML like syntax or XMl like syntax.
// JSX code is transpiled before it reaches to JS engine  - > Parcel -> babel does that job

// JSX => React.createElement - JS object => HtmlElem'ent(render)
const jsxHeading = (
  <h1 className="head" tabIndex="1">
    Hello World From REACT
  </h1>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);

