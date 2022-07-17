import React, { Component } from "react";
import axios from "axios";

export default class GetMark extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Items: [],
    };
  }

  componentDidMount() {
    this.retrivePosts();
  }

  retrivePosts() {
    axios.get("http://localhost:8000/Items/getall").then((res) => {
      if (res.data.success) {
        this.setState({
          Items: res.data.exsitingItems,
        });
        console.log(this.state.Items);
      }
    });
  }
  
  render() {
    return (
      <div >
        <br />
        <center>
        <table style={{ width: "600px", }}>
          
          <tbody>
            {this.state.Items.map((Items, index) => (
              <tr>
                 
                <th scope="row">{index + 1}.</th>
               
                <td>{Items.name}</td>
                <td>{Items.price}</td>
               <td>
                 
                <button>Add To Cart</button>
              </td>
                
              </tr>
            
            ))}
          </tbody>
          
        </table>
        </center>
      </div>
    );
  }
}
