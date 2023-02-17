import { Routes, Route } from "react-router-dom";
import React from "react";
import SideNavPage from "./sideNavPage";
import Layout from "./Layout";
import AboutMe from "./About/About-Me";
import Program from "./Programs/Programs";
import  Contact from "./Contact/Contact";



function App(){

return(
    <>
    <SideNavPage/> 
    <Routes>
    <Route path="" element={ <Layout/> }></Route>
    <Route path="/About" element={ <AboutMe/> }></Route>
    <Route path="/Programs" element={ <Program/> }> </Route>
    <Route path="/Contact" element={ <Contact/> }> </Route>
</Routes>
  </>
)
}

export default App;