const p = React.createElement("p", {}, "This is a paragraph tag!");
const p2 = React.createElement("p", {}, "This is a paragraph tag!");
const div = React.createElement("div", { className: "name" }, [p, p2]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(div);
