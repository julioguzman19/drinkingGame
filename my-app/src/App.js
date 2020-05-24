import React, { Component } from "react";
import "./App.css";
import Game from "./pages/Game/Game";
import NextButton from "./components/NextButton/index";
let questionsArray = require("../src/data/questions");

class App extends Component {
  state = {
    questionsArray,
    chosenArrayElement: null,
    result: null,
  };

  //Will produce next question and remove current question from array
  nextQuestion = () => {
    let result = this.state.result;
    let chosenArrayElement = Math.floor(Math.random() * questionsArray.length);
    result = questionsArray[chosenArrayElement];
    questionsArray.splice(chosenArrayElement, 1);
    this.setState({ result: result }); //this state of result to the new result
  };

  render() {
    return (
      <div className="App">
        <div>{this.state.result}</div>
        <Game drinkRule={this.state.result} />
        <NextButton nextQuestion={this.nextQuestion} />
      </div>
    );
  }
}

export default App;
