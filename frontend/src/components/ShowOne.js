import React, { Component } from "react";
import axios from "axios";
import ErrorPage from "./ErrorPage";
import {Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom'

class ShowOne extends Component {
  constructor(props, { match }) {
    super(props);
    this.state = {
      purpleHaze: [],
      errorCheck: false
    };
  }

  async componentDidMount() {
    await axios
      .get(`http://localhost:4000/v1/mazzystar/${this.props.match.params.id}`)
      .then(res => {
        this.setState({ purpleHaze: [res.data.data] });
        console.log(this.state.purpleHaze);
      })
      .catch(err => {
        const theError = JSON.stringify(err.response.data);
        console.log("Alas...an error!" + theError);
        this.setState({ errorCheck: true });
        console.log(this.state.errorCheck);
      });
  }

  deletionHell = e => {
    e.preventDefault();
    axios
      .delete(`http://localhost:4000/v1/mazzystar/${e.target.value}`)
      .then(res=> {
        console.log(`TERMINATED ${e.target.value}`)}
        )
      .catch(err => {
        // const theError = JSON.stringify(err.response.data);
        console.log("Its gone man!");
        this.setState({ errorCheck: true });
      });
  };

  seeDaValue = e => {
    console.log(e.target.value);
  };

  render() {
    if (this.state.errorCheck === false) {
      return (
        <div>
          {this.state.purpleHaze.map(individual => (
            <div className="son">
              <h1>{individual._id}</h1>
              <h1>{individual.album}</h1>
              <h1>{individual.song}</h1>
              <h1>{individual.year}</h1>
              <img className="image" src={individual.imageLink} alt=""/>
              <button onClick={this.deletionHell} value={individual._id}>
                Delete It
              </button>
              <Link to={`/update/${individual._id}`} >
              Update Me
              </Link>
            </div>
          ))}
        </div>
      )
    } 
    
    else {
        return (
            //This will redirect you to the home page
            <Redirect to="/error"/>

            // This would just put the error there
            // <ErrorPage/>;
        )
    }
  }
}
export default ShowOne;
