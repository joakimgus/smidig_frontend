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
        {exhibitions && (
          <div className={"museum-card-exhibitions"}>
            {exhibitions.map((e) => (
              <div>
                <img src={e.picture} alt={"img"} />
                <h3 className={"exhibition-name"}>{e.name}</h3>
              </div>
            ))}
            {/*<div>
            <img src={exhibitions[0]} alt={"img"} />
            <h3 className={"exhibition-name"}>{}</h3>
          </div>
          <div>
            <img src={exhibitions[1]} alt={"img"} />
            <h3 className={"exhibition-name"}>Navn 2 (2)</h3>
          </div>
          <div>
            <img src={exhibitions[2]} alt={"img"} />
            <h3 className={"exhibition-name"}>Navn 3 (3)</h3>
          </div>
          <div id={"exhibition-item-four"}>
            <img src={exhibitions[3]} alt={"img"} />
            <h3 className={"exhibition-name"}>Navn 4 (4)</h3>
          </div>*/}
          </div>
        )}
      </div>
    </div>
  );
};

export default MuseumCard;
