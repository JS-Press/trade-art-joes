import React, {useState, useEffect} from 'react';
import TradeSentCard from './TradeSentCard'

const Tradessent = ({user}) => {

    const [trades, setTrades] = useState([])
    const [confirmShown, setConfirmShown] = useState(false)
    const [deletingTrade, setDeletingTrade] = useState(null)
    
    
useEffect( () => {
    console.log('user in effect: ')
    console.log(user)
    fetch(`/tradesSent/${user.id}`).then((r) => {
        if (r.ok) {
            r.json().then(data => {
            setTrades(data)
            })}
        })
        }, [])

function handleDeleteClick(id){
    setConfirmShown(true)
    setDeletingTrade(id)
    }

function handleDeleteOffer(){
    fetch(`/trades/${deletingTrade}`, {
        method: "DELETE"
        }).then((r) => {
        if (r.ok) {
            r.json().then(data => { 
                console.log('successful delete!')
                setDeletingTrade(null)
                setConfirmShown(false)
                console.log('setting trades: ')
                setTrades(data) })
        }else {
        console.log('unsuccessful delete :(')
    }})
}


    const tradeCards = trades.map(t => <TradeSentCard key={t.id} trade={t} handleDeleteClick={handleDeleteClick} />)


    return (
    <div>
        {/* <h2 style={{ position:'fixed', top:0, textDecoration: 'underline', textUnderlineOffset: 6, textDecorationThickness: 3, fontSize:16, fontWeight: 800, marginTop:120, marginLeft:100, marginBottom:-150 }}>{user.first_name}'s sent trades</h2> */}
        <div className='tradeCards' style={{marginLeft:165, marginTop:280 }}>
            {tradeCards}
        </div>
        <div style={{position:'fixed', display:'flex', flexFlow:'row', left:100, top:720}}>
                <img src={user.profile_pic} alt='icon' className='icon' />
                <p style={{ fontStyle:'normal', position:'fixed', left:200, top:720, textTransform:'uppercase', fontWeight:700, letterSpacing:1.5 }}>SENT</p>
                <p style={{ fontStyle:'normal', position:'fixed', left:200, top:750, textTransform:'uppercase', fontWeight:700, letterSpacing:1.5 }}>TRADES</p>
        </div>
        {confirmShown? <>
        {/* <div className='popUp' style={{borderWidth:4, width:1036, height:450, left:-10, top:507, borderRadius:88 }}>
        </div> */}
        <div className='popUp' style={{borderWidth:8, marginTop:-580, height:480, width:850}}>
            <br></br>
            <br></br>
            <p style={{fontSize:30}}>Are you sure you want to cancel your offer?</p>
            <p style={{fontSize:30}}>This action can't be undone :(</p>
            <div style={{display:'flex', flexFlow:'row', justifyContent:'space-around', backgroundColor:'transparent' }}>
                <button className='button' onClick={()=>setConfirmShown(false)}>no</button>
                <button className='button' onClick={handleDeleteOffer}>yes</button>
            </div>
        </div>
        </>:
        <>
        </>}
    </div>
    );
}

export default Tradessent;
