const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am H1 tag"),
    React.createElement("h1", {}, "I am H1 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am H1 tag"),
    React.createElement("h1", {}, "I am H1 tag"),
  ]),
]);

console.log(parent);

const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" },
  "Hello React World!!!"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
