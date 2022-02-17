import React, { useEffect, useState} from 'react';

const ArtPage = ({artwork}) => {

    const [art, setArt] = useState({})

    console.log(art)

    useEffect( () => {
        fetch(`/artworks/${artwork}`).then((r) => {
            if (r.ok) {
                r.json().then(data => {
                setArt(data)
                })}
            })
            }, [])
    
    return (
        <div>
            <img className='ArtPageImg' src={art.url} />
        </div>
    );
}

export default ArtPage;
