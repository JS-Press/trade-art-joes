import React, { useEffect, useState} from 'react';
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom";

const ArtPage = ({setTradeArtwork, loggedIn}) => {

    const navigate = useNavigate()
    let { id } = useParams();
    const [art, setArt] = useState(null)
    
    useEffect( () => {
        fetch(`/artworks/${id}`).then((r) => {
            if (r.ok) {
                r.json().then(data => {
                setArt(data)
                })}
            })
        }, [])

    console.log('art: ')
    console.log(art)
    
    // console.log('id: ' + id )


    function handleArtistClick(e){
        navigate(`/users/${art.user_id}`)
    }

    function handleOfferClick(e){
        setTradeArtwork(art)
        navigate(`/tradeMake`)
    }
    
    return (
        <div className='ArtPage' >
            { art? <> 
            <img className='ArtPageImg' src={art.url} />
            <div className='ArtPageDeets'>
                <div className='nameIcons' >
                    <img src={art.user.profile_pic} alt='icon' className='icon' onClick={handleArtistClick} />
                    <div className='nameInfo'>
                        <h2 style={{ fontSize:20 }}>{art.artist}</h2>
                        <h4 style={{ marginTop:5 }}>{art.user.city}, {art.user.state}</h4>
                    </div>
                </div>
                <br></br>
                <br></br>
                <h2>{art.title}</h2>
                <h4 style={{ marginRight:-200 }}>{art.tags}</h4>
                <h4>{art.size} "</h4>
                <h4>{art.year}</h4>
                <br></br>
                <br></br>
                <h4>{art.description}</h4>
                <br></br>
            { loggedIn && art.available? <>
                <button className='TradeButton' onClick={handleOfferClick} >Offer a Trade</button>
            </>
            :<>
            </>
            }
                
            </div>
            </> 
            :<>
            <p className='loading' style={{ marginLeft:100, marginTop:180 }} >loading art...</p>
            </>}
        </div>
    );
}

export default ArtPage;
