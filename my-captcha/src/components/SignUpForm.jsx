import React from 'react'
import {useState,useEffect} from "react"
import "./Signup.css"

function SignUpForm() {
    const [cap,setcap]=useState("")
    const [checkcap,setcapcheck]=useState("")
    


    const makecaptcha=(length)=>{
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
       setcap(result)
    }
   
   

    useEffect(()=>{
        makecaptcha(5)
    },[])
    const handlesubmit=()=>{
        if(cap===checkcap){
            alert("Signup Successfull")
            setcapcheck("")
        }else{
            alert("Invalid captcha")
            setcapcheck("")
        }
    }
  return (
    <div style={{marginTop:'100px'}}>
    <div style={{width:'30%',margin:"auto"}}> 
    <input placeholder="Name" style={{display: 'block', marginBottom: '10px',width:'200px'}} />
        <input placeholder="Email" style={{display: 'block', marginBottom: '10px',width:'200px'}}/>
        <input placeholder="Password" style={{display: 'block', marginBottom: '10px',width:'200px'}}/>
        <button style={{display:"block"}}>{cap}</button>
        <input style={{marginRight:'115px',width:'200px'}} type="text" placeholder="Entercaptcha" value={checkcap} onChange={(e)=>setcapcheck(e.target.value)}/>
        <button onClick={handlesubmit} className='button'>Submit</button>
       
    </div>
    </div>
  )
}

export default SignUpForm