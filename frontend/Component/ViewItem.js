import React, { Component } from "react";
import axios from "axios";
import {useLocation, useMatch, useNavigate, withRouter} from 'react-router-dom'

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
  onDelete = (id) => {
    axios.delete(`http://localhost:3000/Items/itemdelete/${id}`).then((res) => {
      alert("Delete Successfully");
      this.retrivePosts();
    });
  };
  

  render() {
    return (
      <div >
        <br />
        <center>
        <table
          className="table"
          style={{ background: "Gray", width: "1200px", color:"white"}}
        >
          <thead>
            <tr>
              <th scope="col"> Item ID</th>
              <th scope="col"> Name</th>
              <th scope="col">Quentity</th>
              <th scope="col">Price</th>
              <th scope="col">Type</th>
             
            </tr>
          </thead>
          <tbody>
            {this.state.Items.map((Items, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{Items.id}</td>
                <td>{Items.name}</td>
                <td>{Items.quentity}</td>
                <td>{Items.price}</td>
                <td>{Items.type}</td>
                <button
                    type="button"
                    className="btn btn-warning"
                    onClick={() => this.onDelete(Items.id)}
                  > Delete</button>

                 <button
                    type="button"
                    className="btn btn-warning"
                    onClick={()=>{navigate('/updateitem')}}
                  > Update</button>


                
              </tr>
            ))}
          </tbody>
        </table>
        </center>
      </div>
    );
  }
}
