import React, {useEffect, useState} from 'react';
import TradeCompCard from './TradeCompCard'

const Tradescomp = ({ user }) => {

    const [trades, setTrades] = useState([])

    
    useEffect( () => {
        fetch(`/tradesComp/${user.id}`).then((r) => {
            if (r.ok) {
                r.json().then(data => {
                setTrades(data)
                })}
            })
            }, [])

    console.log("trades completed: > ")
    console.log(trades)

    const tradeCards = trades.map(t => <TradeCompCard key={t.id} trade={t}/>)
        
    return (
        <div>
            <h2 style={{ position:'fixed', top:0, textDecoration: 'underline', textUnderlineOffset: 6, textDecorationThickness: 3, fontSize:16, fontWeight: 800, marginTop:120, marginLeft:100, marginBottom:-150 }}>{user.first_name}'s completed trades</h2>
            <div className='tradeCards'>
               {tradeCards}
           </div>
        </div>
    );
}

export default Tradescomp;
