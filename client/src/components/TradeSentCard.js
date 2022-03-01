import React from 'react';
import { useNavigate } from "react-router-dom";

const Tradesentcard = ({ trade }) => {

    function handleCancelClick(){
        console.log(trade)
    }


    return (
        <div className='tradeCard' >
        <img className='tradeCardImg' src={trade.trader_art.url} alt='trade art 1' style={{alignSelf:'center', marginLeft:-160 }} />
        <img className='tradeCardImg2' src={trade.vendor_art.url} alt='trade art 2'style={{alignSelf:'center', marginLeft:-160 }} />
        <h2 style={{ marginTop:110, marginBottom:-120, alignSelf:'center', marginLeft:-165 }}>To: {trade.vendor.first_name} {trade.vendor.last_name}</h2>
        <h3 style={{fontStyle:'italic', alignSelf:'center', fontSize:16, fontWeight: 300, letterSpacing:1.5, marginTop:130, marginBottom:8, marginLeft:-160 }}>SENT {trade.offered_date}</h3>
        <button className='respond' style={{height:45,width:200, alignSelf:'center', marginLeft:-160, marginTop:10 }} onClick={handleCancelClick}>cancel offer</button>
        <br></br>
        <br></br>
        </div>
    );
}

export default Tradesentcard;
