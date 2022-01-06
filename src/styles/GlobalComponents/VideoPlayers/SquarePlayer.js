import React from "react";
import ReactPlayer from "react-player";

const SquarePlayer = (props) => (
  <div className="square-player-wrapper">
    <ReactPlayer
      url={props.url}
      className="react-player"
      width="100%"
      height="100%"
      controls={true}
    />
  </div>
);

export default SquarePlayer;