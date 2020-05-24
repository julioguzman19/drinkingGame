import React from "react";
import "./style.css";
//import DrinkRule from "../../components/DrinkRule";

function Game(props) {
  return (
    <div class="gameCenter">
      <div class="gameText">{props.DrinkRule}</div>
    </div>
  );
}
export default Game;
