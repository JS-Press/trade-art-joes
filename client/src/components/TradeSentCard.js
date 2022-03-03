import React from 'react';
// import { useNavigate } from "react-router-dom";

const Tradesentcard = ({ trade }) => {

    // const navigate = useNavigate()

    const str = trade.offered_date
    const dateObj = new Date(str);
    const month = dateObj.getMonth() + 1;
    const day = dateObj.getDate();
    const year = dateObj.getFullYear();
    const newdate = month + "/" + day + "/" + year;

    function handleCancelClick(){
        console.log('deleting trade: ' + trade.id)
        fetch(`/trades/${trade.id}`, {
            method: "DELETE"
          }).then((r) => {
            if (r.ok) {
            console.log('successful delete!')
            // navigate(`/`)
          }else {
            console.log('unsuccessful delete :(')
        }})
    }

    function handleTradeClick(){
    console.log(trade.id)
    }


    return (
        <div className='tradeCard' >
        <img className='tradeCardImg' onClick={handleTradeClick} src={trade.trader_art.url} alt='trade art 1' style={{alignSelf:'center', marginLeft:-160 }} />
        <img className='tradeCardImg2' onClick={handleTradeClick} src={trade.vendor_art.url} alt='trade art 2'style={{alignSelf:'center', marginLeft:-160 }} />
        <h2 style={{ marginTop:110, marginBottom:-120, alignSelf:'center', marginLeft:-165 }}>To: {trade.vendor.first_name} {trade.vendor.last_name}</h2>
        <h3 style={{fontStyle:'italic', alignSelf:'center', fontSize:16, fontWeight: 300, letterSpacing:1.5, marginTop:130, marginBottom:15, marginLeft:-160 }}>SENT {newdate}</h3>
        <button className='respond' style={{alignSelf:'center', marginLeft:-160 }} onClick={handleCancelClick}>cancel offer</button>
        <br></br>
        <br></br>
        </div>
    );
}

export default Tradesentcard;
