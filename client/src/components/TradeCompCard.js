import React from 'react';
import { useNavigate } from "react-router-dom";

const TradeCompCard = ({ trade }) => {

    // console.log("TC for " + trade.trader + ' and ' + trade.vendor)
    console.log(trade)
    return (
        <div className='tradeCard' >
            <img className='tradeCardImg' src={trade.vendor_art.url} alt='trade art 1'/>
            <img className='tradeCardImg2' src={trade.trader_art.url} alt='trade art 2'/>
            <div className='TradeArtDeets'></div>
                <h2>with {trade.trader.first_name} and {trade.vendor.first_name}</h2>
                <p>completed {trade.completed_date}</p>
                <h4>trade details</h4>
                <br></br>
                <br></br>
            </div>
    );
}

export default TradeCompCard;
