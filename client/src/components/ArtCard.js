import React from 'react';
import {Link } from "react-router-dom"

const Artcard = ({title, artist, year, size, description, url, tags, user_id, id, available}) => {


    return (
        <div className='ArtCard' >
            <img className='CardImgs' src={url} />
            <div className='ArtDeets'>
            <h2>{title}</h2>
            <h3>{year}</h3>
            <h3>{size}</h3>
            <h3>{description}</h3>
            <h3>{artist}</h3>
            <h3>{tags}</h3>
            </div>
        </div>
    );
}

export default Artcard;
