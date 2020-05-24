import React, { Component } from "react";
import "./App.css";
import Game from "./pages/Game/Game";
import NextButton from "./components/NextButton/index";
let questionsArray = require("../../data/questions");

class App extends Component {
  state = {
    questionsArray,
    chosenArrayElement: null,
    result: null,
  };

  //Will produce next question and remove current question from array
  nextQuestion = () => {
    let chosenArrayElement = Math.floor(Math.random() * questionsArray.length);
    let result = questionsArray[chosenArrayElement];
    questionsArray.splice(chosenArrayElement, 1);
    console.log(
      "Inside nextQuestion function: " +
        chosenArrayElement +
        "||||" +
        result +
        "||||" +
        questionsArray
    );
  };

  render() {
    return (
      <div className="App">
        <Game drinkRule={this.result} />
        <NextButton nextQuestion={this.nextQuestion} />
      </div>
    );
  }
}

export default App;
