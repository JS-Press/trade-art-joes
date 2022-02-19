import React from 'react';
import { useNavigate } from "react-router-dom";

const ArtistArtCard = ({ title, artist, year, size, description, url, tags, user, id, available}) => {

    const navigate = useNavigate()

    function handleClick(e){
    navigate(`/artworks/${id}`)
    }


    return (
        <div className='ArtistArtCard' onClick={handleClick} >
            <img className='CardImgs' src={url} value={id} alt='art image not found'/>
            <div className='ArtDeets'>
            <h2 style={{fontSize:20}}>{title}</h2>
            <h4 style={{fontSize:14}}>{tags}</h4>
            <h4 style={{fontSize:14}}>{size}"</h4>
            <h4 style={{fontSize:14}}>{year}</h4>
            <br></br>
            </div>
        </div>
    );
}

export default ArtistArtCard;
