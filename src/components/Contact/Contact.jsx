import React, {useState} from "react";
import "./contact-styles.css";

function Contact() {
  const [style, setStyle] = useState("contact-page");
  const [container, setContainer] = useState("contact-container");
  const [title, setTitle] = useState("title");
  const [title2, setTitle2] = useState("title2Before");
  const changeStyle = () => {
    setStyle("contact-pageAfter");
    setContainer("containerAfter");
    setTitle("titleAfter");
    setTitle2("title2");
  };
 
    return(
      <div className="contact-body">
<div className={style}>
   <h1 className={title}>Contact Me</h1>
   <h1 className={title2} id="titleBefore">Thank you for contacting us</h1>
<div className={container}>
        <form className="contact-form" method="post">
        <input type="text" name="name" placeholder="Full Name"/>
        <input type="text" name="email" placeholder="Email"/>
        <input type="text" name="phone" placeholder="Phone Number"/>
        <textarea type="text" placeholder="Message"/>
        <button type="button" className="btn" onClick={changeStyle}>Send</button>
        </form>
        
        <div className="contact-box">
        <h3>My Info</h3>
       <p>Sabdy Jimenez</p>
       <p>(559)123-1234</p>
       <p>strengthwtsabdy@gmail.com</p>
       <p>1234 Street name suite 123, Fresno, CA 93711</p>
        </div>

      </div>    
    </div>  
    </div>                           
    )
}

export default Contact;
