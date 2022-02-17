import React from 'react';
import {Link } from "react-router-dom"

const Artcard = ({title, artist, year, size, description, url, tags, user_id, id, available}) => {


    return (
        <div className='ArtCard' >
            <img className='CardImgs' src={url} />
            <div className='ArtDeets'>
            <h2>{title}</h2>
            <h4>by {artist}</h4>
            </div>
        </div>
    );
}

export default Artcard;
