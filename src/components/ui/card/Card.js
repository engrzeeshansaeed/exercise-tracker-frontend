import React from "react";
import cardImg from "../../../images/bicycle.svg";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./Card.css";

const Card = () => {
  return (
    <div className="card-container">
      <div className="card">
        <div className="card-top">
          <button className="left-button">Edit</button>
          <button className="right-button">Delete</button>
        </div>
        <img src={cardImg} className="cardImg" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
        </div>
        <div className="card-bottom">
          <p className="time-container">Time</p>
          <p className="date-container">Date</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
