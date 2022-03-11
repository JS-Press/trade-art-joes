import React, { useEffect, useState} from 'react'
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"

const Tradedetailsent = () => {

    const navigate = useNavigate()
    let { id } = useParams();
    const [confirmShown, setConfirmShown] = useState(false)
    const [trade, setTrade] = useState({})
    
    useEffect( () => {
        fetch(`/trades/${id}`).then((r) => {
            if (r.ok) {
                r.json().then(data => {
                    setTrade(data)
                })}
            })
        }, [])
        
    console.log(trade)

    function handleArtistClick(e){
        // navigate(`/users/${art.user_id}`)
    }

    function handleDeleteClick(id){
        setConfirmShown(true)
        }

    function handleDeleteArt(){
        // fetch(`/artworks/${id}`, {
        //     method: "DELETE"
        //     }).then((r) => {
        //     if (r.ok) {
        //     console.log('successful delete!')
        //     r.json().then(data => { navigate('/myArt') })
        //     }else {
        //     console.log('unsuccessful delete :(')
        // }})
    }

    return (
        <div>
            <p>trade!</p>
        </div>
    );
}

export default Tradedetailsent;
