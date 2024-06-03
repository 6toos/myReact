import React, {useState} from "react";
import Button from "./Button";
import Text from "./Text";

const App = () => {
    const { data, setData } = useState([
        { id: 1, test: "test one" },
        { id: 2, test: "test two" },
        { id: 3, test: "test three" },
        { id: 4, test: "test four" },
        { id: 5, test: "test five" }
    ]);
    const updateData = () => {
        setData((nextData) => [{ id: 6, test: "test six" }, ...nextData])
    }
    return
        <>
        {data.map((item, index) => <Text key={index}>{ item.test}</Text>)}
        <Button clickAction={updateData}>Add more...</Button>;
    </>
}

export default App;