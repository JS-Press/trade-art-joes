import React from 'react';

const About = () => {
    return (
        <>
            <p style={{ marginTop: 120, fontWeight: 'bold', marginLeft: 70, marginBottom:30 }}>a place for artists to trade their art with each other.</p>
            <br></br>
            <div style={{display:'flex', flexFlow:'row', justifyContent:'space-around', marginTop:100, marginRight:280, marginLeft:280}}>
            <div>
            <p style={{textAlign:'left', fontWeight: 800, fontSize: 40}}>post art</p>
            <p style={{textAlign:'left', fontWeight: 800, fontSize: 40}}>offer trades</p>
            </div>
            <div style={{width:10,height:450,backgroundColor:'white', marginTop:-100}}></div>
            <div>
            <br></br>
            <p style={{textAlign:'left', fontWeight: 800, fontSize: 40}}>say yes</p>
            <p style={{textAlign:'left', fontWeight: 800, fontSize: 40}}>mail art</p>
            </div>
            </div>
        </>
    );
}

export default About;
