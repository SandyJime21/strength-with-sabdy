import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default class Testimonials extends Component {
  render() {
    return (
      <div className="testimonial-container">  
      <h1 className="testimonial-h1">Testimonials</h1>
      <Carousel>
        <div className="testimonial-slides">
        <img className="testimonial-img" 
    src={require("../media/fitness woman.png")} 
    alt={"Intro Video"}/>
          <p className="legend">Helped me fit into my wedding dress. <span className="name">Sandra G</span></p>
        </div>
        <div className="testimonial-slides">
        <img className="testimonial-img" 
    src={require("../media/fitness woman.png")} 
    alt={"Intro Video"}/>
          <p className="legend">Legend 2</p>
        </div>
        <div className="testimonial-slides">
        <img className="testimonial-img" 
    src={require("../media/fitness woman.png")} 
    alt={"Intro Video"}/>
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
      </div>
    );
  }
}

