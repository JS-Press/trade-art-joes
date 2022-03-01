import React from 'react';
import { useNavigate } from "react-router-dom";

const Tradereccard = ({trade}) => {

    function handleTradeClick(){
        console.log(trade)
    }

    function handleRespondClick(){
        console.log('respond to: ' + trade.id)
    }


    return (
        <div className='tradeCard'  >
        <img className='tradeCardImg' src={trade.vendor_art.url} alt='trade art 1' onClick={handleTradeClick} />
        <img className='tradeCardImg2' src={trade.trader_art.url} alt='trade art 2' onClick={handleTradeClick} />
        <div className='TradeArtDeets' style={{marginTop:110}}></div>
            {/* <h2 style={{fontSize:32}} >from: {trade.trader.first_name}</h2> */}
            <h3 style={{fontStyle:'italic', fontWeight: 300, letterSpacing:1.5, marginTop:3, marginBottom:10, marginLeft:30, fontSize:16 }}>RECEIVED {trade.offered_date}</h3>
            <button className='respond' onClick={handleRespondClick}>respond to offer</button>
            <button className='detailButton' onClick={handleTradeClick} >trade details</button>
            <br></br>
            <br></br>
        </div>
    );
}

export default Tradereccard;
