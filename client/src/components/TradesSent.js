import React, {useState, useEffect} from 'react';
import TradeSentCard from './TradeSentCard'

const Tradessent = ({user}) => {

    const [trades, setTrades] = useState([])
    const [confirmShown, setConfirmShown] = useState(false)
    const [deletingTrade, setDeletingTrade] = useState({})
    
useEffect( () => {
    fetch(`/tradesSent/${user.id}`).then((r) => {
        if (r.ok) {
            r.json().then(data => {
            setTrades(data)
            })}
        })
        }, [])

function handleDeleteClick(t){
    setConfirmShown(true)
    setDeletingTrade(t)
    }

function handleDeleteOffer(){
    fetch(`/trades/${deletingTrade.id}`, {
        method: "DELETE"
        }).then((r) => {
        if (r.ok) {
            r.json().then(data => { 
                console.log('successful delete!')
                setConfirmShown(false)
                setDeletingTrade({})
                const newTrades = trades.filter( t => t.id !== deletingTrade.id )
                setTrades(newTrades) 
            })
        }else {
        console.log('unsuccessful delete :(')
    }})
}

    const ordered = trades.sort((a,b) =>  new Date(b.offered_date) - new Date(a.offered_date))
    const tradeCards = ordered.map(t => <TradeSentCard key={t.id} trade={t} handleDeleteClick={handleDeleteClick} />)


    return (
    <div>
        <div className='tradeCards' style={{marginLeft:165, marginTop:280 }}>
            {tradeCards}
        </div>
        <div style={{position:'fixed', display:'flex', flexFlow:'row', left:110, top:125, backgroundColor:'transparent' }}>
                <img src={user.profile_pic} alt='icon' className='T_icon' />
                <p style={{ fontStyle:'normal', position:'fixed', left:170, top:100, textTransform:'uppercase', fontWeight:700, letterSpacing:1.5 }}>SENT</p>
                <p style={{ fontStyle:'normal', position:'fixed', left:170, top:130, textTransform:'uppercase', fontWeight:700, letterSpacing:1.5 }}>TRADES</p>
        </div>
        {confirmShown && deletingTrade? <>
        <div className='popUp' style={{marginTop:-580, height:480, width:850}}>
            <button className='details' style={{marginLeft:50, marginTop:-50, fontSize:16}} onClick={()=>setConfirmShown(false)} >GO BACK</button>
            <br></br>
            <br></br>
            <p style={{fontSize:28}}>Cancel your offer to {deletingTrade.vendor.first_name}?</p>
            <p style={{fontSize:28}}>This action can't be undone :(</p>
            <br></br>
            <div style={{display:'flex', flexFlow:'row', justifyContent:'space-around', backgroundColor:'transparent' }}>
                <div style={{display:'flex', flexFlow:'column', backgroundColor:'transparent' }}>
                    <button className='button' style={{width:320}} onClick={()=>setConfirmShown(false)}>no</button>
                    <p style={{textTransform:'uppercase', fontSize:16, fontWeight:300, letterSpacing:.4}} >NEVERMIND!</p>
                </div>
                <div style={{display:'flex', flexFlow:'column', backgroundColor:'transparent' }}>
                    <button className='button' style={{width:320}} onClick={handleDeleteOffer}>yes</button>
                    <p style={{textTransform:'uppercase', fontSize:16, fontWeight:300, letterSpacing:.4 }} >CANCEL TRADE!</p>
                </div>
            </div>
        </div>
        </>:
        <>
        </>}
    </div>
    );
}

export default Tradessent;
