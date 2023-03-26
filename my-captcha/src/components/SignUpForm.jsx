import React from 'react'
import {useState,useEffect} from "react"
import "./Signup.css"

function SignUpForm() {
    const [cap,setcap]=useState("")
    const [checkcap,setcapcheck]=useState("")
    const [name,setname]=useState("")
    const [email,setemail]=useState("")
    const [password,setpassword]=useState("")
    


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
    const handlesubmit=(e)=>{
       
       
    
        if (!name || !email || !password) {
        
          alert('Please fill in all required fields.');
          return;
        }
        if(cap===checkcap){
            alert("Signup Successfull")
            setcapcheck("")
            setemail("")
            setpassword("")
            setname("")
        }else{
            alert("Invalid captcha")
            setcapcheck("")
            setemail("")
            setpassword("")
            setname("")
        }
    }
  return (
    <div style={{marginTop:'100px'}}>
    <div style={{width:'30%',margin:"auto"}}> 
    <input placeholder="Name" value={name} onChange={(e)=>setname(e.target.value)} style={{display: 'block', marginBottom: '10px',width:'200px'}} />
        <input required placeholder="Email" value={email} onChange={(e)=>setemail(e.target.value)} style={{display: 'block', marginBottom: '10px',width:'200px'}}/>
        <input value={password} placeholder="Password"  onChange={(e)=>setpassword(e.target.value)} style={{display: 'block', marginBottom: '10px',width:'200px'}}/>
        <button style={{display:"block"}}>{cap}</button>
        <input style={{marginRight:'115px',width:'200px'}} type="text" placeholder="Entercaptcha" value={checkcap} onChange={(e)=>setcapcheck(e.target.value)}/>
        <button type="submit" onClick={handlesubmit} className='button'>Submit</button>
       
    </div>
    </div>
  )
}

export default SignUpForm