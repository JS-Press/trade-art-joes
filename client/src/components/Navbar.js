import React from "react";
import {NavLink} from "react-router-dom"

function Navbar({}){


    return (
        <>
        <div id='nav'>
        <NavLink className='navLink' activeclassname="active" to="/about">about</NavLink>
        <NavLink className='navLink'  to="/login">login</NavLink>
        <NavLink className='navLink' to="/signup">signup</NavLink>
        </div>
        </>
    )
}

export default Navbar