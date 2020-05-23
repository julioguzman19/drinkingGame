import React, { Component } from "react";
import "./style.css";
let questionsArray = require("../../data/questions");
import DrinkRule from "../../components/DrinkRule";

let chosenArrayElement = Math.floor(Math.random() * questionsArray.length);
let result = questionsArray[chosenArrayElement];

class NextButton extends Component {
  removeQuestion() {
    questionsArray.splice(chosenArrayElement, 1);
    chosenArrayElement = Math.floor(Math.random() * questionsArray.length);
    result = questionsArray[chosenArrayElement];
  }
  render() {
    return (
      <div>
        <button onclick="removeQuestion()">Next</button>
      </div>
    );
  }
}

export default NextButton;
/* module.exports(result); */
