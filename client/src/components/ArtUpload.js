import React, {useState} from 'react';

const Artupload = () => {

    const [formData, setFormData] = useState({title:'', tags:'', sizeA:'', sizeB:'', sizeC:'', description:'', year:'', url:'' })
    const [owner, setOwner] = useState(false)
    const [willing, setWilling] = useState(false)

    const onChangeForm = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setFormData({
            ...formData,
            [name]: value,
          })
      }

    function handleUpload(){
        console.log(formData)
        console.log('willing: ')
        console.log(willing)
        console.log('Owner: ')
        console.log(owner)

    }

    return (
        <div style={{display:'flex', marginTop:35, justifyContent:'center', }}>
        <div style={{display:'flex', flexFlow:'column' }}>
            <div style={{display:'flex', flexFlow:'row', marginTop:'12%', alignSelf:'center' }}>
                <h2 style={{marginTop:20}}>Uploading your artwork:</h2>
                <h4 style={{width:420, marginLeft:50, marginRight:25 }}> please provide a link to an image of your artwork, some technical details, and a brief description. </h4>
                <button className='button' style={{ marginTop:8, fontSize:20, width:222, height:60, padding:'auto' }} onClick={handleUpload} >upload artwork</button>
            </div>
            <div style={{display:'flex', flexFlow:'row', marginTop:35, alignSelf:'center' }}>
                {formData.url?<>
                    <img className='uploadImg' src={formData.url} />
                </>:
                <>
                <img className='uploadImg' src={'https://img1.picmix.com/output/stamp/normal/5/7/2/4/1564275_04301.gif'} style={{ width:250,height:250 }}/>
                </>}
                <div style={{display:'flex', flexFlow:'column', alignSelf:'flex-start', marginLeft:-35, width:'100%' }}>
                    <div style={{display:'flex', flexFlow:'row', alignSelf:'flex-start' }}>
                        <div style={{display:'flex', flexFlow:'column', alignSelf:'flex-start', marginRight:20 }}>
                            <h3>Title</h3>
                            <input style={{width:188, fontSize:16, paddingLeft:10 }} className='inputS' name='title' value={formData.title} onChange={onChangeForm} type="text"/>
                        </div>
                        <div style={{display:'flex', flexFlow:'column', alignSelf:'flex-start', marginRight:20 }}>
                            <h3>image URL</h3>
                            <input style={{width:188, fontSize:16, paddingLeft:10 }} className='inputS' name='url' value={formData.url} onChange={onChangeForm} type="text"/>
                        </div>
                        <div style={{display:'flex', flexFlow:'column', alignSelf:'flex-start', marginRight:20 }}>
                            <h3>size</h3>
                            <div style={{ display:'flex', flexFlow:'row' }}>
                                <input style={{width:55, fontSize:16, paddingLeft:10 }} className='inputS' name='sizeA' value={formData.sizeA} onChange={onChangeForm} type="text"/>
                                <h3 style={{marginTop:-0, marginLeft:3, marginRight:3 }}>x</h3>
                                <input style={{width:55, fontSize:16, paddingLeft:10 }} className='inputS' name='sizeB' value={formData.sizeB} onChange={onChangeForm} type="text"/>
                                <h3 style={{marginTop:-0, marginLeft:3, marginRight:3 }}>x</h3>
                                <input style={{width:55, fontSize:16, paddingLeft:10 }} className='inputS' name='sizeC' value={formData.sizeC} onChange={onChangeForm} type="text"/>
                            </div>
                        </div>
                    </div>
                    <div style={{display:'flex', flexFlow:'row', alignSelf:'flex-start', marginTop:2 }}>
                        <div style={{display:'flex', flexFlow:'column', alignSelf:'flex-start', marginRight:20 }}>
                            <h3>description</h3>
                            <input style={{width:315, fontSize:16, paddingLeft:10 }} className='inputS' name='description' value={formData.description} onChange={onChangeForm} type="text"/>
                        </div>
                        <div style={{display:'flex', flexFlow:'column', alignSelf:'flex-start', marginRight:20 }}>
                            <h3>tags</h3>
                            <input style={{width:320, fontSize:16, paddingLeft:10 }} className='inputS' name='tags' value={formData.tags} onChange={onChangeForm} type="text"/>
                        </div>
                    </div>
                    <div style={{ display:'flex', flexFlow:'row', marginTop:8 }}> 
                        <input type="checkbox" style={{ width:30, height:30, marginTop:25, accentColor:'white' }} onClick={()=>setOwner(!owner)} ></input>
                        <h4 style={{marginLeft:25, marginTop:20, width:190}}>I am the owner and creator of this artwork</h4>
                        <input type="checkbox" style={{ width:30, height:30, marginLeft:100, marginTop:25, accentColor:'white' }} onClick={()=>setWilling(!willing)}></input>
                        <h4 style={{marginLeft:25, marginTop:20, width:190}}>I am ready and willing to trade this artwork :)</h4>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Artupload;
