import React from "react";
import "./Slides.css";
import Process1 from "../images/kjøpsprosess.png";

const SlideFour = () => {
  return (
    <div id={"slide-four"}>
      <div className={"slide-container"}>
        <div className={"text-container"} id={"text-container-red"}>
          <h2 className={"slide-title"}>Mobilt minimuseum</h2>
          <p className={"slide-info"}>
            <span>&#8212;</span> Enkel og rask bestillingprosess!
          </p>
        </div>
        <img src={Process1} alt={""} />
      </div>
    </div>
  );
};

export default SlideFour;
