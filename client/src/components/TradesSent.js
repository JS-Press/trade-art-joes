import React, {useState, useEffect} from 'react';
import TradeCompCard from './TradeCompCard'

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

    console.log("trades sent: > ")
    console.log(trades)

    const tradeCards = trades.map(t => <TradeCompCard key={t.id} trade={t}/>)


    return (
        <div>
            <p>trades sent!</p>
            <div className='artCards'>
               {tradeCards}
           </div>
        </div>
    );
}

export default Tradessent;
