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
          <h3>Unlock your potential with</h3>
          <h1>Mehnaz Tabassum</h1>
        </div>
      </div>
    </>
  );
};

export default VideoHeader;
