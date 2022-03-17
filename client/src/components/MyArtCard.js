import React from 'react';
import { useNavigate } from "react-router-dom";

const Myartcard = ({ title, year, size, url, tags, id, handleDeleteClick }) => {

    const navigate = useNavigate()
    
    function handleDeetClick(e){
    navigate(`/myArtworks/${id}`)
    }
    
    return (
        <div className='ArtistArtCard' >
            <img className='CardImgs' src={url} value={id} alt='art not found' onClick={handleDeetClick} />
            <div className='ArtDeets'>
                <h2 style={{fontSize:20}}>{title}</h2>
                <h4 style={{fontSize:14}}>{tags}</h4>
                <h4 style={{fontSize:14}}>{size}"</h4>
                <h4 style={{fontSize:14}}>{year}</h4>
                <div style={{display:'flex', flexFlow:'column', marginTop:-45 }} >
                    <button className='TradeButton' style={{marginLeft:60, padding:10, fontSize:16, borderWidth:4, width:140}} onClick={()=>handleDeleteClick(id)}>X DELETE</button>
                    <button className='details' style={{ marginLeft:10, marginTop:6, fontSize:16 }} onClick={handleDeetClick} >art details</button>
                </div>
            </div>
        </div>
    );
}

export default Myartcard;
