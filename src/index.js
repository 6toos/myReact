import React from 'react';
import ReactDOM from 'react-dom';

const p = React.createElement("p", {}, "This is a paragraph tag!");
const p2 = React.createElement("p", {}, "This is a paragraph tag!");
// const div = React.createElement("div", { className: "name" }, [p, p2]);
const div = <div className='name'>This is a JXS</div>
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(div);
