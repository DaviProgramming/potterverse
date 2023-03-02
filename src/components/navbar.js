import React from 'react'
import logo from '../assets/logo.png'
const Navbar = () => {
    return (

        <nav>
            <div className="navbar-content">
                <img src={logo} alt="" />
                <span>PotterVerse</span> 
            </div>

        </nav>
    )
}

export default Navbar