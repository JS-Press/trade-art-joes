import React, {useEffect, useState} from 'react';
import TradeCompCard from './TadeCompCard'

const Tradescomp = ({ user }) => {

    const [trades, setTrades] = useState([])

    
    useEffect( () => {
        fetch(`/tradesComp/${user.id}`).then((r) => {
            if (r.ok) {
                r.json().then(data => {
                console.log(data)
                })}
            })
            }, [])

    console.log('user: ' + user + 'trades >')
    console.log(trades)

    const tradeCards = trades.map(t => <TradeCompCard trade={t}/>)
        
    return (
        <div>
             <p>trades completed!</p>
             <div className='ArtCards' >
             {tradeCards}
             </div>
        </div>
    );
}

export default Tradescomp;
