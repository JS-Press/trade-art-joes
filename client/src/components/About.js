import React from 'react';

const artStyle = {
    width: 220,
    height: 220,
    marginTop:-90,
    border: 5,
    borderStyle: 'solid',
    padding: 15
}


const About = () => {
    return (
        <>
        <br></br>
        <br></br>
        <br></br>
        
            <p style={{ marginTop: 120, fontWeight: 'bold', marginLeft: 70, marginBottom:30 }}>a place for artists to trade their art with each other.</p>
            <br></br>
            <div style={{display:'flex', flexFlow:'row', justifyContent:'space-around', marginTop:100, marginRight:280, marginLeft:280}}>
            <div>
            <img style = {artStyle} src="../../flower-1.svg" alt="my art"></img>
            <p style={{fontWeight: 800, fontSize: 40}}>post art</p>
            <p style={{fontWeight: 800, fontSize: 40}}>offer trades</p>
            </div>
            <div style={{width:0,height:450, borderLeftStyle: 'dotted', borderWidth:8, marginTop:-100}}></div>
            <div>
            <img style = {artStyle} src="../../flower-2.svg" alt="your art"></img>
            <p style={{fontWeight: 800, fontSize: 40}}>say yes</p>
            <p style={{fontWeight: 800, fontSize: 40}}>mail art</p>
            </div>
            </div>
        </>
    );
}

export default About;
