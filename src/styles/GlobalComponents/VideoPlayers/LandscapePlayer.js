import React from "react";
import ReactPlayer from "react-player";

const LandscapePlayer = (props) => (
  <div className="player-wrapper">
    <ReactPlayer
      url={props.url}
      className="react-player"
      width="100%"
      height="100%"
      controls={true}
    />
  </div>
);

export default LandscapePlayer;