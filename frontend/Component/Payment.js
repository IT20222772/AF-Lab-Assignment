import React,{useState} from "react";
import axios from "axios";

function payment(){

  const [recite, setRecite] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [money, setMoney] = useState("");
  

  function passData(){
    
    const newItem = {

      recite,
      name,
      price,
      money
    }
   
    axios.post("http://localhost:8000/payment", newItem).then(()=>{
         alert("payment save")
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
              <h2>Payment</h2>
              </center>
              
              <label  >Enter Payment No :</label>  
              <input type="text"  id="type" 
                   onChange={(e)=>{
                       setPaymentno(e.target.value);
              }} />
            <br/>
            <br/>

             
              <label  >Enter Item Name :</label>  
              <input type="text"  id="name" 
                   onChange={(e)=>{
                       setName(e.target.value);
              }} />
           <br/>
           <br/>

           
              <label >Enter Total Price :</label>  
              <input type="text"  id="price" 
                   onChange={(e)=>{
                       setPrice(e.target.value);
              }} />
              <br/>
              <br/>

            
           <br/>
            <button >Do Payment</button>
             </form>
             </center>
          <br/>
        </div>
    )
}

export default payment;