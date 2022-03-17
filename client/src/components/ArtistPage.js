import React, { useEffect, useState} from 'react';
import { useParams } from "react-router-dom";
import ArtistArtCard from './ArtistArtCard';

const Artistpage = ({artworks}) => {

    let { id } = useParams();
    const [artist, setArtist] = useState({id:0})
    const [art, setArt] = useState(artworks)

    useEffect( () => {
        fetch(`/artworks`).then((r) => {
            if (r.ok) {
                r.json().then(data => {
                setArt(data)
                })}
            })
            }, [])

    useEffect( () => {
        fetch(`/users/${id}`).then((r) => {
            if (r.ok) {
                r.json().then(data => {
                setArtist(data)
                })}
            })
        }, [])

    const artistWorks = art.filter(c => c.user_id === artist.id)
    const avail_art = artistWorks.filter(a => a.available === true)
    const artCards = avail_art.map(c => <ArtistArtCard key={c.id} id={c.id} title={c.title} tags={c.tags} size={c.size} year={c.year} url={c.url} />)
    

    
    return (
        <div>
            { artist? <>
                <div className='ArtistArtCards' style={{marginTop:160}}>
                    {artCards}
                </div>
                <div style={{ marginLeft:100, marginTop:150, display: 'flex', flexDirection: 'row', height:400, position:'fixed' }} >
                    <img src={artist.profile_pic} alt='icon' className='icon' />
                    <div className='nameInfo' style={{display: 'flex', flexDirection: 'column'}}>
                        <h2 style={{ fontSize:48, marginRight:50, marginTop:4 }}>Art by {artist.first_name} {artist.last_name}</h2>
                        <h4 style={{ marginTop:1, marginLeft:-9 }}>{artist.city}, {artist.state}</h4>
                    </div>
                </div>
            </>
            :<>
             <p className="loading" >loading...</p>
            </>}
        </div>
    );
}

export default Artistpage;
