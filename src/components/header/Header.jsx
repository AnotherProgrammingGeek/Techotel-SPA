import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Header(props){
    const [navDisplay, setNavDisplay] = useState(false)
  return (
    <header>
        <div className="logoWraper">
            <img className ="logoImage" src={require("../../assets/images/tecLogo.png")} alt="Techotel Logo" />
        </div>
        <span className="burgerMenu" onClick={()=> setNavDisplay(!navDisplay)}><GiHamburgerMenu/></span>
        <nav className="navBar" >
            <NavLink
                className={({isActive})=> isActive ? "activeNaveItem" : "naveItem"} 
                to="/" >Home</NavLink>
            <NavLink
                className={({isActive})=> isActive ? "activeNaveItem" : "naveItem"}  
                to="/companyprofile" >Company Profile</NavLink>
            <NavLink
                className={({isActive})=> isActive ? "activeNaveItem" : "naveItem"}  
                to="/productsandservices" >Products and services</NavLink>
            <NavLink
                className={({isActive})=> isActive ? "activeNaveItem" : "naveItem"}  
                to="/project" >Projects</NavLink>
            <NavLink
                className={({isActive})=> isActive ? "activeNaveItem" : "naveItem"}  
                to="/factory" >Factory</NavLink>
            <NavLink
                className={({isActive})=> isActive ? "activeNaveItem" : "naveItem"}  
                to="/showroom" >Showroom</NavLink>
            <NavLink
                className={({isActive})=> isActive ? "activeNaveItem" : "naveItem"}  
                to="/contactus" >Contact us</NavLink>
        </nav>
        <nav className="min-navBar" style={{display: (navDisplay)? 'flex' : 'none' }}>
            <NavLink
                className={({isActive})=> isActive ? "activeNaveItem" : "naveItem"} 
                to="/" onClick={()=> setNavDisplay(!navDisplay)}>Home</NavLink>
            <NavLink
                className={({isActive})=> isActive ? "activeNaveItem" : "naveItem"}  
                to="/companyprofile" onClick={()=> setNavDisplay(!navDisplay)}>Company Profile</NavLink>
            <NavLink
                className={({isActive})=> isActive ? "activeNaveItem" : "naveItem"}  
                to="/productsandservices"onClick={()=> setNavDisplay(!navDisplay)}>Products and services</NavLink>
            <NavLink
                className={({isActive})=> isActive ? "activeNaveItem" : "naveItem"}  
                to="/project" onClick={()=> setNavDisplay(!navDisplay)}>Projects</NavLink>
            <NavLink
                className={({isActive})=> isActive ? "activeNaveItem" : "naveItem"}  
                to="/factory" onClick={()=> setNavDisplay(!navDisplay)}>Factory</NavLink>
            <NavLink
                className={({isActive})=> isActive ? "activeNaveItem" : "naveItem"}  
                to="/showroom" onClick={()=> setNavDisplay(!navDisplay)}>Showroom</NavLink>
            <NavLink
                className={({isActive})=> isActive ? "activeNaveItem" : "naveItem"}  
                to="/contactus" onClick={()=> setNavDisplay(!navDisplay)}>Contact us</NavLink>
        </nav>
    </header>
  )
};

        