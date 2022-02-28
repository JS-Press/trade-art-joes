import React from 'react';
import { useNavigate } from "react-router-dom";

const Tradesentcard = ({ trade }) => {



    return (
        <div className='tradeCard' >
        <img className='tradeCardImg' src={trade.trader_art.url} alt='trade art 1'/>
        <img className='tradeCardImg2' src={trade.vendor_art.url} alt='trade art 2'/>
        <div className='TradeArtDeets'></div>
            <h2>to {trade.vendor.first_name}</h2>
            <h4>trade details</h4>
            <br></br>
            <br></br>
        </div>
    );
}

export default Tradesentcard;
