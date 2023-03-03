import React, { useState } from 'react'
import "./header.css"
import logo from "../../Images/logo.png"
import { AiOutlineMenu } from 'react-icons/ai';
import { AiOutlineClose } from 'react-icons/ai';

const Header = () => {

    
    const [menu, setMenu] = useState(false)
    let ToggleMenu =()=>{
        setMenu(!menu);
        console.log("Hi")
    }
    return (
        <>
     <div className="header-container d-flex">
        <div className="header-left">
            <div className="logo"><a href="./"><img src={logo} alt="" /></a></div>
        </div>
        <div className="header-center">
            <ul className='d-flex'>
                <li><a href="./">Startups</a></li>
                <li><a href="./">Raise Funding</a></li>
                <li><a href="./">Learn</a></li>
            </ul>
        </div>
        <div className="header-right d-flex">
            <a className='login-btn' href="./">Login</a>
            <a className='get-started-btn' href="./">Get Started</a>
        </div>
           <button onClick={ToggleMenu}>{menu?<AiOutlineClose className='close-icon'/>: <AiOutlineMenu className='menu-icon' />}</button>
        <div className="mobile-nav-container">
            <div className={`mobile-nav d-flex ${menu && 'active'}`}>

        <a href="./">Startups</a>
        <a href="./">Raise Funding</a>
        <a href="./">Login</a>
        <a className='get-started-btn' href="./">Get Started</a>
         <p>Learn</p>
         <a href="./">Learn</a>
         <a href="./">SHE.E.O</a>
         <a href="./">Blog</a>
         <a href="./">FAQ</a>
         <a href="./">Knowledge Base</a>
         <a href="./">About</a>
         <a href="./">Flashcards</a>
        </div>
        </div> 
            </div>
    </>
  )
}

export default Header
