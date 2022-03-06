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
        console.log('confirming: ')
        console.log(t)
    }

    function handleRejectOffer(t){
        console.log('rejecting: ')
        console.log(t)
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
                    <button className='details' style={{marginLeft:50, marginTop:-50, fontSize:16}} onClick={()=>setConfirmShown(false)} >GO BACK</button>
                    <p style={{fontSize:28, marginTop:-30, fontWeight:700, letterSpacing:.4 }}>Confirm your trade with {respondingTrade.trader.first_name}?</p>
                    <div style={{display:'flex', flexFlow:'row', backgroundColor:'transparent'}} >
                        <div style={{display:'flex', flexFlow:'column', backgroundColor:'transparent' }}>

                        </div>
                        <div className='dotted' style={{marginLeft:425, marginTop:10, height:250, marginBottom:-40}}></div>
                        <div style={{display:'flex', flexFlow:'column', backgroundColor:'transparent' }}>

                        </div>
                    </div>
                    <div style={{display:'flex', flexFlow:'row', justifyContent:'space-around', backgroundColor:'transparent' }}>
                        <div style={{display:'flex', flexFlow:'column', backgroundColor:'transparent' }}>
                            <button className='button' style={{width:320}} onClick={handleRejectOffer}>no deal</button>
                            <p style={{textTransform:'uppercase', fontSize:16, fontWeight:300, letterSpacing:.4}} >no worries!</p>
                        </div>
                        <div style={{display:'flex', flexFlow:'column', backgroundColor:'transparent' }}>
                            <button className='button' style={{width:320}} onClick={handleConfirmOffer}>confirm</button>
                            <p style={{textTransform:'uppercase', fontSize:16, fontWeight:300, letterSpacing:.4 }} >let's trade!</p>
                        </div>
                    </div>
                </div>
            </>:
            <>
            </>}
        </div>
    );
}

export default Tradesrec;
