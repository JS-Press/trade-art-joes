import React, { useState, useEffect } from 'react';
import ArtCard from './ArtCard'


const Home = () => {

const [artworks, setArtworks] = useState([])
    
function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array;
    }

useEffect( () => {
fetch(`/artworks`).then((r) => {
    if (r.ok) {
        r.json().then(data => {
        setArtworks(data)
        // console.log(data)
        })}
    })
    }, [])

    const shuff_art = shuffle(artworks)
    const art_cards = shuff_art.map( c => <ArtCard key={c.id} title={c.title} artist={c.artist} description={c.description} size={c.size} tags={c.tags} year={c.year} available={c.available} url={c.url} id={c.id} user_id={c.user_id} /> )


    return (
        <>
            <div className='ArtCards' >
            {art_cards}
            </div>
        </>
    );
}

export default Home;
