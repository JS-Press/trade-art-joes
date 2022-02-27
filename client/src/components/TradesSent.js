import React, {useState, useEffect} from 'react';

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

    return (
        <div>
            <p>trades sent!</p>
        </div>
    );
}

export default Tradessent;
