import React from 'react';
import { useNavigate } from "react-router-dom";

const TradeCompCard = ({ trade }) => {

    // console.log("TC for " + trade.trader + ' and ' + trade.vendor)
    // console.log(trade)

    const str = trade.completed_date
    const dateObj = new Date(str);
    const month = dateObj.getMonth() + 1; //months from 1-12
    const day = dateObj.getDate();
    const year = dateObj.getFullYear();
    const newdate = month + "/" + day + "/" + year;

function handleTradeClick(){
    console.log(trade.id)
}


    return (
        <div className='tradeCard' onClick={handleTradeClick} >
            <img className='tradeCardImg' style={{alignSelf:'center', marginLeft:-85,}} src={trade.vendor_art.url} alt='trade art 1'/>
            <img className='tradeCardImg2' style={{alignSelf:'center', marginLeft:-85,}} src={trade.trader_art.url} alt='trade art 2'/>
            <div className='TradeArtDeets' style={{marginTop:85}} ></div>
                <h2 style={{alignSelf:'center', marginLeft:-85,}} >offer from: {trade.trader.first_name}</h2>
                <h2 style={{alignSelf:'center', marginLeft:-85, marginTop:-5, marginBottom:-5 }} >sent to: {trade.vendor.first_name}</h2>
                <h3 style={{fontStyle:'italic', fontSize:16, fontWeight: 300, letterSpacing:1.5, marginTop:20, marginBottom:8, marginLeft:-85, alignSelf:'center' }}>COMPLETED {newdate}</h3>
            <button className='detailButton' style={{alignSelf:'center', marginLeft:-85,}} onClick={handleTradeClick} >trade details</button>
                <br></br>
                <br></br>
            </div>
    );
}

export default TradeCompCard;
