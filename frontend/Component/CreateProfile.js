import React,{useState} from "react";
import axios from "axios";

function Createprofile(){

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [phonenum, setPhone] = useState("");
  const [address, setAddress] = useState("");
  
  

  function passData(){
    
    const newItem = {

      name,
      age,
      email,
      phonenum,
      address
      
    }
   
    axios.post("http://localhost:8000/profile/create", newItem).then(()=>{
         alert("Profile Created")
    }).catch((err)=>{
         alert(err)
    });
  }


    return(
        <div>
           
            <br/>
            <center>
             <form>
                 <center>
              <h1>Create Profile</h1>
              </center>
          
              <label>Enter Your Name :</label>
              <input type="text"  id="name" 
                   onChange={(e)=>{
                       setName(e.target.value);
              }} />
             <br/>
             <br/>

        
              <label >Enter Age :</label>  
              <input type="text" id="age" 
                   onChange={(e)=>{
                       setAge(e.target.value);
              }} />
              <br/>
              <br/>

              <label>Enter Your Email Address :</label>
              <input type="text"  id="email" 
                   onChange={(e)=>{
                       setEmail(e.target.value);
              }} />
             <br/>
             <br/>

              <label >Enter Your Phone Number :</label>
              <input type="text"  id="phonenum" 
                   onChange={(e)=>{
                       setPhone(e.target.value);
              }} />
              <br/>
              <br/>

        
              <label >Enter Your Address :</label>
              <input type="text" id="address" 
                   onChange={(e)=>{
                       setAddress(e.target.value);
              }} />
             <br/>

      
           
             <br/>
             <br/>
            <button >Create Profile</button>
             </form>
             </center>
          <br/>
        </div>
    )
}

export default Createprofile;