import React, {useState, useEffect} from 'react';
import TradeSentCard from './TradeSentCard'

const Tradessent = ({user}) => {

    const [trades, setTrades] = useState([])
    
    useEffect( () => {
        fetch(`/tradesSent/${user.id}`).then((r) => {
            if (r.ok) {
                r.json().then(data => {
                setTrades(data)
                })}
            })
            }, [])

    // console.log("trades sent: > ")
    // console.log(trades)

    const tradeCards = trades.map(t => <TradeSentCard key={t.id} trade={t}/>)


    return (
    <div>
        {/* <h2 style={{ position:'fixed', top:0, textDecoration: 'underline', textUnderlineOffset: 6, textDecorationThickness: 3, fontSize:16, fontWeight: 800, marginTop:120, marginLeft:100, marginBottom:-150 }}>{user.first_name}'s sent trades</h2> */}
        <div className='tradeCards' style={{marginLeft:165, marginTop:280 }}>
            {tradeCards}
        </div>
        <div style={{position:'fixed', display:'flex', flexFlow:'row', left:100, top:720}}>
                <img src={user.profile_pic} alt='icon' className='icon' />
                <p style={{ fontStyle:'normal', position:'fixed', left:200, top:720, textTransform:'uppercase', fontWeight:700, letterSpacing:1.5 }}>SENT</p>
                <p style={{ fontStyle:'normal', position:'fixed', left:200, top:750, textTransform:'uppercase', fontWeight:700, letterSpacing:1.5 }}>TRADES</p>
            </div>
    </div>
    );
}

export default Tradessent;
