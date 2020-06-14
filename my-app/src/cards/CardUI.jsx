import React from "react";
import "./cardStyle.css";

const Card = (props) => {
  return (
    <div className="card text-center">
      <div className="overflow">
        <img src="" alt="alt" />
      </div>
      <div className="cardbody text-dark"></div>
      <h4 className="card-title">Card Title</h4>
      <p className="card-text text-secondary">
        Some text from Card {props.cardText}
      </p>
    </div>
  );
};
export default Card;
