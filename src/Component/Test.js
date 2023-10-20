import { useState } from "react";


export default function Test(){

const [userData,setUserData]=useState({
    userName : "",
    userEmail: ""
})

   const getUserData=()=>{
    console.log(userData)
   }
    return(

        <>
       Name: <input type ="text" onChange={(e)=> setUserData({...userData,userName:e.target.value})} />
       Email:<input type="email" onChange={(e)=> setUserData({...userData,userEmail:e.target.value})}/>
   <button onClick={getUserData}>get Data</button>    
   {/* <h1>{userData}</h1> */}
     </>
    )
      

    
}