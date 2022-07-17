import React,{useState} from "react";
import axios from "axios";

function AddItem(){

  const [name, setName] = useState("");
  const [quentity, setQuentity] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState("");
  

  function passData(){
    
    const newItem = {

      name,
      quentity,
      price,
      type
    }
   
    axios.post("http://localhost:8000/Items/save", newItem).then(()=>{
         alert("Item added")
    }).catch((err)=>{
         alert(err)
    });
  }


    return(
        <div>
           
            <br/>
            <center>

                 
              <h2>Add Item</h2>
              
              <form>
              <label>Enter Item Name :</label>
              <input type="text"  id="name" 
                   onChange={(e)=>{
                       setName(e.target.value);
              }} />
            <br/>
            <br/>

          
              <label>Enter Quentity of Item :</label>
              <input type="text"  id="quentity" 
                   onChange={(e)=>{
                       setQuentity(e.target.value);
              }} />
          <br/>
          <br/>

            
              <label>Enter Price of Item :</label>
              <input type="text"  id="price" 
                   onChange={(e)=>{
                       setPrice(e.target.value);
              }} />
          <br/>
          <br/>

           
              <label  >Enter Item Type :</label>
              <input type="text"  id="type" 
                   onChange={(e)=>{
                       setType(e.target.value);
              }} />
           
           <br/>
           <br/>
            <button>Add Item</button>
             </form>
             </center>
          <br/>
        </div>
    )
}

export default AddItem;