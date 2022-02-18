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
            <h2>{art.artist}</h2>
            <h4>{art.user.city}, {art.user.state}</h4>
            <h2>{art.title}</h2>
            <h4>{art.tags}</h4>
            <h4>{art.size}</h4>
            <h4>{art.year}</h4>
            <h4>{art.description}</h4>
            </div>
            </> 
            :<>
            <p>loading</p>
            </>}
        </div>
    );
}

export default ArtPage;
