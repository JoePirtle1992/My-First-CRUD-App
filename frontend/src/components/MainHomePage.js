import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class MainHomePage extends Component {
  constructor(props, { match }) {
    super(props);
    this.state = {
      everyOne: []
    };
  }

  componentDidMount() {
    axios.get("http://localhost:4000/v1/mazzystar").then(res => {
      this.setState({ everyOne: res.data.data });
      console.log(this.state.everyOne);
    });
  }

  getDaOne = e => {
    console.log("This was clicked " + e.target.innerText);
  };


  render() {
    return (
      <div>
        <h1>Main Home Page</h1>
        <Link to="/add">
        <button>Add One</button>
        </Link>
        <div className="everyOne-master">
          {this.state.everyOne.map(folks => (
            <div className="individual">
              <h1>{folks.name}</h1>
              <p>{folks.album}</p>
              <p>{folks.song}</p>
              <p>{folks.year}</p>
              <Link to={`one/${folks._id}`}>
                <p onClick={this.getDaOne}>{folks._id}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default MainHomePage;
