import React, { useEffect, useState} from 'react';

const ArtPage = ({artwork}) => {

    const [art, setArt] = useState(null)

    console.log('artwork: ' + artwork)
    console.log('art: ' + art)

    useEffect( () => {
        fetch(`/artworks/${artwork}`).then((r) => {
            if (r.ok) {
                r.json().then(data => {
                setArt(data)
                })}
            })
        }, [])
    
    return (
        <div className='ArtPage' >
            { art? <> 
            <img className='ArtPageImg' src={art.url} />
            <div className='ArtPageDeets'>
                <div className='nameIcons'>
                    <img src='https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/salvador-dali-carina-povarchik.jpg' alt='icon' className='icon'/>
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
                <button className='TradeButton' >Offer a Trade</button>
            </div>
            </> 
            :<>
            <p style={{ fontSize:30, position:'relative', display:'flex', top:300, left:250 }}>loading...</p>
            </>}
        </div>
    );
}

export default ArtPage;
