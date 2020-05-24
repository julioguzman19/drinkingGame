import React from "react";
import "./style.css";

//props to pass in variables and functions from App.js
function NextButton(props) {
  return (
    <div>
      <button onClick={() => props.nextQuestion}>Next</button>
    </div>
  );
}

export default NextButton;
