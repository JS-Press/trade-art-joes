import React from "react";
import {NavLink} from "react-router-dom"

function Navbar({}){


    return (
        <>
        <div id='nav'>
        <NavLink className='navLink' to="/about">about</NavLink>
        <NavLink className='inupLinks' to="/login">login</NavLink>
        <NavLink className='inupLinks' to="/signup">signup</NavLink>
        </div>
        </>
    )
}

export default Navbar