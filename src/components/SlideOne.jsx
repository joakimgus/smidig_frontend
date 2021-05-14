import React from "react";
import "./Slides.css";
import Abstract from "../images/Abstract font blub.png";

const SlideOne = () => {
  return (
    <div className={"slide-wrapper"}>
      <div className={"slide-container"}>
        <img src={Abstract} alt={"info blobb"} />
        <div className={"text-container"}>
          <h2 className={"slide-title"}>Mobilt minimuseum</h2>
          <p className={"slide-info"}>
            <span>&#8212;</span> Vi tar museet til deg!
          </p>
        </div>
      </div>
    </div>
  );
};

export default SlideOne;
