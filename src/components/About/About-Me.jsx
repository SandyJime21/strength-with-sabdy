import React from "react";
import Footer from "../Footer";
import "./about-styles.css";
import Slideshow from "./AutoSlideShow";


function AboutMe(){
 
    return(
<div className="About-me">
   {/* Header */}
   <h1>Sabdy Jimenez</h1>
  <h6>What I do</h6> 
{/* Cicle picture */}
<img 
className="profile-img" 
    src={require("./strength.png")} 
    alt={"Sabdy Jimenez"}/>
{/* 3 squares of what you offer */}
<div className="box-section">
  <div className="box">1</div>
  <div className="box">2</div>
  <div className="box">3</div>
</div>
<hr/>
<div className="box-section2">
<h2 className="box2">About Company</h2>
<p className="box2">This is what we are all about</p>
</div>
<hr/>

{/* Grab Attention */}
<div>
<h1>Large Catchy Text</h1>
<h1>Large Catchy Text other color</h1>
<br/>
</div>

{/* My Certificates */}

<div className="Certificates">

<h1>Skills/ Certificates</h1>
<Slideshow/>


</div>
<Footer/>
</div>

  )
    
}

export default AboutMe;