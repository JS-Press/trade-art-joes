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
        <h2 style={{ position:'fixed', top:0, textDecoration: 'underline', textUnderlineOffset: 6, textDecorationThickness: 3, fontSize:16, fontWeight: 800, marginTop:120, marginLeft:100, marginBottom:-150 }}>{user.first_name}'s sent trades</h2>
        <div className='tradeCards' style={{marginLeft:165}}>
            {tradeCards}
        </div>
    </div>
    );
}

export default Tradessent;
