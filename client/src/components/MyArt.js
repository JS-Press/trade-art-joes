import React, {useState, useEffect} from 'react';
import MyArtCard from './MyArtCard';

const Myart = ({user}) => {

    const [artist, setArtist] = useState({artworks:[]})

    useEffect( () => {
        fetch(`/users/${user.id}`).then((r) => {
            if (r.ok) {
                r.json().then(data => {
                setArtist(data)
                })}
            })
        }, [])

        console.log("artist: ")
        console.log(artist)
        console.log("user: ")
        console.log(user)

        const artistWorks = artist.artworks.filter(c => c.user_id === artist.id)
        console.log("artist artworks: ")
        console.log(artistWorks)
        const avail_art = artistWorks.filter(a => a.available === true)
        console.log("available art: ")
        console.log(avail_art)
        const artCards = avail_art.map(c => <MyArtCard key={c.id} id={c.id} title={c.title} tags={c.tags} size={c.size} year={c.year} url={c.url} setArtist={setArtist} />)
    
        

    return (
        <div>
            {artistWorks? <>
            <div className='ArtCards' style={{marginTop:150}}>
            {artCards}
            </div>
            <div style={{ marginLeft:100, marginTop:180, display: 'flex', flexDirection: 'row', height:400, position:'fixed' }} >
                <img src={artist.profile_pic} alt='icon' className='icon' />
                <div className='nameInfo' style={{display: 'flex', flexDirection: 'column'}}>
                    {/* <h2 style={{ fontSize:48, marginRight:50, marginTop:4 }}>Art by {artist.first_name} {artist.last_name}</h2> */}
                    <h2 style={{ fontSize:25, marginRight:50, marginTop:13, textTransform:'uppercase' }}>Available Artworks</h2>
                    <h4 style={{ marginTop:2, marginLeft:-9 }}>{artist.first_name} {artist.last_name}</h4>
                    <h4 style={{ marginTop:15, marginLeft:-9 }}>{artist.city}, {artist.state}</h4>
                </div>
            </div>
            </>:
            <>
            <p>loading....your....art....</p>
            </>}
            
        </div>
    );
}

export default Myart;
