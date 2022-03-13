import React from 'react';
import { useNavigate } from "react-router-dom";

const Tradereccard = ({trade, handleRespond}) => {

    const navigate = useNavigate()
    const str = trade.offered_date
    const dateObj = new Date(str);
    const month = dateObj.getMonth() + 1;
    const day = dateObj.getDate();
    const year = dateObj.getFullYear();
    const newdate = month + "/" + day + "/" + year;


    function handleTradeClick(){
        navigate(`/trades/received/${trade.id}`)
    }


    return (
        <div className='tradeCard' style={{marginRight:48}} >
        <img className='tradeCardImg' style={{alignSelf:'center', marginLeft:-85,}} src={trade.vendor_art.url} alt='trade art 1' onClick={handleTradeClick} />
        <img className='tradeCardImg2' style={{alignSelf:'center', marginLeft:-85,}} src={trade.trader_art.url} alt='trade art 2' onClick={handleTradeClick} />
        <div className='TradeArtDeets' style={{marginTop:100}}></div>
        <h2 style={{ marginTop:10, marginBottom:5, alignSelf:'center', marginLeft:-85 }}>From: {trade.trader.first_name} {trade.trader.last_name}</h2>
         <h3 style={{ alignSelf:'center', fontStyle:'italic', fontWeight: 300, letterSpacing:1.5, marginTop:3, marginBottom:15, marginLeft:-85, fontSize:16 }}>RECEIVED {newdate}</h3>
            <button className='respond' style={{alignSelf:'center', marginLeft:-85,}} onClick={()=>handleRespond(trade.id)}>respond to offer</button>
            {/* <button className='detailButton' style={{alignSelf:'center', marginLeft:-85,}} onClick={handleTradeClick} >trade details</button> */}
            <br></br>
            <br></br>
        </div>
    );
}

export default Tradereccard;
