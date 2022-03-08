import React, {useState} from 'react';

const Artupload = () => {

    const transUrl ='https://upload.wikimedia.org/wikipedia/commons/5/59/Empty.png?20091205084734'

    const [artUrl, setArtUrl] = useState(transUrl) 
    const [formData, setFormData] = useState({title:'', tags:'', size:'', description:'', year:'' })

    const onChangeForm = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setFormData({
            ...formData,
            [name]: value,
          })
      }

    return (
        <div style={{display:'flex'}}>
        <div style={{display:'flex', flexFlow:'column', alignSelf:'flex-start'}}>
            <div style={{display:'flex', flexFlow:'row', marginTop:'15%', marginLeft:110, alignSelf:'flex-start' }}>
                <h2 style={{marginTop:20}}>Uploading your artwork</h2>
                <h4 style={{width:420, marginLeft:50, marginRight:50 }}> please provide a link to an image of your artwork, some technical details, and a brief description. </h4>
                {/* <button className='button' style={{ marginTop:7, width:300, height:60, padding:'auto' }}>add image</button> */}
            </div>
            <div style={{display:'flex', flexFlow:'row', marginTop:20, marginLeft:110, marginRight:'10%', alignSelf:'flex-start' }}>
                <img className='uploadImg' src={artUrl} style={{ }}/>
                <div style={{display:'flex', flexFlow:'column', alignSelf:'flex-start', marginRight:20 }}>
                    <h3>Title</h3>
                    <input style={{width:300}} className='inputS' name='title' value={formData.title} onChange={onChangeForm} type="text"/>
                </div>
                <div style={{display:'flex', flexFlow:'column', alignSelf:'flex-start', marginRight:20 }}>
                    <h3>image URL</h3>
                    <input style={{width:300}} className='inputS' name='title' value={formData.title} onChange={onChangeForm} type="text"/>
                </div>
                
                
            </div>
        </div>
        </div>
    );
}

export default Artupload;
