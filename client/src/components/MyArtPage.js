import React, { useEffect, useState} from 'react'
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"

const Myartpage = ({ user }) => {

    const navigate = useNavigate()
    let { id } = useParams();
    const [confirmShown, setConfirmShown] = useState(false)
    const [art, setArt] = useState(null)

    useEffect( () => {
        fetch(`/artworks/${id}`).then((r) => {
            if (r.ok) {
                r.json().then(data => {
                setArt(data)
                })}
            })
        }, [])

    function handleArtistClick(e){
        navigate(`/users/${art.user_id}`)
    }

    function handleDeleteClick(id){
        setConfirmShown(true)
        }

    function handleDeleteArt(){
        fetch(`/artworks/${id}`, {
            method: "DELETE"
          }).then((r) => {
            if (r.ok) {
            r.json().then(data => { navigate('/myArt') })
          }else {
            console.log('unsuccessful delete :(')
        }})
    }

    return (
        <div className='ArtPage' >
            { art? <> 
            <img style={{marginTop:190}} className='ArtPageImg' src={art.url} />
            <div style={{marginTop:190}} className='ArtPageDeets'>
                <div className='nameIcons' >
                    <img src={art.user.profile_pic} alt='icon' className='icon' onClick={handleArtistClick} />
                    <div className='nameInfo'>
                        <h2 style={{ fontSize:20 }}>{art.artist}</h2>
                        <h4 style={{ marginTop:5 }}>{art.user.city}, {art.user.state}</h4>
                    </div>
                </div>
                <br></br>
                <br></br>
                <h2>{art.title}</h2>
                <h4 style={{ marginRight:-200 }}>{art.tags}</h4>
                <h4>{art.size} "</h4>
                <h4>{art.year}</h4>
                <br></br>
                <br></br>
                <h4>{art.description}</h4>
                {confirmShown? <>
                <div className='popUp' style={{ top:'70%',left:'1%', height:400}}>
                    <p style={{fontSize:28, marginTop:20}}>Are you sure you want to delete your artwork?</p>
                    <p style={{fontSize:28}}>This art's incomplete trade offers will also be deleted!</p>
                    <p style={{fontSize:28}}>This action can't be undone :(</p>
                    <div style={{marginTop:-25, display:'flex', flexFlow:'row', justifyContent:'space-around', backgroundColor:'transparent'}}>
                        <button className='button' onClick={()=>setConfirmShown(false)}>no</button>
                        <button className='button' onClick={handleDeleteArt}>yes</button>
                    </div>
                </div>
                </>:
                <>
                <button className='button' style={{width:200}} onClick={handleDeleteClick} >DELETE</button>
                </>}
            </div>
            </> 
            :<>
            <p className='loading' style={{ marginLeft:100, marginTop:180 }} >loading art...</p>
            </>}
        </div>
    );
}

export default Myartpage;
