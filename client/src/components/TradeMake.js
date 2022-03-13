import React, { useState, useEffect} from 'react'
import TraderArtCard from './TraderArtCard'
import { useNavigate } from "react-router-dom"

const TradeMake = ({selectedArtwork, user, artworks}) => {

    const navigate = useNavigate()
    const transUrl ='https://upload.wikimedia.org/wikipedia/commons/5/59/Empty.png?20091205084734'
    const [vendor, setVendor] = useState({})
    const [offerArt, setOfferArt] = useState({url:transUrl})
    const [note, setNote] = useState('')

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

    function changeNote(e){
        setNote(e.target.value)
    }

    function handleSend(){
        fetch("/trades", {
            method: "POST",
            headers: {"Content-Type": "application/json",},
            body: JSON.stringify({
              trader_id: user.id,
              trader_art_id: offerArt.id,
              trader_note: note,
              vendor_id: vendor.id,
              vendor_art_id: selectedArtwork.id,
              completed: false,
            //   offered_date: new Date(),
            }),
          }).then((r) => {
            if (r.ok) {
              r.json().then((t) => {
                navigate('/tradesSent')
                // setNote('')
                // setOfferArt({url:transUrl})
                // setVendor({})
                });
            } else {
              r.json().then((err) => console.log(err));
            }
          })
    }

    const traderArtworks = artworks.filter(c => c.user_id === user.id)
    const avail_art = traderArtworks.filter(a => a.available === true)
    const traderOptions = avail_art.map(c => <TraderArtCard key={c.id} art={c} handleSelectArt={handleSelectArt} />)
   
    return (
        <div>
            <button className='details' style={{position:'fixed', left:92, top:125, fontSize:16, marginBottom:0 }} onClick={()=>navigate(`/artworks/${selectedArtwork.id}`)} >GO BACK</button>
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
                    <h2 style={{ fontSize:20, marginTop:30, marginBottom:-15 }}>"{selectedArtwork.title}"</h2>
                    <h4>{selectedArtwork.tags}</h4>
                    <h4>{selectedArtwork.size}</h4>
                    <h4>{selectedArtwork.year}</h4>
                    </div>
                </div>
                <div className='dotted' ></div>
                {offerArt.url === transUrl? <>
                <div style={{marginLeft: 15, marginTop: 200, display: 'flex', flexFlow: 'row' }}>
                    <div style={{display: 'flex', flexFlow: 'column'}}>
                        <img className='traderImgD' src={offerArt.url} style={{ marginTop:10, marginLeft:8, marginRight: 30 }}/>
                        <p style={{position:'relative', top:-190, fontSize:20, backgroundColor:'transparent', width:200, alignSelf:'center', marginLeft:-20}}>select the artwork you want to trade</p>
                        <button className='respond' style={{alignSelf:'center', top:-90, height:60, fontSize:30, width:250, marginBottom:15, backgroundColor:'darkslategray', color:'white', marginTop:200 }} >Send</button>
                    </div>
                    <div style={{display: 'flex', flexFlow: 'column'}} >
                        <div className='traderOptions'>
                            {traderOptions}
                        </div>
                        <h4 style={{ marginTop:-25, fontStyle:'normal', fontWeight:800, letterSpacing:1.2 }}>Include a note <em style={{fontWeight:300}}>(Optional)</em></h4>
                        <input style={{ paddingLeft:40, marginTop:30, height:145, width:500, textAlign:'left' }} className='inputS' name='note' value={note} onChange={changeNote} type="text"/>
                    </div>
                </div>
                </>
                :<>
                <div style={{marginLeft: 15, marginTop: 200, display: 'flex', flexFlow: 'row' }}>
                    <div style={{display: 'flex', flexFlow: 'column'}}>
                        <img className='traderImg' src={offerArt.url} style={{ marginTop:10, marginLeft:8, marginRight: 30 }}/>
                        <h4 className='deselect' onClick={() => setOfferArt({url:transUrl})}>deselect</h4>
                        <div style={{width:250, marginLeft:10, marginTop:-15, backgroundColor:'transparent' }} >
                            <h2 style={{fontSize:20, marginTop:25, width:240 , marginBottom:-15 }}>"{offerArt.title}"</h2>
                            <h4>{offerArt.tags}</h4>
                            <h4>{offerArt.size}"</h4>
                            <h4>{offerArt.year}</h4>  
                        </div>
                        <button className='respond' style={{position:'absolute', top:665, alignSelf:'center', marginTop:45, height:60, fontSize:30, width:250, marginBottom:15 }} onClick={handleSend} >Send</button>
                    </div>
                    <div style={{display: 'flex', flexFlow: 'column'}} >
                        <div className='traderOptions'>
                            {traderOptions}
                        </div>
                        <h4 style={{ marginTop:-25, fontStyle:'noraml', fontWeight:800, letterSpacing:1.2 }}>Include a note <em style={{fontWeight:300}}>(Optional)</em></h4>
                        <textarea style={{ paddingLeft:35, paddingTop:30, paddingRight:30, marginTop:30, height:115, width:500, textAlign:'left' }} className='inputS' name='note' value={note} onChange={changeNote} type="textarea" rows={5} cols={5}/>
                    </div>
                </div>
                </>}
            </div>
        </div>
    );
}

export default TradeMake;
