import React from "react";
import "./MuseumCard.css";

const MuseumCard = ({ name, description, picture, exhibitions }) => {
  return (
    <div className={"museum-card"}>
        <div className={"museum-card-img-container"}>
            <img id={"museum-card-img"} src={picture.default} alt={description} />
        </div>
        <div className={"museum-card-text-container"}>
            <h1 className={"museum-card-title"}>{name}</h1>
            <p>{description}</p>
        </div>
        <div className={"museum-card-exhibitions-container"}>
            <h1>UTSTILLINGER</h1>
        </div>
    </div>
  );
};

export default MuseumCard;
