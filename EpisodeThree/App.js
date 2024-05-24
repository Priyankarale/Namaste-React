import React from "react";
import ReactDOM from "react-dom/client";
import { jsx } from "react/jsx-runtime";
// const heading=React.createElement('h1',{},"hello from episode 3");

// const root = ReactDOM.createRoot(document.getElementById("root"));
// const jsxHeading = <h1>Namaste React using JSX</h1>;
// console.log(jsxHeading);
// root.render(jsxHeading);

///********Part four(component-class based and functional based)*******///
// const HeadComponent=()=>{
//     return <h1>Hello from functional component</h1>
// }
const HeadComponent = () => <h1>Hello from functional component</h1>
const root = ReactDOM.createRoot(document.getElementById("root"));

const fn=()=>{true}
const fn2=()=>true;
root.render(<HeadComponent />);
