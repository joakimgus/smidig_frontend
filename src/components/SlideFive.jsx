import React from "react";
import "./Slides.css";
import Process2 from "../images/kjøpsprosess2.png";

const SlideFive = () => {
  return (
    <div id={"slide-five"}>
      <div className={"slide-container"}>
        <div className={"text-container"} id={"text-container-blue"}>
          <h2 className={"slide-title"}>Mobilt minimuseum</h2>
          <p className={"slide-info"}>
            <span>&#8212;</span> Trygg og rask levering!
          </p>
        </div>
        <img src={Process2} alt={""} />
      </div>
    </div>
  );
};

export default SlideFive;
