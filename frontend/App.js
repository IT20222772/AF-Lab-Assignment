import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";

import Nav from "./Component/NavBar";
import AddItem from "./Component/AddItem";
import ViewItem from "./Component/ViewItem";
import CreateProfile from "./Component/CreateProfile";
import ViewProfile from "./Component/ViewProfile";
import AddPromo from "./Component/AddPromo";
import ViewPromo from "./Component/ViewPromo";
import Product from "./Component/ViewProducts";
import AddCart from "./Component/AddCart";
import List from "./Component/AddWishList";
import ListView from "./Component/ViewWishList";
import Payment from "./Component/Payment";


const App = () => {
  return (
    <>
      <Router>
        <>
          <Nav />

          <Routes>
         
            <Route path="/Payment" element={<Payment />} />
            <Route path="/createprofile" element={<CreateProfile />} />
            <Route path="/additem" element={<AddItem />} />
            <Route path="/product" element={<Product />} />
            <Route path="/profile" element={<ViewProfile />} />
            <Route path="/item" element={<ViewItem />} />
            <Route path="/promo" element={<ViewPromo  /> } />
            <Route path="/addpromo" element={<AddPromo  /> } />
            <Route path="/addcart" element={<AddCart/> } />
            <Route path="/list" element={<List/> } />
            <Route path="/listview" element={<ListView/> } />
           
           
          </Routes>
        </>
      </Router>
    </>
  );
};
export default App;
