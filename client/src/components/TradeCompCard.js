import React from 'react';
import { useNavigate } from "react-router-dom";

const TradeCompCard = ({ trade }) => {

    // console.log("TC for " + trade.trader + ' and ' + trade.vendor)
    // console.log(trade)

function handleTradeClick(){
    console.log(trade.id)
}


    return (
        <div className='tradeCard' onClick={handleTradeClick} >
            <img className='tradeCardImg' src={trade.vendor_art.url} alt='trade art 1'/>
            <img className='tradeCardImg2' src={trade.trader_art.url} alt='trade art 2'/>
            <div className='TradeArtDeets'></div>
                {/* <h2>with {trade.trader.first_name} and {trade.vendor.first_name}</h2> */}
                <h3>completed {trade.completed_date}</h3>
                <button className='detailButton' onClick={handleTradeClick} >trade details</button>
                <br></br>
                <br></br>
            </div>
    );
}

export default TradeCompCard;
