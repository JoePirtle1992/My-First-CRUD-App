import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class MainHomePage extends Component {
  constructor(props, { match }) {
    super(props);
    this.state = {
      everyOne: [],
      searchField: "",
      filteredArray: []
    };
  }

  componentDidMount() {
    axios.get("http://localhost:4000/v1/mazzystar").then(res => {
      this.setState({ everyOne: res.data.data });
      this.setState({filteredArray: this.state.everyOne})
    });
  }

  getDaOne = e => {
    console.log("This was clicked " + e.target.innerText);
  };

  
  filterIt = (e) => {
    this.setState({ searchField: e.target.value });
    const help = this.state.everyOne.filter(folks =>
      folks.name.toLowerCase().includes(this.state.searchField.toLowerCase())
    )
    this.setState({filteredArray: help})
    if (this.state.filteredArray.length === 0){
      this.setState({filteredArray: this.state.everyOne})
    }
  };

  //react onchange one step behind (Callback Functions | Might Be The Key To Fixing that lag when you type an input in)
  
  render() {
    return (
      <div>
        <h1>Main Home Page</h1>
        <h1>Search Through This</h1>
        <Link to="/add">
          <button>Add One</button>
        </Link>
        {/* The Following will go over the filteredArray. If you don't want to use this just map over the everyOne array */}
        <input type="search" name="" id="" value={this.state.searchField} onChange={this.filterIt} />
        <div className="everyOne-master">
          {this.state.filteredArray.map(folks => (
            <div className="individual">
              <h1>{folks.name}</h1>
              <p>{folks.album}</p>
              <p>{folks.song}</p>
              <p>{folks.year}</p>
              <img className="image" src={folks.imageLink} alt="" />
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
