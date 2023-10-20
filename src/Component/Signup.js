import { useState } from 'react'

export default function Signup() {


  const [name, setName]=useState("")
  const [city,setCity]=useState("")
 const [contact,setContact]=useState("")
const [email,setEmail]=useState("")

const getUserData=()=>{
   console.log(name,email,contact,city)
}
  return (
    <div className='Signup'>
      <h3>Sign Up</h3>
      <hr></hr>
      <div className='input'>
      <label> Enter your Name:</label><br></br>
      Name:<input type='text' onChange={(e)=>setName(e.target.value)}></input><br></br><br></br>
     
      <label>City:</label><br></br>
     City: <input type='text' onChange={(e)=>setCity(e.target.value)}></input><br></br><br></br>
    
      <label>Contact:</label><br></br>
      contact: <input type='number' onChange={(e)=>setContact(e.target.value)} ></input><br></br><br></br>
     
        <label>Email:</label><br></br>
      Email: <input type='email' required placeholder='Enter your Email' onChange={(e)=>setEmail(e.target.value)}></input><br></br><br></br>
      <label>Password:</label><br></br>
      <input type='password' required placeholder='Enter your Password'></input><br></br><br></br>
     <button>Submit</button>
     <h1>{name}</h1>
     <h1>{city}</h1>
     <h1>{contact}</h1>
     <h1>{email}</h1>
    <button onClick={getUserData}>Get DAta</button>
  
      
      </div>
 </div>
       
  
   
  )
}



