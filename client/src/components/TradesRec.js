import React, {useEffect, useState}  from 'react';

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

    return (
        <div>
            <p>trades received!</p>
        </div>
    );
}

export default Tradesrec;
