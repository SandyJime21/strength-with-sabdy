import React from "react";

function Header() {
    return (
 <>
<header className="head">
    <h1 className="header">Str<img 
    className="header-photo" 
    src={require("../media/strength.png")} 
    alt={"Strength"}/>ngth
    <span className="with"> with</span> Sabdy</h1>

    {/* <nav>
    <a href="/" class="myButton">Sign In</a>

    <a href="/" class="myButton">Sign Up</a>

    </nav> */}
</header>

        </>
    )
}

export default Header;