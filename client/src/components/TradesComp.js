import React, {useEffect, useState} from 'react';
import TradeCompCard from './TradeCompCard'
import CompletedTrade from './CompletedTrade'

const Tradescomp = ({ user }) => {

    const [trades, setTrades] = useState([])
    const [selectedTrade, setSelectedTrade] = useState({})
    const [shown, setShown] = useState(false)
    
    useEffect( () => {
        fetch(`/tradesComp/${user.id}`).then((r) => {
            if (r.ok) {
                r.json().then(data => {
                setTrades(data)
                })}
            })
            }, [])

function handleSelectTrade(t){
    setSelectedTrade(t)
    setShown(true)
}

    // console.log("trades completed: > ")
    // console.log(trades)

    const tradeCards = trades.map(t => <TradeCompCard key={t.id} trade={t} handleSelectTrade={handleSelectTrade} />)
        
    return (
        <div>
            {/* <h2 style={{ position:'fixed', top:0, textDecoration: 'underline', textUnderlineOffset: 6, textDecorationThickness: 3, fontSize:16, fontWeight: 800, marginTop:120, marginLeft:100, marginBottom:-150 }}>{user.first_name}'s completed trades</h2> */}
            <div className='tradeCards' style={{marginLeft:120}}>
               {tradeCards}
           </div>
           {shown?<>
           <div className='CT' >
               <h3 style={{display:'flex',alignSelf:'flex-end', backgroundColor:'transparent'}} onClick={()=> setShown(false)}>GO BACK</h3>
            <CompletedTrade trade={selectedTrade} />
           </div>
           </>:
           <>
           </>}
        </div>
    );
}

export default Tradescomp;
