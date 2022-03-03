import React from 'react';

const Traderartcard = ({art, handleSelectArt}) => {


function handleClick(){
    handleSelectArt(art)
}

    return (
        <div style={{ marginBottom:25, marginLeft:30 }} >
            <img className='tradeCardImgs' src={art.url} value={art.id} alt='art image not found' onClick={handleClick} />
        </div>
    );
}

export default Traderartcard;
