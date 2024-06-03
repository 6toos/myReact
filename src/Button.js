import React from "react"

const Button = (props) => {
    console.log(props);
    const { children, clickAction } = props;
    const handleCLick = () => {
        console.log("Clicked inside the component...")
        clickAction();
    }
    // return <button onClick={() => handler()}>Submit</button>
    return <button onClick={handleCLick}>{children}</button>;
}

export default Button;