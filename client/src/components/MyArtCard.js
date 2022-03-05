import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";

const Myartcard = ({ title, artist, year, size, url, tags, user, id, handleDelete }) => {

    const navigate = useNavigate()
    

    function handleDeetClick(e){
    navigate(`/myArtworks/${id}`)
    }

    
    return (
        <div className='ArtistArtCard' >
            <img className='CardImgs' src={url} value={id} alt='art image not found'onClick={handleDeetClick} />
            <div className='ArtDeets'>
            <h2 style={{fontSize:20}}>{title}</h2>
            <h4 style={{fontSize:14}}>{tags}</h4>
            <h4 style={{fontSize:14}}>{size}"</h4>
            <h4 style={{fontSize:14}}>{year}</h4>
            <div style={{display:'flex', flexFlow:'column', marginTop:-45 }} ></div>
                <button className='details' style={{ marginLeft:23 }} onClick={handleDeetClick} >DETAILS</button>
                <button className='TradeButton' style={{marginLeft:8, padding:10, fontSize:14, borderWidth:4, width:120}} onClick={()=>handleDelete(id)}>X DELETE</button>
            </div>
        </div>
    );
}

export default Myartcard;
