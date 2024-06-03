import React from "react";
import Button from "./Button";

const App = () => {
    const ClickHandler = () => {
        console.log("I was clicked from the parent...")
    }
    return <Button clickAction={ClickHandler}>Click me</Button>;
}

export default App;