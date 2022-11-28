import React, { useState } from 'react';


const PostdataComponent =()=>{

    const[Data,setData]=useState({
        "email": "",
        "message": "",
        "name": ""
     
    })

    const {email,message,name}=Data;

    const enterdataHndl =(e)=>{
setData({...Data,[e.target.name]:[e.target.value]})
    }

    const submithndlr =(e)=>{
e.peventDefault()
console.log(Data)
    }
    return(

        <div>
<form>
    <lable>email :</lable>
    <input type= 'mail'  id='mail' value={email} name='email' onChange={(e)=>{enterdataHndl(e)}}/>  <br/>
    <lable>message :</lable>
    <input type= 'text' id='message' value={message} name='message' onChange={(e)=>{enterdataHndl(e)}}/> <br/>
    <lable>name :</lable>
    <input type= 'text' id='name' value={ name } name ='text' onChange={(e)=>{enterdataHndl(e)}}/> <br/>

    <button onSubmit={submithndlr}>submit</button>

</form>
        </div>
    )
}
export default PostdataComponent;