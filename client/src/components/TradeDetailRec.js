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

    function handleNoClick(id){
        setConfirmShown(true)
        }

    function handleYesClick(id){
        fetch(`/confirm/${trade.id}`, {
            method: "PATCH",
            headers: {"Content-Type": "application/json",},
            body: JSON.stringify({
              completed: true
            }),
          }).then((r) => {
            if (r.ok) {r.json().then((data) => {
                setConfirmShown(false)
                navigate('/tradesCompleted')
                })
            } else {
                console.log('unsuccessful confirm attempt :(')
            }
          })
        }

    function handleDeleteOffer(){
        fetch(`/trades/${trade.id}`, {
            method: "DELETE"
            }).then((r) => {
            if (r.ok) {
                r.json().then(data => { 
                    console.log('successful delete!')
                    setConfirmShown(false)
                    navigate('/tradesReceived')
                })
            }else {
            console.log('unsuccessful delete :(')
        }})
    }

    return (
        <div>
            {trade?<>
                <button className='details' style={{position:'fixed', left:92, top:125, fontSize:16, marginBottom:0 }} onClick={()=>navigate('/tradesSent')} >GO BACK</button>
                <div style={{marginTop:200, display:'flex', flexFlow:'row', backgroundColor:'transparent', justifyContent:'space-around'}} >
                    <div style={{ display:'flex', flexFlow:'row', backgroundColor:'transparent', width:'40%', marginLeft:25 }}>
                        <div style={{ display:'flex', flexFlow:'column', backgroundColor:'transparent', width:'60%', marginRight:20 }} >
                            <img style={{ marginLeft:7, marginTop:-10 }} src={trade.trader.profile_pic} alt='icon' className='icon' />
                            <h3 style={{ marginLeft:7, marginBottom:-1, fontSize:26, fontWeight:800, letterSpacing:.5 }}>{trade.trader.first_name} {trade.trader.last_name}</h3>
                            {/* <h4 style={{marginLeft:0,  marginRight:0, backgroundColor:'transparent'}}>{trade.trader.street_address}</h4> */}
                            <h4 style={{marginLeft:5, marginRight:0, backgroundColor:'transparent'}}>{trade.trader.city}, {trade.trader.state} {trade.trader.zip}</h4>
                            <h4 style={{marginTop:120, fontWeight:200, marginLeft:9, marginBottom:-30 }} >note from {trade.trader.first_name}</h4>
                            <div style={{paddingLeft:15, paddingRight:15, paddingTop:5, paddingBottom:5, marginLeft:0, marginTop:40, display:'flex', borderStyle:'solid', borderColor:'white', borderRadius:25, borderWidth:.1, width:170, height:120 }}>
                                <p style={{ marginTop:12, marginLeft:5, marginRight:5, fontSize:14, fontWeight:700 ,alignSelf:'center', textAlign:'left' }}>{trade.trader_note}</p>
                            </div>
                        </div>
                        <div style={{display:'flex', flexFlow:'column', backgroundColor:'transparent', width:'60%', marginRight:-10 }}>
                            <img style={{ width:300, height:300}} className='reviewImgs' src={trade.trader_art.url} alt='art image not found' onClick={()=>navigate(`/artworks/${trade.trader_art.id}`)}/>
                            <h2 style={{fontSize:26, marginBottom:-15}}>{trade.trader_art.title}</h2>
                            <h4 style={{fontSize:16 }}>{trade.trader_art.tags}</h4>
                            <h4 style={{fontSize:16}}>{trade.trader_art.size}"</h4>
                            <h4 style={{fontSize:16}}>{trade.trader_art.year}</h4>
                        </div>
                    <div className='dotted' style={{ marginTop:-9, height:470, marginBottom:-40, marginLeft:50, marginRight:-80 }}></div>
                   </div>
                    <div style={{ display:'flex', flexFlow:'row', backgroundColor:'transparent', width:'40%' }}>
                        <div style={{display:'flex', flexFlow:'column', backgroundColor:'transparent', marginRight:50 }} >
                            <img style={{ width:300, height:300 }} className='reviewImgs' src={trade.vendor_art.url} alt='art image not found' onClick={()=>navigate(`/artworks/${trade.vendor_art.id}`)} />
                            <h2 style={{width:'80%', fontSize:26, marginBottom:-15}}>{trade.vendor_art.title}</h2>
                            <h4 style={{fontSize:16}}>{trade.vendor_art.tags}</h4>
                            <h4 style={{fontSize:16}}>{trade.vendor_art.size}"</h4>
                            <h4 style={{fontSize:16}}>{trade.vendor_art.year}</h4>
                        </div>
                        <div style={{display:'flex', flexFlow:'column', backgroundColor:'transparent', justifyContent:'flex-start', width:'60%'}} >
                            <img style={{ }} src={trade.vendor.profile_pic} alt='icon' className='icon' />
                            <h3 style={{ textAlign:'left', marginBottom:-15, fontSize:26, fontWeight:800, letterSpacing:.5, backgroundColor:'transparent' }}>{trade.vendor.first_name} {trade.vendor.last_name}</h3>
                            {/* <h4 style={{textAlign:'left', backgroundColor:'transparent', marginLeft:0 }}>{trade.vendor.street_address}</h4> */}
                            <h4 style={{textAlign:'left', backgroundColor:'transparent', marginLeft:0 }}>{trade.vendor.city}, {trade.vendor.state} {trade.vendor.zip}</h4>
                            <div style={{alignContent:'flex-start', marginTop:80 }}>
                                <p style={{marginLeft:0, marginBottom:-0, fontWeight:200, fontWeight:300, fontSize:16 }} >received {trade.offered_date}</p>
                                <button className='Tbutton' style={{ width:'100%', marginTop:16, marginLeft:'0%' }} onClick={handleYesClick}>Accept</button>
                                <button className='Tbutton' style={{ width:'100%', marginTop:16, marginLeft:'0%' }} onClick={handleNoClick}>Reject</button>
                            </div>
                        
                        </div>
                      </div>
                </div>
                {confirmShown? <>
                <div className='popUp' style={{marginTop:-500, height:480, width:850}}>
                    <button className='details' style={{marginLeft:50, marginTop:-50, fontSize:16}} onClick={()=>setConfirmShown(false)} >GO BACK</button>
                    <br></br>
                    <br></br>
                    <p style={{fontSize:28}}>Sure you want to reject {trade.trader.first_name}'s offer?</p>
                    <p style={{fontSize:28}}>This action can't be undone :(</p>
                    <br></br>
                    <div style={{display:'flex', flexFlow:'row', justifyContent:'space-around', backgroundColor:'transparent' }}>
                        <div style={{display:'flex', flexFlow:'column', backgroundColor:'transparent' }}>
                            <button className='button' style={{width:320}} onClick={()=>setConfirmShown(false)}>no</button>
                            <p style={{textTransform:'uppercase', fontSize:16, fontWeight:300, letterSpacing:.4}} >NEVERMIND</p>
                        </div>
                        <div style={{display:'flex', flexFlow:'column', backgroundColor:'transparent' }}>
                            <button className='button' style={{width:320}} onClick={handleDeleteOffer}>yes</button>
                            <p style={{textTransform:'uppercase', fontSize:16, fontWeight:300, letterSpacing:.4 }} >REJECT TRADE</p>
                        </div>
                    </div>
                </div>
                </>:
                <>
                </>}
            </>:
            <>
            <p>loading...</p>
            </>}
        </div>
    );
}

export default Tradedetailrec;
