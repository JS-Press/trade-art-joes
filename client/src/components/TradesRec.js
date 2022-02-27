import React, {useEffect, useState}  from 'react';
import TradeCompCard from './TradeCompCard'

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

    console.log("trades received: > ")
    console.log(trades)

    const tradeCards = trades.map(t => <TradeCompCard key={t.id} trade={t}/>)

    return (
        <div>
           <p>trades received!</p>
           <div className='artCards' >
               {tradeCards}
           </div>
        </div>
    );
}

export default Tradesrec;
