import React,{useState} from "react";
import axios from "axios";

function AddPromo(){

 
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");
  

  function passData(){
    
    const newItem = {

      name,
      price,
      discount
      
    }
   
    axios.post("http://localhost:8000/promo/savepromo", newItem).then(()=>{
         alert( "Promotion added")
    }).catch((err)=>{
         alert(err)
    });
  }


    return(
        <div>
           
            <br/>
            <center>
             <form>
                 
              <h2>Create Promotion</h2>
            
              <label >Enter Item Name :</label>
              <input type="text"  id="name" 
                   onChange={(e)=>{
                       setName(e.target.value);
              }} />
            <br/>
            <br/>

          
              <label>Enter price :</label>  
              <input type="text"  id="price" 
                   onChange={(e)=>{
                       setPrice(e.target.value);
              }} />
            <br/>
            <br/>

          
              <label >Enter discount :</label>
              <input type="text"  id="discount" 
                   onChange={(e)=>{
                       setDiscount(e.target.value);
              }} />
           <br/>
           <br/>

            
           <br/>
            <button >Create Promotion</button>
             </form>
             </center>
          <br/>
        </div>
    )
}

export default AddPromo;