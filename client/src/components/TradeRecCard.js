import React from 'react';
import { useNavigate } from "react-router-dom";

const Tradereccard = ({trade}) => {

    const str = trade.offered_date
    const dateObj = new Date(str);
    const month = dateObj.getMonth() + 1;
    const day = dateObj.getDate();
    const year = dateObj.getFullYear();
    const newdate = month + "/" + day + "/" + year;


    function handleTradeClick(){
        console.log(trade)
    }

    function handleRespondClick(){
        console.log('respond to: ' + trade.id)
    }


    return (
        <div className='tradeCard'  >
        <img className='tradeCardImg' style={{alignSelf:'center', marginLeft:-85,}} src={trade.vendor_art.url} alt='trade art 1' onClick={handleTradeClick} />
        <img className='tradeCardImg2' style={{alignSelf:'center', marginLeft:-85,}} src={trade.trader_art.url} alt='trade art 2' onClick={handleTradeClick} />
        <div className='TradeArtDeets' style={{marginTop:100}}></div>
        <h2 style={{ marginTop:10, marginBottom:5, alignSelf:'center', marginLeft:-85 }}>From: {trade.trader.first_name} {trade.trader.last_name}</h2>
         <h3 style={{ alignSelf:'center', fontStyle:'italic', fontWeight: 300, letterSpacing:1.5, marginTop:3, marginBottom:15, marginLeft:-85, fontSize:16 }}>RECEIVED {newdate}</h3>
            <button className='respond' style={{alignSelf:'center', marginLeft:-85,}} onClick={handleRespondClick}>respond to offer</button>
            {/* <button className='detailButton' style={{alignSelf:'center', marginLeft:-85,}} onClick={handleTradeClick} >trade details</button> */}
            <br></br>
            <br></br>
        </div>
    );
}

export default Tradereccard;
