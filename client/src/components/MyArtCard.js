import React from 'react';
import { useNavigate } from "react-router-dom";

const Myartcard = ({ title, artist, year, size, description, url, tags, user, id, available, setArtist }) => {

    const navigate = useNavigate()

    function handleDeetClick(e){
    navigate(`/myArtworks/${id}`)
    }

    function handleDelete(){
    console.log('deleting: ' + title + ' # ' + id)
    fetch(`/artworks/${id}`, {
        method: "DELETE"
      }).then((r) => {
        if (r.ok) {
        console.log('successful delete!')
        navigate(`/myArt`)
      }else {
        console.log('unsuccessful delete :(')
    }})
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
                <button className='TradeButton' style={{marginLeft:8, padding:10, fontSize:14, borderWidth:4, width:120}} onClick={handleDelete}>X DELETE</button>
            </div>
        </div>
    );
}

export default Myartcard;
