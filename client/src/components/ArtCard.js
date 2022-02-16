import React from 'react';
import {Link } from "react-router-dom"

const Artcard = (props) => {

    // title={c.title} artist={c.artist} description={c.description} size={c.size} tags={c.tags} year={c.year} available={c.available} url={c.url} id={c.id} user_id={c.user_id}
    
    console.log(props)

    return (
        <div style={{width:150,height:150, backgroundColor: 'coral'}}>
            <p>{props.artist}</p>
        </div>
    );
}

export default Artcard;
