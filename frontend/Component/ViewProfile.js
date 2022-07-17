import React, { Component } from "react";
import axios from "axios";

export default class GetMark extends Component {
  constructor(props) {
    super(props);

    this.state = {
      profile: [],
    };
  }

  componentDidMount() {
    this.retrivePosts();
  }

  retrivePosts() {
    axios.get("http://localhost:8000/profile/getall").then((res) => {
      if (res.data.success) {
        this.setState({
          profile: res.data.exsitingprofile,
        });
        console.log(this.state.profile);
      }
    });
  }
 


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
              <th scope="col"> Name</th>
              <th scope="col">Age</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">Address</th>
              
             
            </tr>
          </thead>
          <tbody>
            {this.state.profile.map((profile, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
               
                <td>{profile.name}</td>
                <td>{profile.age}</td>
                <td>{profile.phonenum}</td>
                <td>{profile.address}</td>
                
             
              </tr>
            ))}
          </tbody>
        </table>
        </center>
      </div>
    );
  }
}
