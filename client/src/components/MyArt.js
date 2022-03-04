import React, {useState, useEffect} from 'react';
import ArtistArtCard from './ArtistArtCard';

const Myart = ({user}) => {

    const [artist, setArtist] = useState({})

    useEffect( () => {
        fetch(`/users/${user.id}`).then((r) => {
            if (r.ok) {
                r.json().then(data => {
                setArtist(data)
                })}
            })
        }, [])

        console.log(artist)
        console.log(user)

        const artistWorks = artist.artworks.filter(c => c.user_id === artist.id)
        const avail_art = artistWorks.filter(a => a.available === true)
        const artCards = avail_art.map(c => <ArtistArtCard key={c.id} id={c.id} title={c.title} tags={c.tags} size={c.size} year={c.year} url={c.url} />)
    
        

    return (
        <div>
            <p>my ART!!!!</p>
            {artCards}
        </div>
    );
}

export default Myart;
