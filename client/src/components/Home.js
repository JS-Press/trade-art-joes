import React, { useState, useEffect } from 'react';
import ArtCard from './ArtCard'


const Home = ({artworks}) => {

    const [art, setArt] = useState(artworks)

useEffect( () => {
    fetch(`/artworks`).then((r) => {
        if (r.ok) {
            r.json().then(data => {
            setArt(data)
            })}
        })
        }, [])

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

    const shuff_art = shuffle(art)
    const avail_art = shuff_art.filter(a => a.available === true)
    const art_cards = avail_art.map( c => <ArtCard key={c.id} title={c.title} artist={c.artist} description={c.description} size={c.size} tags={c.tags} year={c.year} available={c.available} url={c.url} id={c.id} user={c.user} /> )


    return (
        <>
            <div className='ArtCards' style={{marginTop:110}}>
            { artworks? <>
            {art_cards}
            <div style={{ marginLeft:65, width:50, height:10, borderStyle:'normal', borderColor:'white', borderWeight:10, color:'transparent' }}><p> o o</p></div>
            </>
            :<>
            <p className='loading' >loading art...</p>
            </>}

            </div>
        </>
    );
}

export default Home;
