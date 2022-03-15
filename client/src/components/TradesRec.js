import React, {useEffect, useState}  from 'react';
import TradeRecCard from './TradeRecCard';
import { useNavigate } from "react-router-dom";

const Tradesrec = ({user}) => {

    const navigate = useNavigate()
    const [trades, setTrades] = useState([])
    const [confirmShown, setConfirmShown] = useState(false)
    const [noteShown, setNoteShown] = useState(false)
    const [respondingTrade, setRespondingTrade] = useState(null)

    useEffect( () => {
        fetch(`/tradesRec/${user.id}`).then((r) => {
            if (r.ok) {
                r.json().then(data => {
                setTrades(data)
                })}
            })
            }, [])

    function handleRespond(t_id){
    fetch(`/trades/${t_id}`).then((r) => {
        if (r.ok) {
            r.json().then(data => {
            setRespondingTrade(data)
            setConfirmShown(true)
            })}
        })
    }

    function handleConfirmOffer(){
        console.log('confirming: ')
        console.log(respondingTrade)
        fetch(`/confirm/${respondingTrade.id}`, {
            method: "PATCH",
            headers: {"Content-Type": "application/json",},
            body: JSON.stringify({
              completed: true
            }),
          }).then((r) => {
            if (r.ok) {r.json().then((data) => {
                const new_trades = trades.filter(t=> t.id !== respondingTrade.id)
                setTrades(new_trades)
                setConfirmShown(false)
                setRespondingTrade({})
                console.log('trade confirmation success')
                })
            } else {
                console.log('unsuccessful confirm attempt :(')
            }
          })
    }

    function handleRejectOffer(){
        console.log('rejecting: ')
        console.log(respondingTrade)
        fetch(`/trades/${respondingTrade.id}`, {
            method: "DELETE"
          }).then((r) => {
            if (r.ok) {
            console.log('successful delete!')
            setConfirmShown(false)
            r.json().then(data => { 
                const new_trades = trades.filter(t=> t.id !== respondingTrade.id)
                setTrades(new_trades)
            })
          }else {
            console.log('unsuccessful delete :(')
        }})
    }

    const ordered = trades.sort((a,b) =>  new Date(b.offered_date) - new Date(a.offered_date))
    const tradeCards = ordered.map(t => <TradeRecCard key={t.id} trade={t} handleRespond={handleRespond} />)

    return (
        <div>
            <div className='tradeCards' style={{marginLeft:120, marginTop:280 }}> 
                {tradeCards}
            </div>
            <div style={{position:'fixed', display:'flex', flexFlow:'row', left:110, top:125, backgroundColor:'transparent' }}>
                <img src={user.profile_pic} alt='icon' className='T_icon' />
                <p style={{ fontStyle:'normal', position:'fixed', left:170, top:100, textTransform:'uppercase', fontWeight:700, letterSpacing:1.5 }}>RECEIVED</p>
                <p style={{ fontStyle:'normal', position:'fixed', left:170, top:130, textTransform:'uppercase', fontWeight:700, letterSpacing:1.5 }}>TRADES</p>
            </div>
            {confirmShown?<>
                <div className='popUp' style={{marginTop:-580, height:480, width:850}}>
                    <button className='details' style={{marginLeft:50, marginTop:-50, fontSize:16, marginBottom:0 }} onClick={()=>setConfirmShown(false)} >GO BACK</button>
                    <button className='button' style={{marginLeft:560, marginTop:0, fontSize:14, width:104, height:28, paddingTop:1.5, borderWidth:.1 }} onMouseEnter={()=>setNoteShown(true)} onMouseLeave={()=>setNoteShown(false)} >SEE NOTE</button>
                    <p style={{fontSize:28, marginTop:-45, fontWeight:700, marginBottom:35, letterSpacing:.4 }}>Confirm your trade with {respondingTrade.trader.first_name}?</p>
                    <div style={{display:'flex', flexFlow:'row', backgroundColor:'transparent'}} >
                        <div style={{display:'flex', flexFlow:'column', backgroundColor:'transparent', marginLeft:60, marginRight:-185 }}>
                            <div style={{display:'flex', flexFlow:'row', backgroundColor:'transparent', justifyContent:'space-between'}} >
                                <img style={{marginRight:40, marginTop:90, marginLeft:-2}} src={respondingTrade.trader.profile_pic} alt='icon' className='icon' />
                                <img style={{marginRight:-21}} className='reviewImgs' src={respondingTrade.trader_art.url} alt='art image not found' onClick={()=>navigate(`/artworks/${respondingTrade.trader_art.id}`)}/>
                            </div>
                            <h3 style={{ marginBottom:-15, fontSize:26, fontWeight:800, letterSpacing:.5 }}>{respondingTrade.trader.first_name} {respondingTrade.trader.last_name}</h3>
                            <h4 style={{marginLeft:0, marginRight:-888, backgroundColor:'transparent'}}>{respondingTrade.trader.street_address}</h4>
                            <h4 style={{marginLeft:0, marginRight:-888, backgroundColor:'transparent'}}>{respondingTrade.trader.city}, {respondingTrade.trader.state} {respondingTrade.trader.zip}</h4>
                        </div>
                        <div className='dotted' style={{marginLeft:250, marginTop:-9, height:295, marginBottom:-40}}></div>
                        <div style={{display:'flex', flexFlow:'column', justifyContent:'space-between', backgroundColor:'transparent', marginLeft:60, textAlign:'right', width:'40%' }}>
                            <div style={{display:'flex', flexFlow:'row', backgroundColor:'transparent'}} >
                                <img style={{marginLeft:-15}} className='reviewImgs' src={respondingTrade.vendor_art.url} alt='art image not found' onClick={()=>navigate(`/artworks/${respondingTrade.vendor_art.id}`)} />
                                <img style={{ marginLeft:42, marginTop:90 }} src={respondingTrade.vendor.profile_pic} alt='icon' className='icon' />
                            </div>
                            <h3 style={{textAlign:'right', marginRight:32, marginBottom:-15, fontSize:26, fontWeight:800, letterSpacing:.5, backgroundColor:'transparent' }}>{respondingTrade.vendor.first_name} {respondingTrade.vendor.last_name}</h3>
                            <h4 style={{ textAlign:'right', marginRight:32, backgroundColor:'transparent' }}>{respondingTrade.vendor.street_address}</h4>
                            <h4 style={{textAlign:'right', marginRight:32, backgroundColor:'transparent' }}>{respondingTrade.trader.city}, {respondingTrade.trader.state} {respondingTrade.trader.zip}</h4>
                        </div>
                    </div>
                    {noteShown?<>
                        <p style={{fontSize:14, fontWeight:300, marginTop:24}}>note from {respondingTrade.trader.first_name}</p>
                        <div style={{paddingLeft:10, paddingRight:10, paddingTop:5, paddingBottom:5, marginLeft:60, marginTop:12, display:'flex', borderStyle:'solid', borderColor:'white', borderRadius:50, borderWidth:.1, width:712, height:69, alignSelf:'center', justifyContent:'space-around'}}>
                            <p style={{ width:700, marginTop:12, marginLeft:5, marginRight:5, fontSize:14, fontWeight:700 ,alignSelf:'center', textAlign:'left' }}>{respondingTrade.trader_note}</p>
                        </div>
                    </>:
                    <>
                    <div style={{display:'flex', flexFlow:'row', justifyContent:'space-around', backgroundColor:'transparent', marginTop:-40 }}>
                        <div style={{display:'flex', flexFlow:'column', backgroundColor:'transparent' }}>
                            <button className='button' style={{width:320}} onClick={handleRejectOffer}>no deal</button>
                            <p style={{textTransform:'uppercase', fontSize:16, fontWeight:300, letterSpacing:.4}} >no worries!</p>
                        </div>
                        <div style={{display:'flex', flexFlow:'column', backgroundColor:'transparent' }}>
                            <button className='button' style={{width:320}} onClick={handleConfirmOffer}>confirm</button>
                            <p style={{textTransform:'uppercase', fontSize:16, fontWeight:300, letterSpacing:.4 }} >let's trade!</p>
                        </div>
                    </div>
                    </>}
                </div>
            </>:
            <>
            </>}
        </div>
    );
}

export default Tradesrec;
