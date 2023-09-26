// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello World from React!"
// );
/* The react element 'Heading' above is nothing but a JS object. The createElement method of the 
takes the inputs and creates a JS object using the data.

*/

const root = ReactDOM.createRoot(document.getElementById("root"));

/*render method is responsible for converting the object created above into markup and render it
on the browser. 
    ReactElement(Object) => HTML(browser understands)
*/

// creating nested elements in react

/* <div id="parent">
    <div id="child"> 
        <h1> I'm an H1 tag </h1> 
    </div>
     <div id="child"> 
        <h1> I'm an H1 tag </h1> 
    </div>
</div>*/

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm an H1 tag"),
    React.createElement("h2", {}, "I'm an H2 tag"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm an H1 tag"),
    React.createElement("h2", {}, "I'm an H2 tag"),
  ]),
]);

root.render(parent);
console.log(parent);
