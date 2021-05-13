const MuseumCard = ({name, description, picture, exhibitions}) => {
  return (
      <div className={"museum-card"}>
          <div>{name}</div>
          <div>{description}</div>
          <img src={picture.default} />
      </div>
  );
};

export default MuseumCard;
