import React, { useState } from "react";
import "./Navbar.css";
import { Sling as Hamburger } from "hamburger-react";
import {GoHome} from 'react-icons/go'

const Navbar = () => {
  // const [isOpen, setOpen] = useState(false)
  const [isOpen,setOpen] = useState(false);

  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo" style={{ backgroundImage: 'url(' + require('../..//Assets/Logo.png') + ')' }}>
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            isOpen ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            <li><a href="#home" onClick={() =>setOpen(!isOpen)}><GoHome /> Home</a></li>
            <li><a href="#about" onClick={() =>setOpen(!isOpen)}>about</a></li>
            <li><a href="#products" onClick={() =>setOpen(!isOpen)}>products</a></li>
            <li><a href="#contact-us" onClick={() =>setOpen(!isOpen)}>contact</a></li>
          </ul>
        </div>

        <div className="hamburger-material">
          <div className="hamburger-menu">
            <a>
            <Hamburger size={26} toggled={isOpen} toggle={setOpen}/>
            </a>
          </div>
        </div>
      </nav>

    </>
  );
};

export default Navbar;