import React from "react";
import BgVideo from "./assets/laptop.mp4";

const VideoHeader = () => {
  return (
    <>
      <div className="video-header">
        <video
          src={BgVideo}
          autoPlay
          muted
          loop
          className="video-header-video"
        />
        <div className="video-header-overlay"></div>
        <div className="video-header-content">
          <h3>Stop Choosing, Start Doing.</h3>
          <h1>Live Your Multi-Passionate&nbsp;Life.</h1>
        </div>
      </div>
    </>
  );
};

export default VideoHeader;
