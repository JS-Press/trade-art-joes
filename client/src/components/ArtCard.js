import React from 'react';
import { useNavigate } from "react-router-dom";
import {Link } from "react-router-dom"

const ArtCard = ({ title, artist, year, size, description, url, tags, user, id, available}) => {

    const navigate = useNavigate()

    function handleClick(e){
    navigate(`/artworks/${id}`)
    }


    return (
        <div className='ArtCard' onClick={handleClick} >
            <img className='CardImgs' src={url} value={id} alt='art image not found'/>
            <div className='ArtDeets'>
            <h2>{title}</h2>
            <h4>{tags}</h4>
            <h4>{size}"</h4>
            <h4>{year}</h4>
            <br></br>
            <h4>by {artist}</h4>
            <h4>{user.city}, {user.state}</h4>
            </div>
        </div>
    );
}

export default ArtCard;
