import React, {useEffect, useState} from 'react'
import TradeCompCard from './TradeCompCard'
import { useNavigate } from "react-router-dom"

const Tradescomp = ({ user }) => {

    const navigate = useNavigate()
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
            <div className='popUp' style={{marginTop:-580, height:480, width:850}}>
                    <button className='details' style={{marginLeft:50, marginTop:-50, fontSize:16}} onClick={()=>setShown(false)} >GO BACK</button>
                    <p style={{fontStyle:'normal', fontSize:28, marginTop:-55, fontWeight:700, letterSpacing:.4 }}>offer sent by {selectedTrade.trader.first_name} to {selectedTrade.vendor.first_name}</p>
                    <p style={{fontSize:16, fontWeight:300, marginTop:-20, marginBottom:22 }}>COMPLETED: {selectedTrade.completed_date}</p>
                    <div style={{display:'flex', flexFlow:'row', backgroundColor:'transparent'}} >
                        <div style={{display:'flex', flexFlow:'column', backgroundColor:'transparent', marginLeft:60, marginRight:-185 }}>
                            <div style={{display:'flex', flexFlow:'row', backgroundColor:'transparent', justifyContent:'space-between'}} >
                                <img style={{marginRight:40, marginTop:90, marginLeft:-2}} src={selectedTrade.trader.profile_pic} alt='icon' className='icon' />
                                <img style={{marginRight:-21}} className='reviewImgs' src={selectedTrade.trader_art.url} alt='art not found' onClick={()=>navigate(`/artworks/${selectedTrade.trader_art.id}`)} />
                            </div>
                            <h3 style={{ marginBottom:-15, fontSize:26, fontWeight:800, letterSpacing:.5 }}>{selectedTrade.trader.first_name} {selectedTrade.trader.last_name}</h3>
                            <h4 style={{marginLeft:0, marginRight:-888, backgroundColor:'transparent'}}>{selectedTrade.trader.street_address}</h4>
                            <h4 style={{marginLeft:0, marginRight:-888, backgroundColor:'transparent'}}>{selectedTrade.trader.city}, {selectedTrade.trader.state} {selectedTrade.trader.zip}</h4>
                        </div>
                        <div className='dotted' style={{marginLeft:250, marginTop:-9, height:295, marginBottom:-40}}></div>
                        <div style={{display:'flex', flexFlow:'column', justifyContent:'space-between', backgroundColor:'transparent', marginLeft:60, textAlign:'right', width:'40%' }}>
                            <div style={{display:'flex', flexFlow:'row', backgroundColor:'transparent'}} >
                                <img style={{marginLeft:-15}} className='reviewImgs' src={selectedTrade.vendor_art.url} alt='art not found' onClick={()=>navigate(`/artworks/${selectedTrade.vendor_art.id}`)}/>
                                <img style={{ marginLeft:42, marginTop:90 }} src={selectedTrade.vendor.profile_pic} alt='icon' className='icon' />
                            </div>
                            <h3 style={{textAlign:'right', marginRight:32, marginBottom:-15, fontSize:26, fontWeight:800, letterSpacing:.5, backgroundColor:'transparent' }}>{selectedTrade.vendor.first_name} {selectedTrade.vendor.last_name}</h3>
                            <h4 style={{ textAlign:'right', marginRight:32, backgroundColor:'transparent' }}>{selectedTrade.vendor.street_address}</h4>
                            <h4 style={{textAlign:'right', marginRight:32, backgroundColor:'transparent' }}>{selectedTrade.trader.city}, {selectedTrade.trader.state} {selectedTrade.trader.zip}</h4>
                        </div>
                    </div>
                        <p style={{fontSize:14, fontWeight:300, marginTop:25}}>note from {selectedTrade.trader.first_name}</p>
                        <div style={{paddingLeft:10, paddingRight:10, paddingTop:5, paddingBottom:5, marginLeft:60, marginTop:12, display:'flex', borderStyle:'solid', borderColor:'white', borderRadius:50, borderWidth:.1, width:712, height:69, alignSelf:'center', justifyContent:'space-around'}}>
                            <p style={{ width:700, marginTop:12, marginLeft:5, marginRight:5, fontSize:14, fontWeight:700 ,alignSelf:'center', textAlign:'left' }}>{selectedTrade.trader_note}</p>
                        </div>
                </div>
           </>:
           <>
           </>}
        </div>
    );
}

export default Tradescomp;
