import React, { useEffect, useState} from 'react'
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"

const Tradedetailrec = () => {

    const navigate = useNavigate()
    let { id } = useParams();
    const [confirmShown, setConfirmShown] = useState(false)
    const [trade, setTrade] = useState(null)
    
    useEffect( () => {
        fetch(`/trades/${id}`).then((r) => {
            if (r.ok) {
                r.json().then(data => {
                    setTrade(data)
                })}
            })
        }, [])
        
    console.log(trade)

    function handleArtistClick(e){
        // navigate(`/users/${art.user_id}`)
    }

    function handleDeleteClick(id){
        setConfirmShown(true)
        }

    function handleDeleteArt(){
        // fetch(`/artworks/${id}`, {
        //     method: "DELETE"
        //     }).then((r) => {
        //     if (r.ok) {
        //     console.log('successful delete!')
        //     r.json().then(data => { navigate('/myArt') })
        //     }else {
        //     console.log('unsuccessful delete :(')
        // }})
    }

    return (
        <div>
            {trade?<>
                <button className='details' style={{position:'fixed', left:92, top:125, fontSize:16, marginBottom:0 }}  onClick={()=>navigate('/tradesReceived')} >GO BACK</button>
                <div style={{marginTop:200, display:'flex', flexFlow:'row', backgroundColor:'transparent', justifyContent:'space-around'}} >
                    <div style={{ display:'flex', flexFlow:'row', backgroundColor:'transparent', width:'40%', marginLeft:25 }}>
                        <div style={{ display:'flex', flexFlow:'column', backgroundColor:'transparent', width:'60%', marginRight:20 }} >
                            <img style={{ marginLeft:0 }} src={trade.vendor.profile_pic} alt='icon' className='icon' />
                            <h3 style={{ marginBottom:-15, fontSize:26, fontWeight:800, letterSpacing:.5 }}>{trade.vendor.first_name} {trade.vendor.last_name}</h3>
                            <h4 style={{marginLeft:0,  marginRight:0, backgroundColor:'transparent'}}>{trade.vendor.street_address}</h4>
                            <h4 style={{marginLeft:0, marginRight:0, backgroundColor:'transparent'}}>{trade.vendor.city}, {trade.vendor.state} {trade.vendor.zip}</h4>
                            <h4 style={{marginTop:100, fontWeight:200, marginLeft:0, marginBottom:-30 }} >note from {trade.trader.first_name}</h4>
                            <div style={{paddingLeft:15, paddingRight:15, paddingTop:5, paddingBottom:5, marginLeft:0, marginTop:40, display:'flex', borderStyle:'solid', borderColor:'white', borderRadius:25, borderWidth:.1, width:170, height:120 }}>
                                <p style={{ marginTop:12, marginLeft:5, marginRight:5, fontSize:14, fontWeight:700 ,alignSelf:'center', textAlign:'left' }}>{trade.trader_note}</p>
                            </div>
                        </div>
                        <div style={{display:'flex', flexFlow:'column', backgroundColor:'transparent', width:'60%' }}>
                            <img style={{ width:300, height:300}} className='reviewImgs' src={trade.vendor_art.url} alt='art image not found' onClick={()=>navigate(`/artworks/${trade.vendor_art.id}`)}/>
                            <h2 style={{fontSize:26, marginBottom:-15}}>{trade.vendor_art.title}</h2>
                            <h4 style={{fontSize:16}}>{trade.vendor_art.tags}</h4>
                            <h4 style={{fontSize:16}}>{trade.vendor_art.size}"</h4>
                            <h4 style={{fontSize:16}}>{trade.vendor_art.year}</h4>
                        </div>
                   </div>
                    <div className='dotted' style={{position:'fixed', marginTop:-9, height:470, marginBottom:-40 }}></div>
                    <div style={{ display:'flex', flexFlow:'row', backgroundColor:'transparent', width:'40%' }}>
                        <div style={{display:'flex', flexFlow:'column', backgroundColor:'transparent', marginRight:50 }} >
                            <img style={{ width:300, height:300 }} className='reviewImgs' src={trade.trader_art.url} alt='art image not found' onClick={()=>navigate(`/artworks/${trade.trader_art.id}`)} />
                            <h2 style={{width:'80%', fontSize:26, marginBottom:-15}}>{trade.trader_art.title}</h2>
                            <h4 style={{fontSize:16}}>{trade.trader_art.tags}</h4>
                            <h4 style={{fontSize:16}}>{trade.trader_art.size}"</h4>
                            <h4 style={{fontSize:16}}>{trade.trader_art.year}</h4>
                        </div>
                        <div style={{display:'flex', flexFlow:'column', backgroundColor:'transparent', justifyContent:'flex-start', width:'60%'}} >
                            <img style={{ }} src={trade.trader.profile_pic} alt='icon' className='icon' />
                            <h3 style={{ textAlign:'left', marginBottom:-15, fontSize:26, fontWeight:800, letterSpacing:.5, backgroundColor:'transparent' }}>{trade.trader.first_name} {trade.trader.last_name}</h3>
                            <h4 style={{textAlign:'left', backgroundColor:'transparent', marginLeft:0 }}>{trade.trader.street_address}</h4>
                            <h4 style={{textAlign:'left', backgroundColor:'transparent', marginLeft:0 }}>{trade.trader.city}, {trade.trader.state} {trade.trader.zip}</h4>
                        </div>
                      </div>
                </div>

            </>:
            <>
            <p>loading...</p>
            </>}
        </div>
    );
}

export default Tradedetailrec;
