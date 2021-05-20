import React from "react";
import { Circle } from "better-react-spinkit";

const Loading = () => {
  return (
    <div style={{ display: "grid", placeItems: "center", height: "100vh" }}>
      <Circle color="rgb(29, 29, 29)" size={60} />
    </div>
  );
};

export default Loading;
