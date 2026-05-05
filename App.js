import React from "react";
import ReactDOM from "react-dom/client";

// JSX HTML like syntax or XMl like syntax.
// JSX code is transpiled before it reaches to JS engine  - > Parcel -> babel does that job

// JSX => React.createElement - JS object => HtmlElem'ent(render)
const Title = () => (
  <h1 className="head" tabIndex="1">
    Hello World From REACT
  </h1>
);

// React Components ?
// Two ways:
// Class based Component -  old
// function based Component - new
//Component Composition.
const HeadingComponent = () => {
  return (
    <div className="container">
      <Title />
      <h1> Welcome from Functional Component</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);
