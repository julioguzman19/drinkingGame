import React, { Component } from "react";
import "./App.css";
import NextButton from "./components/NextButton/index";
let questionsObject = require("../src/data/questions");

class App extends Component {
  state = {
    questionsObject,
    chosenArrayElement: null,
    result: null,
  };

  //Will produce next question and remove current question from array
  nextQuestion = () => {
    let result = this.state.result;
    let chosenGameElement;
    let chosenArrayElement;

    //------------CHECKING ARRAYS TO SEE WHICH HAVE RULES------------//

    //------------LOGIC IF BOTH ARRAYS HAVE ELEMENTS------------//
    if (
      questionsObject.individual.length > 0 &&
      questionsObject.everybody.length > 0
    ) {
      //CHOOSING 0 OR 1 WHICH WE WILL USE TO DETERMINE GAME
      chosenGameElement = Math.round(Math.random());

      //IF 0 THEN CHOOSE FROM INDIVIDUAL ARRAY
      if (chosenGameElement === 0) {
        //CHOOSING ELEMENT POSITION IN INDIVIDUAL ARRAY
        chosenArrayElement = Math.floor(
          Math.random() * questionsObject.individual.length
        );
        //SETTING RESULT TO CHOSEN ELEMENT
        result = questionsObject.individual[chosenArrayElement];
        //DELETING CHOSEN ITEM FROM ARRAY
        questionsObject.individual.splice(chosenArrayElement, 1);
      }
      //IF 1 THEN CHOOSE FROM EVERYBODY ARRAY
      if (chosenGameElement === 1) {
        //CHOOSING ELEMENT POSITION IN EVERYBODY ARRAY
        chosenArrayElement = Math.floor(
          Math.random() * questionsObject.everybody.length
        );
        //SETTING RESULT TO CHOSEN ELEMENT
        result = "Everybody: " + questionsObject.everybody[chosenArrayElement];
        //DELETING CHOSEN ITEM FROM ARRAY
        questionsObject.everybody.splice(chosenArrayElement, 1);
      }
    }
    //------------LOGIC IF INDIVIDUAL ONLY HAS ELEMENTS------------//
    else if (questionsObject.individual.length > 0) {
      chosenArrayElement = Math.floor(
        Math.random() * questionsObject.individual.length
      );
      result = questionsObject.individual[chosenArrayElement];
      questionsObject.individual.splice(chosenArrayElement, 1);
    }
    //------------LOGIC IF EVERYBODY ONLY HAS ELEMENTS------------//
    else if (questionsObject.everybody.length > 0) {
      chosenArrayElement = Math.floor(
        Math.random() * questionsObject.everybody.length
      );
      result = "Everybody: " + questionsObject.everybody[chosenArrayElement];
      questionsObject.everybody.splice(chosenArrayElement, 1);
    }
    //------------GAME OVER------------//
    else {
      result = "GAME IS OVER!";
    }
    this.setState({ result: result }); //this state of result to the new result
  };

  render() {
    return (
      <div className="App">
        <div className="gameText">{this.state.result}</div>
        <NextButton nextQuestion={this.nextQuestion} />
      </div>
    );
  }
}

export default App;
