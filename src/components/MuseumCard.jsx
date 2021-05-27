import React from "react";
import "./MuseumCard.css";

const MuseumCard = ({ name, description, picture, exhibitions }) => {
  return (
    <div className={"museum-card"}>
      <div className={"museum-card-img-container"}>
        <img id={"museum-card-img"} src={picture} alt={name} />
      </div>
      <div className={"museum-card-text-container"}>
        <h1 className={"museum-card-title"}>{name}</h1>
        <p className={"museum-card-description"}>{description}</p>
      </div>
      <div className={"museum-card-exhibitions-container"}>
        <h1>UTSTILLINGER</h1>
        {exhibitions.length > 0 ? (
          <div className={"museum-card-exhibitions"}>
            {exhibitions.map((e, i) => (
              <div key={i}>
                <img src={e.media[0]} alt={"img"} />
                <h3 className={"exhibition-name"}>{e.name}</h3>
              </div>
            ))}
          </div>
        ) : (
          <p className={"museum-card-exhibitions"}>
            {name} har ingen utstillinger for øyeblikket.
          </p>
        )}
      </div>
    </div>
  );
};

export default MuseumCard;
