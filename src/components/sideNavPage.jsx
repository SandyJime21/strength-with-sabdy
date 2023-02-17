import React from "react";
import {Link } from 'react-router-dom';
  //import Home from "./Home";

  

function sideNavPage() {
    return (
    
<div id="mySidenav" class="sidenav">
<Link to="/" id="home">Home</Link>
<Link to="/About" id="about">About</Link>
<Link to="/Programs" id="programs">Program</Link>
<Link to="/Contact" id="contact">Contact</Link>

  
</div>

    )
}

export default sideNavPage;
