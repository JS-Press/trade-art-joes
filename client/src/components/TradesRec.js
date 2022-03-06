import React, {useEffect, useState}  from 'react';
import TradeRecCard from './TradeRecCard'

const Tradesrec = ({user}) => {

    const [trades, setTrades] = useState([])
    const [confirmShown, setConfirmShown] = useState(false)
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

    function handleConfirmOffer(t){
        console.log(t)
        setConfirmShown(false)
    }

    function handleRejectOffer(t){
        console.log(t)
        setConfirmShown(false)
    }

    
    console.log(respondingTrade)

    const tradeCards = trades.map(t => <TradeRecCard key={t.id} trade={t} handleRespond={handleRespond} />)

    return (
        <div>
            {/* <h2 style={{ position:'fixed', top:0, textDecoration: 'underline', textUnderlineOffset: 6, textDecorationThickness: 3, fontSize:16, fontWeight: 800, marginTop:120, marginLeft:100, marginBottom:-150 }}>{user.first_name}'s received trades</h2> */}
            <div className='tradeCards' style={{marginLeft:120, marginTop:280 }}> 
                {tradeCards}
            </div>
            <div style={{position:'fixed', display:'flex', flexFlow:'row', left:100, top:720}}>
                <img src={user.profile_pic} alt='icon' className='icon' />
                <p style={{ fontStyle:'normal', position:'fixed', left:200, top:720, textTransform:'uppercase', fontWeight:700, letterSpacing:1.5 }}>RECEIVED</p>
                <p style={{ fontStyle:'normal', position:'fixed', left:200, top:750, textTransform:'uppercase', fontWeight:700, letterSpacing:1.5 }}>TRADES</p>
            </div>
            {confirmShown?<>
                <div className='popUp' style={{marginTop:-580, height:480, width:850}}>
            <br></br>
            <br></br>
            <p style={{fontSize:28}}>Respond to trade?</p>
            <br></br>
            <div style={{display:'flex', flexFlow:'row', justifyContent:'space-around', backgroundColor:'transparent' }}>
                <button className='button' onClick={handleRejectOffer}>no</button>
                <button className='button' onClick={handleConfirmOffer}>yes</button>
            </div>
            </div>
            </>:
            <>
            </>}
        </div>
    );
}

export default Tradesrec;
