import React from "react";
import "./Home.css";
import homeImg from "../../../images/running.png";

const Main = () => {
  return (
    <main className="main">
      <div className="left_container">
        <h1>Exercise Tracker</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio at
          praesentium possimus, neque impedit, aut voluptatum molestiae quis,
          saepe placeat accusantium est sed dignissimos necessitatibus quisquam
          consequuntur obcaecati provident quibusdam numquam cum fugiat culpa
          eius perferendis. Aperiam et, quo adipisci nemo nisi quis laudantium
          in modi quod, porro ea ratione?
        </p>
      </div>
      <div className="right_container">
        <img className="home_img" src={homeImg} alt="" />
      </div>
    </main>
  );
};

export default Main;
