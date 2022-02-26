import React, { useState, useEffect} from 'react';
import ArtistArtCard from './ArtistArtCard'

const TradeMake = ({selectedArtwork, user, artworks}) => {


    const [vendor, setVendor] = useState({})
    const [offerArt, setOfferArt] = useState({url:'https://images.hasgeek.com/embed/file/65c4929262a84c78b29ad37321df2eca'})

    useEffect( () => {
        fetch(`/users/${selectedArtwork.user_id}`).then((r) => {
            if (r.ok) {
                r.json().then(data => {
                setVendor(data)
                })}
            })
        }, [])


    // console.log('trader: ' + user.first_name)
    // console.log('vendor: ' + vendor.first_name)

    const traderArtworks = artworks.filter(c => c.user_id === user.id)
    console.log(traderArtworks)
    const traderOptions = traderArtworks.map(c => <ArtistArtCard key={c.id} id={c.id} title={c.title} tags={c.tags} size={c.size} year={c.year} url={c.url} />)
   

    return (
        <div>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <div style={{ marginLeft:100, marginRight: 10, marginTop:200, display: 'flex', flexDirection: 'column', height:400 }} >
                    <img src={vendor.profile_pic} alt='icon' className='icon' />
                    <div className='nameInfo' style={{display: 'flex', flexDirection: 'column'}}>
                        <h2 style={{ fontSize:20, marginRight:50, marginTop:20 }}>{vendor.first_name} {vendor.last_name}</h2>
                        <h4 style={{ fontSize:12, marginTop:1, marginLeft:-9 }}>{vendor.city}, {vendor.state}</h4>
                    </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <img src={selectedArtwork.url} alt={selectedArtwork.title} className='vendorImg' />
                    <div style={{ marginLeft:-11, backgroundColor:'transparent' }}>
                    <h2 style={{ marginTop:30 }}>{selectedArtwork.title}</h2>
                    <h4>{selectedArtwork.tags}</h4>
                    <h4>{selectedArtwork.size}</h4>
                    <h4>{selectedArtwork.year}</h4>
                    </div>
                </div>
                <div className='dotted' ></div>
                <div style={{marginLeft: 15, marginTop: 200, display: 'flex', flexFlow: 'row' }}>
                <img className='traderImg' src={offerArt.url} style={{ marginTop:10, marginLeft:8, marginRight: 30 }}/>
                {traderOptions}
                </div>
            </div>
        </div>
    );
}

export default TradeMake;
