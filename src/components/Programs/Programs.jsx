import React from "react";
import "./programs-styles.css";
import Footer from "../Footer";
import { Carousel } from 'react-responsive-carousel';


function Program() {
    return(
    <div className="programs">
 <div className="top-section">
<h1 className="program-header">What I offer</h1>

<div className="program-slides">

<Carousel>
        <div className="program-slides">
        <h4>Nutrition</h4>
        <img className="slide-img" 
    src={require("./yoga.png")} 
    alt={"Intro Video"}/>
          <p className="legend">hiiii <span className="name">Sandra G</span></p>
        </div>
        <div className="program-slides">
        <h4>workout</h4>
        <img className="slide-img" 
    src={require("./yoga.png")} 
    alt={"Intro Video"}/>
          <p className="legend">Legend 2</p>
        </div>
        <div className="program-slides">
        <h4>Nutrition</h4>
        <img className="slide-img" 
    src={require("./yoga.png")} 
    alt={"Intro Video"}/>
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    </div>
   <hr/> </div>


<div className="plans">
<h3 className="plans-header">Plans</h3>
<div className="box-section">
<div className="box">
<img className="icon" 
    src={require("./yoga.png")} 
    alt={"program"}/>
<h4 className="aboutCompanyText">About Company
 <hr/>
 <p>hi</p>
 </h4></div>

 <div className="box">
<img className="icon" 
    src={require("./yoga.png")} 
    alt={"program"}/>
<h4 className="aboutCompanyText">About Company
 <hr/>
 <p>hi</p>
 </h4></div>
 
 <div className="box">
<img className="icon" 
    src={require("./yoga.png")} 
    alt={"program"}/>
<h4 className="aboutCompanyText">About Company
 <hr/>
 <p>hi</p>
 </h4></div>
 </div>

</div>
<Footer/>

    </div>)
}

export default Program;