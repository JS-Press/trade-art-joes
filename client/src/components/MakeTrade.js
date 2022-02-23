import React from 'react';

const MakeTrade = ({tradeArtwork, user}) => {

    console.log('tradeArtwork: '+ tradeArtwork.title)
    console.log('user: '+ user.first_name)
    return (
        <div>
            <p className='loading' >loading trade</p>
        </div>
    );
}

export default MakeTrade;
