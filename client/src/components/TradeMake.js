import React, { useState, useEffect} from 'react';
import TraderArtCard from './TraderArtCard'

const TradeMake = ({selectedArtwork, user, artworks}) => {

    const transUrl ='https://images.hasgeek.com/embed/file/65c4929262a84c78b29ad37321df2eca'
    const [vendor, setVendor] = useState({})
    const [offerArt, setOfferArt] = useState({url:transUrl})

    useEffect( () => {
        fetch(`/users/${selectedArtwork.user_id}`).then((r) => {
            if (r.ok) {
                r.json().then(data => {
                setVendor(data)
                })}
            })
        }, [])

    function handleSelectArt(a){
        setOfferArt(a)
    }


    // console.log('trader: ' + user.first_name)
    // console.log('vendor: ' + vendor.first_name)

    const traderArtworks = artworks.filter(c => c.user_id === user.id)
    console.log(traderArtworks)
    const traderOptions = traderArtworks.map(c => <TraderArtCard key={c.id} art={c} handleSelectArt={handleSelectArt} />)
   

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
                {offerArt.url === transUrl? <>
                <div style={{marginLeft: 15, marginTop: 200, display: 'flex', flexFlow: 'row' }}>
                    <img className='traderImgD' src={offerArt.url} style={{ marginTop:10, marginLeft:8, marginRight: 30 }}/>
                    <div className='traderOptions'>
                        {traderOptions}
                    </div>
                </div>
                </>
                :<>
                <div style={{marginLeft: 15, marginTop: 200, display: 'flex', flexFlow: 'row' }}>
                    <div style={{display: 'flex', flexFlow: 'column'}}>
                        <img className='traderImg' src={offerArt.url} style={{ marginTop:10, marginLeft:8, marginRight: 30 }}/>
                        <h4 className='deselect' onClick={() => setOfferArt({url:transUrl})}>deselect</h4>
                    </div>
                    <div className='traderOptions'>
                        {traderOptions}
                    </div>
                </div>
                </>}
            </div>
        </div>
    );
}

export default TradeMake;
