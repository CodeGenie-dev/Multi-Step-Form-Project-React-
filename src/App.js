import "./styles.css";
import React from "react";
import LeftContainer from "./LeftContainer";
import TextInput from "./TextInput";
import ButtonGroup from "./ButtonGroup";
import RightImage from "./RightImage";

export default function App() {
  const [stage, setStage] = React.useState(0);
  let btnGrpClassName = `btn ${stage === 3 ? "hide" : ""}`;
  let textInputClassName = [
    `emailInput ${stage !== 0 ? "hide" : ""}`,
    `buttonContainer ${stage !== 1 ? "hide" : ""}`,
    `textArea ${stage !== 2 ? "hide" : ""}`
  ];

  const [value, setValue] = React.useState("");
  const onChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };
  if (stage === 3) {
    alert(JSON.stringify({ ...value }));
  }
  return (
    <div className="App">
      <div className="LeftContainer">
        <LeftContainer title={stage} />
        <TextInput
          className={textInputClassName}
          onChange={onChange}
          onClick={onChange}
        />
        <ButtonGroup
          onClick={() => setStage(stage + 1)}
          className={btnGrpClassName}
        />
      </div>
      <div className="rightImage">
        <RightImage stage={stage} />
      </div>
    </div>
  );
}
