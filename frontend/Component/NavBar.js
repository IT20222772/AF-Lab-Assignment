import React from "react";
import {useLocation, useMatch, useNavigate, withRouter} from 'react-router-dom'
const Nav= (props)=>{
    const navigate=useNavigate()
     return(
        <div>
            <center>
                <br/>
           
                  
                   <button onClick={()=>{navigate('/createprofile')}} >Create profile</button>

                   <button onClick={()=>{navigate('/profile')}} >View Profile</button>

                   <button  onClick={()=>{navigate('/additem')}}> Add Item</button>

                   <button  onClick={()=>{navigate('/item')}}>View Items</button>
        
                   <button  onClick={()=>{navigate('/addpromo')}}>Add Promotion</button>

                   <button  onClick={()=>{navigate('/promo')}}>View Promotion</button>

                   <button  onClick={()=>{navigate('/addcart')}}>Add to Cart</button>
                   
                   <button onClick={()=>{navigate('/viewcart')}} >View Cart</button>

                   <button  onClick={()=>{navigate('/list')}}>Add To Wish List</button>

                   <button  onClick={()=>{navigate('/listview')}}>View Wish List</button>

                   <button  onClick={()=>{navigate('/payment')}}>Payment</button>

              
           
           </center>
        </div>
    )
}

export default Nav

