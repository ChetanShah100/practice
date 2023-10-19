import { useState } from "react";


export default function Test(){
    const [userName, setUserName]=useState("Chetan")
    const [userAge,setUserAge]=useState(23)
    const [userContact,setUserContact]=useState(7440839066)
    const [userEmail,setUserEmail]=useState("chetanshah383@gmail.com")
    // const [uSerId,setUserId]=useState(a>10?"true":"false")
    const [userNumber,setUserNumber]=useState(1)

     let name="smith";
    const changeNAme=()=>{
        name="john smith"
        //  console.log(name)

        setUserName("hello chetan shah")


    }

const Incre=()=>{
   
    setUserNumber(userNumber+1)
    if(userNumber>9){
        setUserNumber(userNumber)
     }

}
const Decre=()=>{
    setUserNumber(userNumber-1)
    if(userNumber<1){
        setUserNumber(userNumber)
     }
}



    return(
       
       <>
       <h1>Hello Test</h1>
      <h1>{userName}</h1>
       <h2>{userAge}</h2>
       <h2>{userEmail}</h2>
       <h2>{userContact}</h2>
       <button onClick={changeNAme}>change</button>
       <h2>{name}</h2>     <br></br>

       <button onClick={Incre}>Increment</button>
       <span>{userNumber}</span>
       <button  onClick={Decre}>Decrement</button>
      </>

    )
}