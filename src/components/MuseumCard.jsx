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
            <p className={"museum-card-description"}>{description}</p>
        </div>
        <div className={"museum-card-exhibitions-container"}>
            <h1>UTSTILLINGER</h1>
            <div className={"museum-card-exhibitions"}>
                <div>
                    <img src={exhibitions[0]}  alt={"img"} />
                    <h3>Navn en (1)</h3>
                </div>
                <div>
                    <img src={exhibitions[1]}  alt={"img"} />
                    <h3>Navn 2 (2)</h3>
                </div>
                <div>
                    <img src={exhibitions[2]}  alt={"img"} />
                    <h3>Navn 3 (3)</h3>
                </div>
                <div>
                    <img src={exhibitions[3]}  alt={"img"} />
                    <h3>Navn 4 (4)</h3>
                </div>
            </div>
        </div>
    </div>
  );
};

export default MuseumCard;
