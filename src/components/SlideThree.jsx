import React from "react";
import TargetAudience from "../images/Group 155.png";
import "./Slides.css";

const SlideThree = () => {
  return (
    <div id={"slide-three"}>
      <div className={"slide-container"}>
        <div className={"text-container"} id={'text-container-green'}>
          <h2 className={"slide-title"}>Mobilt minimuseum</h2>
          <p className={"slide-info"}>
            <span>&#8212;</span> Skreddersydd av eksperter, rettet mot din
            arbeidsplass
          </p>
        </div>
        <img src={TargetAudience} alt={""} />
      </div>
    </div>
  );
};

export default SlideThree;
