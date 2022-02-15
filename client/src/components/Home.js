import React, { useState, useEffect } from 'react';


const Home = () => {

const [artworks, setArtworks] = useState([])

useEffect( () => {
fetch(`/artworks`).then((r) => {
    if (r.ok) {
        r.json().then(data => {
        setArtworks(data)
        console.log(data)
        })}
    })
    }, [])

    return (
        <div>
            <h2>Home!</h2>
            {/* <p>{artworks}</p> */}
        </div>
    );
}

export default Home;
