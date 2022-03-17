import React from 'react';

const TradeCompCard = ({ trade, handleSelectTrade }) => {

    const str = trade.completed_date
    const dateObj = new Date(str);
    const month = dateObj.getMonth() + 1;
    const day = dateObj.getDate();
    const year = dateObj.getFullYear();
    const newdate = month + "/" + day + "/" + year;

function handleTradeClick(){
    handleSelectTrade(trade)
}


    return (
        <div className='tradeCard' style={{marginRight:48}} onClick={handleTradeClick} >
            <img className='tradeCardImg' style={{alignSelf:'center', marginLeft:-85,}} src={trade.vendor_art.url} alt='trade art 1'/>
            <img className='tradeCardImg2' style={{alignSelf:'center', marginLeft:-85,}} src={trade.trader_art.url} alt='trade art 2'/>
            <div className='TradeArtDeets' style={{marginTop:85}} ></div>
                <h2 style={{alignSelf:'center', marginLeft:-85,}} >offer from: {trade.trader.first_name}</h2>
                <h2 style={{alignSelf:'center', marginLeft:-85, marginTop:-5, marginBottom:-5 }} >sent to: {trade.vendor.first_name}</h2>
                <h3 style={{fontStyle:'italic', fontSize:16, fontWeight: 300, letterSpacing:1.5, marginTop:20, marginBottom:8, marginLeft:-85, alignSelf:'center' }}>COMPLETED {newdate}</h3>
                <button className='button' style={{alignSelf:'center', marginLeft:-85, marginTop:12, width:150, height:40, paddingBottom:5, fontSize:20 }} onClick={handleTradeClick} >trade details</button>
                <br></br>
                <br></br>
            </div>
    );
}

export default TradeCompCard;
