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
        <div style={{display:'flex', flexFlow:'column', marginLeft:20 }}>
            <div style={{display:'flex', flexFlow:'row', marginTop:'12%', alignSelf:'center' }}>
                <h2 style={{marginTop:20}}>Uploading your artwork:</h2>
                <h4 style={{width:420, marginLeft:30, marginRight:-10}}> please provide a link to an image of your artwork, some technical details, and a brief description. </h4>
            </div>
            <div style={{display:'flex', flexFlow:'row', marginTop:35, alignSelf:'center' }}>
                {formData.url?<>
                <div style={{display:'flex', flexFlow:'column'}}>
                    <img className='uploadImg' src={formData.url} />
                    <h3 style={{marginTop:-20}} >image URL</h3>
                    <input style={{ marginBottom:30, width:188, fontSize:16, paddingLeft:10 }} className='inputS' name='url' value={formData.url} onChange={onChangeForm} type="text"/>
                </div>     
                </>:
                <>
                <div style={{display:'flex', flexFlow:'column'}}>
                    <img className='uploadImg' src={'https://img1.picmix.com/output/stamp/normal/5/7/2/4/1564275_04301.gif'} style={{ width:250,height:250, marginLeft:8 }}/>
                    <h3 style={{marginTop:-20}}>image URL</h3>
                    <input style={{ marginBottom:30, width:188, fontSize:16, paddingLeft:10 }} className='inputS' name='url' value={formData.url} onChange={onChangeForm} type="text"/>
                </div>     
                </>}
                <div style={{display:'flex', flexFlow:'column', alignSelf:'flex-start', marginLeft:-35, width:'100%' }}>
                    <div style={{display:'flex', flexFlow:'row', alignSelf:'flex-start' }}>
                        <div style={{display:'flex', flexFlow:'column', alignSelf:'flex-start', marginRight:20 }}>
                            <h3>Title</h3>
                            <input style={{width:254, fontSize:16 }} className='inputS' name='title' value={formData.title} onChange={onChangeForm} type="text"/>
                        </div>
                        <div style={{display:'flex', flexFlow:'column', alignSelf:'flex-start', marginRight:20 }}>
                            <h3>year</h3>
                            <input style={{width:138, fontSize:16, paddingLeft:10 }} className='inputS' name='year' value={formData.year} onChange={onChangeForm} type="text"/>
                        </div>
                        <div style={{display:'flex', flexFlow:'column', alignSelf:'flex-start', marginRight:20 }}>
                            <h3>size</h3>
                            <div style={{ display:'flex', flexFlow:'row' }}>
                                <input style={{width:55, fontSize:16 }} className='inputS' name='sizeA' value={formData.sizeA} onChange={onChangeForm} type="text"/>
                                <h3 style={{marginTop:-0, marginLeft:3, marginRight:3 }}>x</h3>
                                <input style={{width:55, fontSize:16 }} className='inputS' name='sizeB' value={formData.sizeB} onChange={onChangeForm} type="text"/>
                                <h3 style={{marginTop:-0, marginLeft:3, marginRight:3 }}>x</h3>
                                <input style={{width:55, fontSize:16 }} className='inputS' name='sizeC' value={formData.sizeC} onChange={onChangeForm} type="text"/>
                            </div>
                        </div>
                    </div>
                    <div style={{display:'flex', flexFlow:'row', alignSelf:'flex-start', marginTop:2 }}>
                        <div style={{display:'flex', flexFlow:'column', alignSelf:'flex-start', marginRight:20 }}>
                            <h3>description</h3>
                            <input style={{width:315, fontSize:16 }} className='inputS' name='description' value={formData.description} onChange={onChangeForm} type="text"/>
                        </div>
                        <div style={{display:'flex', flexFlow:'column', alignSelf:'flex-start', marginRight:20 }}>
                            <h3>tags</h3>
                            <input style={{width:320, fontSize:16 }} className='inputS' name='tags' value={formData.tags} onChange={onChangeForm} type="text"/>
                        </div>
                    </div>
                    <div style={{ display:'flex', flexFlow:'row', marginTop:8 }}> 
                        <input type="checkbox" style={{ width:30, height:30, marginTop:25, accentColor:'white' }} onClick={()=>setOwner(!owner)} ></input>
                        <h4 style={{marginLeft:10, marginTop:21, width:190, marginRight:5, fontSize:16 }}>I am the owner and creator of this artwork</h4>
                        <input type="checkbox" style={{ width:30, height:30, marginLeft:15, marginTop:25, accentColor:'white' }} onClick={()=>setWilling(!willing)}></input>
                        <h4 style={{marginLeft:10, marginTop:21, width:190, marginRight:5, fontSize:16 }}>I am ready and willing to trade this artwork :)</h4>
                        <button className='button' style={{marginLeft:10,  marginTop:16.5, fontSize:20, width:160, height:50, padding:'auto', paddingTop:0 }} onClick={handleUpload} >post your art</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Artupload;
