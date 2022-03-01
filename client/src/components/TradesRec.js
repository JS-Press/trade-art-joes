import React, {useEffect, useState}  from 'react';
import TradeRecCard from './TradeRecCard'

const Tradesrec = ({user}) => {

    const [trades, setTrades] = useState([])

    useEffect( () => {
        fetch(`/tradesRec/${user.id}`).then((r) => {
            if (r.ok) {
                r.json().then(data => {
                setTrades(data)
                })}
            })
            }, [])

    // console.log("trades received: > ")
    // console.log(trades)

    const tradeCards = trades.map(t => <TradeRecCard key={t.id} trade={t}/>)

    return (
        <div>
            <h2 style={{ position:'fixed', top:0, textDecoration: 'underline', textUnderlineOffset: 6, textDecorationThickness: 3, fontSize:16, fontWeight: 800, marginTop:120, marginLeft:100, marginBottom:-150 }}>{user.first_name}'s received trades</h2>
            <div className='tradeCards' style={{marginLeft:120}}> 
                {tradeCards}
            </div>
        </div>
    );
}

export default Tradesrec;
