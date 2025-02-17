import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import {FaTimes, FaBars } from 'react-icons/fa'
import { useState } from 'react'

const Navbar = () => {

    const[click, setClick]=useState(false)


    const handleClick =() =>{
        setClick(!click)
    }
  return (
    <nav>
        <div className='logo'>
            <h1>GLX TRVL</h1>
        </div>
        <div className={click ? "menu active": "menu"}>
        <Link to='/'>Home</Link>
        <Link to='/Training'>Training</Link>
        <Link to='/Pricing'>Pricing</Link>
        <Link to='/Contact'>Contact</Link>
        </div>

    <div className='hamburger' onClick={handleClick}>
        {
            click ?(
                <FaTimes style={{color: "white"}} size={25}/>
            ) : (
                <FaBars style={{color: "white"}} size={25}/>
            )
        }
    </div>
    </nav>
  )
}

export default Navbar
