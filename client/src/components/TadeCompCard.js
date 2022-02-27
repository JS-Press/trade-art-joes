import React from 'react';

const TadeCompCard = ({ trade }) => {

    console.log("TC for " + trade.trader + ' and ' + trade.vendor)

    return (
        <div style={{ width:150, height:150, backgroundColor:'red' }}>
            <p>{trade.trader} and {trade.vendor}</p>
        </div>
    );
}

export default TadeCompCard;
