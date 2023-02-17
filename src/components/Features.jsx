import React from "react";
import Video from "./Video";

function Features(){

return(
<div className="features">
   <div className="row">
        <div className="column">
        <p className="feature-p" >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Nam augue mi, imperdiet sit amet est consectetur,
        
      </p>
        </div>
        
         <div className="column">
    <Video/>
        </div>
    </div> 
    <div className="row row2">
        <div className="column2">
        <img className="feature-img" 
    src={require("../media/fitness woman.png")} 
    alt={"Intro Video"}/>
        </div>
        <div className="column2">
        <p className="feature-p">this ia paragraph
        tempus scelerisque purus. Sed nec dictum lacus. 
        Proin at sollicitudin tortor, eget convallis nunc.
         Mauris eget molestie nibh.
        </p>
        </div>
    </div>

 

</div>
)
}

export default Features;