import React, {useState, useEffect} from 'react';
import MyArtCard from './MyArtCard';

const Myart = ({user}) => {

    const [artist, setArtist] = useState({artworks:[]})
    const [confirmShown, setConfirmShown] = useState(false)
    const [deletingArt, setDeletingArt] = useState(null)

    useEffect( () => {
        fetch(`/users/${user.id}`).then((r) => {
            if (r.ok) {
                r.json().then(data => {
                setArtist(data)
                })}
            })
        }, [])


        function handleDeleteClick(id){
            setConfirmShown(true)
            setDeletingArt(id)
            }

        function handleDeleteArt(){
            fetch(`/artworks/${deletingArt}`, {
                method: "DELETE"
              }).then((r) => {
                if (r.ok) {
                console.log('successful delete!')
                setDeletingArt(null)
                setConfirmShown(false)
                r.json().then(data => { setArtist(data) })
              }else {
                console.log('unsuccessful delete :(')
            }})
        }

        const artistWorks = artist.artworks.filter(c => c.user_id === artist.id)
        const avail_art = artistWorks.filter(a => a.available === true)
        const artCards = avail_art.map(c => <MyArtCard key={c.id} id={c.id} title={c.title} tags={c.tags} size={c.size} year={c.year} url={c.url} handleDeleteClick={handleDeleteClick} />)

      


    return (
        <div>
            {artistWorks? <>
            <div className='ArtCards' style={{marginTop:150 }}>
            {artCards}
            <div style={{ marginLeft:65, width:50, height:10, borderStyle:'normal', borderColor:'white', borderWeight:10, color:'transparent' }}><p> o</p></div>
            </div>
            <div style={{ left:110, top:125, backgroundColor:'transparent', display: 'flex', flexDirection: 'row', height:400, position:'fixed' }} >
                <img src={artist.profile_pic} alt='icon' className='T_icon' />
                <div className='nameInfo' style={{display: 'flex', flexDirection: 'column'}}>
                    {/* <h2 style={{ fontSize:48, marginRight:50, marginTop:4 }}>Art by {artist.first_name} {artist.last_name}</h2> */}
                    <h2 style={{ fontSize:24, left:175, top:100, textTransform:'uppercase', position:'fixed' }}>Available</h2>
                    <h2 style={{ fontSize:24,left:175, top:130,  textTransform:'uppercase', position:'fixed'  }}>Artworks</h2>
                    {/* <h4 style={{ marginTop:2, marginLeft:-9 }}>{artist.first_name} {artist.last_name}</h4> */}
                    {/* <h4 style={{ marginTop:15, marginLeft:-9 }}>{artist.city}, {artist.state}</h4> */}
                </div>
            </div>
            </>:
            <>
            <p>loading....your....art....</p>
            </>}
            {confirmShown? <>
            {/* <div className='popUp' style={{borderWidth:4, width:1036, height:450, left:-10, top:507, borderRadius:88 }}>
            </div> */}
            <div className='popUp' style={{marginTop:-335}}>
                <br></br>
                <p style={{fontSize:28}}>Are you sure you want to delete your artwork?</p>
                <p style={{fontSize:28}}>This art's incomplete trade offers will also be deleted!</p>
                <p style={{fontSize:28}}>This action can't be undone :(</p>
                <div style={{marginTop:-30, display:'flex', flexFlow:'row', justifyContent:'space-around', backgroundColor:'transparent'}}>
                <button className='button' onClick={()=>setConfirmShown(false)}>no</button>
                <button className='button' onClick={handleDeleteArt}>yes</button>
                </div>
            </div>
            </>:
            <>
            </>}
        </div>
    );
}

export default Myart;
