import React, { Component } from "react";
import axios from "axios";

export default class GetMark extends Component {
  constructor(props) {
    super(props);

    this.state = {
      List: [],
    };
  }

  componentDidMount() {
    this.retrivePosts();
  }

  retrivePosts() {
    axios.get("http://localhost:8000/list/getall").then((res) => {
      if (res.data.success) {
        this.setState({
          List: res.data.exsitingList,
        });
        console.log(this.state.List);
      }
    });
  }
 


  render() {
    return (
      <div >
        <br />
        <center>
          <h1>Wish List</h1>
        <table
          className="table"
         style={{ background: "Gray", width: "1200px", color:"white"}}
        >
          <thead>
            <tr>
              
              <th scope="col"> Name</th>
              <th scope="col">Quentity</th>
              
             
            </tr>
          </thead>
          <tbody>
            {this.state.List.map((List, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
               
                <td>{List.name}</td>
                <td>{List.quentity}</td>
             
              </tr>
            ))}
          </tbody>
        </table>
        </center>
      </div>
    );
  }
}
