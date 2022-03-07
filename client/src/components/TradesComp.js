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
    console.log(trades)
    trades.reverse()
    console.log(trades)
    

    const ordered = trades.sort((a,b) =>  new Date(b.completed_date) - new Date(a.completed_date))
    const tradeCards = ordered.map(t => <TradeCompCard key={t.id} trade={t} handleSelectTrade={handleSelectTrade} />)
        
    return (
        <div>
            {/* <h2 style={{ position:'fixed', top:0, textDecoration: 'underline', textUnderlineOffset: 6, textDecorationThickness: 3, fontSize:16, fontWeight: 800, marginTop:120, marginLeft:100, marginBottom:-150 }}>{user.first_name}'s completed trades</h2> */}
            <div className='tradeCards' style={{marginLeft:120, marginTop:280}}>
               {tradeCards}
           </div>
            <div style={{position:'fixed', display:'flex', flexFlow:'row', left:100, top:720}}>
                <img src={user.profile_pic} alt='icon' className='icon' />
                <p style={{ fontStyle:'normal', position:'fixed', left:200, top:720, textTransform:'uppercase', fontWeight:700, letterSpacing:1.5 }}>COMPLETED</p>
                <p style={{ fontStyle:'normal', position:'fixed', left:200, top:750, textTransform:'uppercase', fontWeight:700, letterSpacing:1.5 }}>TRADES</p>
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
