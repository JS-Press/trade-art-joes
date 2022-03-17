import React from 'react';

const Completedtrade = ({ trade }) => {

    function handleClick(e){
        console.log(e.target.value)
    }

    return (
        <div style={{display:'flex',flexFlow:'row'}}>
            {trade?<>
                <img className='tradeCardImgs' src={trade.trader_art.url} value={trade.trader_art.id} alt='art image not found' onClick={handleClick} />
                <img className='tradeCardImgs' src={trade.vendor_art.url} value={trade.vendor_art.id} alt='art image not found' onClick={handleClick} />
            </>:
            <>
            </>}
        </div>
    );
}

export default Completedtrade;
