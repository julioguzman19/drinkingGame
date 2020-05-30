import React, { Component } from "react";
import "./App.css";
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
    let chosenGameElement;
    let chosenArrayElement;

    //------------CHECKING ARRAYS TO SEE WHICH HAVE RULES------------//

    //------------LOGIC IF BOTH ARRAYS HAVE ELEMENTS------------//
    if (
      questionsArray.individual.length > 0 &&
      questionsArray.everybody.length > 0
    ) {
      //CHOOSING 0 OR 1 WHICH WE WILL USE TO DETERMINE GAME
      chosenGameElement = Math.round(Math.random());

      //IF 0 THEN CHOOSE FROM INDIVIDUAL ARRAY
      if (chosenGameElement === 0) {
        //CHOOSING ELEMENT POSITION IN INDIVIDUAL ARRAY
        chosenArrayElement = Math.floor(
          Math.random() * questionsArray.individual.length
        );
        //SETTING RESULT TO CHOSEN ELEMENT
        result = questionsArray.individual[chosenArrayElement];
        //DELETING CHOSEN ITEM FROM ARRAY
        questionsArray.individual.splice(chosenArrayElement, 1);
      }
      //IF 1 THEN CHOOSE FROM EVERYBODY ARRAY
      if (chosenGameElement === 1) {
        //CHOOSING ELEMENT POSITION IN EVERYBODY ARRAY
        chosenArrayElement = Math.floor(
          Math.random() * questionsArray.everybody.length
        );
        //SETTING RESULT TO CHOSEN ELEMENT
        result = questionsArray.everybody[chosenArrayElement];
        //DELETING CHOSEN ITEM FROM ARRAY
        questionsArray.everybody.splice(chosenArrayElement, 1);
      }
    }
    //------------LOGIC IF INDIVIDUAL ONLY HAS ELEMENTS------------//
    else if (questionsArray.individual.length > 0) {
      chosenArrayElement = Math.floor(
        Math.random() * questionsArray.individual.length
      );
      result = questionsArray.individual[chosenArrayElement];
      questionsArray.individual.splice(chosenArrayElement, 1);
    }
    //------------LOGIC IF EVERYBODY ONLY HAS ELEMENTS------------//
    else if (questionsArray.everybody.length > 0) {
      chosenArrayElement = Math.floor(
        Math.random() * questionsArray.everybody.length
      );
      result = questionsArray.everybody[chosenArrayElement];
      questionsArray.everybody.splice(chosenArrayElement, 1);
    } else {
      result = "GAME IS OVER!";
    }

    /* let chosenArrayElement = Math.floor(Math.random() * questionsArray.length);
    result = questionsArray[0]; //change zero to chosenArray Element once tested
    
    questionsArray.splice(chosenArrayElement, 1); */
    console.log("individual: " + questionsArray.individual);
    console.log("everybody: " + questionsArray.everybody);
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
