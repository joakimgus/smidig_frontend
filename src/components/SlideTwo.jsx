import React from "react";
import ItemImg from "../images/museum-artifact.png";

const SlideTwo = () => {
  return (
    <div id={"slide-two"}>
      <div className={"slide-container"}>
        <div className={"text-container"}>
          <h2 className={"slide-title"}>Mobilt minimuseum</h2>
          <p className={"slide-info"}>
            <span>&#8212;</span> Få opplevelsen levert på døra, rett fra kilden
          </p>
        </div>
        <img src={ItemImg} alt={"museumsartifakt"} />
      </div>
    </div>
  );
};

export default SlideTwo;
