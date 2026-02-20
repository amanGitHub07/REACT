/**
 * Now what is empty {} in this?
 * it is for passing attribute to the tags.
 * Suppose if we need to give id to the tag then we can give it in {}
 * In technical terms it is for props, we can pass props to the component using this.
 *  */

const element = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World From REACT",
);

/**
 * React.createElement is nothing but OBJECT. It is simple JS object
       
        PROPs?
        Props are children + attribute we pass in.

        Const heading = React.createElement("h1", { id: "heading" }, "Hello World !")
        So props are nothing but children and attribute which is in this case `id` and `Hello World` which will go inside h1 tag.

 */

/**
 *  if we have nested structure 
 * 
 * <div id="parent">
 *      <div id="child">
 *          <h1>Hello h1</h1>
 *          <h2>Hello h2</h2>
 *      </div>
 * </div>
 * 
 * If we want to create sibilings like in this case h1 & h2 then we need to pass it as array 

*/

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    [
      React.createElement("h1", {}, "Hello World From Nested h1!"),
      React.createElement("h2", {}, "Hello World From Nested h2!"),
    ],
  ),
);

// Now we have H1 tag but we need to render it in root but for that we requrie root it self..
const reactRoot = ReactDOM.createRoot(document.getElementById("root"));

// To render it inside root we use render method from ReactDOM
reactRoot.render(parent);
