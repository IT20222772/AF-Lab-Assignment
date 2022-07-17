import React,{useState, useEffect} from "react";
import axios from "axios";

function AddCart(){

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quentity, setQuentity] = useState("");
  
  const [carts, setCarts] = useState([]);

   

  function passData(){
    
    const newCart = {

      name,
      price,
      quentity
    }
   
    axios.post("http://localhost:3000/addcart", newCart).then(()=>{
         alert("Added to Cart")
    }).catch((err)=>{
         alert(err)
    });
  }


    return(
        <div>
           
            <br/>
            <center>
             <form>
              
              <h2>Add To Cart</h2>
              
             
              <label > Name :</label> 
              <input type="text" id="name" 
                   onChange={(e)=>{
                       setName(e.target.value);
              }} />
              <br/>
              <br/>

           
              <label >One Item price :</label> 
              <input type="text"  id="price" 
                   onChange={(e)=>{
                       setPrice(e.target.value);
              }} />
             <br/>
             <br/>

           
              <label >quentity :</label>  
              <input type="text"  id="quentity" 
                   onChange={(e)=>{
                       setQuentity(e.target.value);
              }} />
            <br/>
            <br/>

            
           <br/>
            <button>Add to Cart</button>
             </form>
             </center>
          <br/>

        </div>
    )
}

export default AddCart;