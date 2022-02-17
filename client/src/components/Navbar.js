import React, { useState } from "react";
import {NavLink} from "react-router-dom"

function Navbar({ handleLogout, loggedIn }){


    return (
<>
    {loggedIn && (
        <>
        <div id='nav'>
        <NavLink className='navLink' to="/about">about</NavLink>
        <NavLink className='navLink' to="/myart">my art</NavLink>
        <NavLink className='navLink' to="/mytrades">my trades</NavLink>
        <NavLink className='navLink' id='logout' to="/logout" onClick={handleLogout} >logout</NavLink>
        <p style={{ fontSize:16, fontWeight:200, marginTop:8, marginLeft:8, borderRadius:50 }} >hi Jeanette!</p>
        </div>
        </>
    )}
    {!loggedIn && (
        <>
        <div id='nav'>
        <NavLink className='navLink' to="/about">about</NavLink>
        <NavLink className='inupLinks' to="/login">login</NavLink>
        <NavLink className='inupLinks' to="/signup">signup</NavLink>
        <p style={{ fontSize:18, fontWeight:200, marginTop:6, borderRadius:50, marginLeft:20 }} >Welcome!</p>
        </div>
        </>
    )}
</>
    )
}

export default Navbar