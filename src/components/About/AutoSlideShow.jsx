import React from "react";
import { Slide } from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css'

const proprietes = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true
};

function Slideshow() {
  return (
    <div className="container-slide">
      <Slide {...proprietes}>
        <div className="each-slide">
          <img src={require("./strength.png")} alt="img1" className="autoSlide-img"/>
           </div>
        <div className="each-slide">
           <img src={require("./fitness woman.png")} alt="img2" className="autoSlide-img"/>
               </div>
        <div className="each-slide">
          <img src={require("./strength.png")} alt="img3" className="autoSlide-img"/>
            </div>
      </Slide>
    </div>
  );
};

export default Slideshow;