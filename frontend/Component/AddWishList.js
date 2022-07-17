import React,{useState, useEffect} from "react";
import axios from "axios";

function AddWishList(){

  const [name, setName] = useState("");
  const [quentity, setQuentity] = useState("");
  

  function passData(){
    
    const newCart = {

      name,
      quentity
    }
   
    axios.post("http://localhost:8000/list", newCart).then(()=>{
         alert("Added to wishlist")
    }).catch((err)=>{
         alert(err)
    });
  }


    return(
        <div>
           
            <br/>
            <center>
             <form>
                 
              <h2>Add To Wish List</h2>
              
            
              <label  > Name :</label>  
              <input type="text"  id="name" 
                   onChange={(e)=>{
                       setName(e.target.value);
              }} />
            <br/>
            <br/>

          
           <br/>
            <button>Add to Wish List</button>
             </form>
             </center>
          <br/>

        
    
        </div>
    )
}

export default AddWishList;