import React, { Component } from "react";
import axios from "axios";

export default class Promo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      promotion: [],
    };
  }

  componentDidMount() {
    this.retrivePosts();
  }

  retrivePosts() {
    axios.get("http://localhost:8000/promo/getpromo").then((res) => {
      if (res.data.success) {
        this.setState({
          promo: res.data.exsitingpromo,
        });
        console.log(this.state.promo);
      }
    });
  }
 


  render() {
    return (
      <div >
        <br />
        <center>
            <h2>Promotions</h2>
        <table>
          
          <body>
            {this.state.promotion.map((promo, index) => (
              <tr>
                <th scope="row"><h1>{index + 1}</h1></th>
               
                <td>Product : {promo.name}</td>
                <td>Price : Rs.{promo.price}</td>
                 <td>Discount : {promo.discount}%</td>
                <td>Discount Price : Rs.{promo.price-promo.price*(promo.discount/100)}</td>
                <br/>
              </tr>
             
            ))}
          </body>
        </table>
        <br/>
        </center>
      </div>
    );
  }
}
