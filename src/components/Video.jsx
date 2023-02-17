import React from "react";
import "../media/workout.mp4";

const Video = () => {
    return (
      
  <iframe 
  width="560" 
  height="315" 
  src="https://www.youtube.com/embed/lsRAK6cr5kY" 
  title="YouTube video player" 
  frameborder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
  allowfullscreen
  className="feature-video">

  </iframe>
    );
  };
  
  export default Video;