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
            <div className='tradeCards'>
               {tradeCards}
           </div>
        </div>
    );
}

export default Tradescomp;
