import "./styles.css";
import React from "react";
import LeftContainer from "./LeftContainer";
import TextInput from "./TextInput";
import ButtonGroup from "./ButtonGroup";
import RightImage from "./RightImage";

export default function App() {
  const [stage, setStage] = React.useState(0);
  const LEFTCONTAINER_TITLE_DATA = [
    "Apply to work with our agency",
    "What's your budget",
    "Anything else we should know?",
    "Thank you"
  ];
  const INPUT_DATA = [
      {
          type: "email",
          placeholder: "What's your email?",
          className: "emailInput"
      },
      {
          type: "button"
      }
  ];
  
  let content;
  if (stage === 0) {
    content = (
        <TextInput 
            type = {INPUT_DATA[stage].type}
            placeholder = {INPUT_DATA[stage].placeholder}
            className = {INPUT_DATA[stage].className}
        />
    );
  } else if (stage === 1 ){
      
  }
  return (
    <div className="App">
      <div className="LeftContainer">
        <LeftContainer 
            title = {LEFTCONTAINER_TITLE_DATA[stage]}
        />
        {content}
        <ButtonGroup 
            onClick={() => setStage(stage + 1)}
        />
      </div>
      <div className="rightImage">
        <RightImage 
            stage = {stage}
        />
      </div>
    </div>
  );
}
