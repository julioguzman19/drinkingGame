import React from "react";
import "./App.css";
import Game from "./pages/Game/Game";
import NextButton from "./components/NextButton/index";

function App() {
  return (
    <div className="App">
      <Game />
      <NextButton />
    </div>
  );
}

export default App;
