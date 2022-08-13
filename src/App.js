import "./styles.css";
import React from "react";
import LeftContainer from "./LeftContainer";
import TextInput from "./TextInput";
import ButtonGroup from "./ButtonGroup";
import RightImage from "./RightImage";

export default function App() {
  // const [stage, setStage] = React.useState(0);
  return (
    <div className="App">
      <div className="LeftContainer">
        <LeftContainer />
        <TextInput />
        <ButtonGroup />
      </div>
      <div className="rightImage">
        <RightImage />
      </div>
    </div>
  );
}
