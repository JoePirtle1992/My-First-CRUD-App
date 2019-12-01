import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

class AddItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addIt: [],
      name: "",
      album: "",
      song: "",
      year: "",
      imageLink: "",
      goBack: false
    };
  }
  addSomething = e => {
    // This Event Prevent Default is SUPER IMPORANT (OTHERWISE YOU WONT REDIRECT)
    e.preventDefault();
    axios
      .post(`http://localhost:4000/v1/mazzystar`, {
        name: this.state.name,
        album: this.state.album,
        song: this.state.song,
        year: this.state.year,
        imageLink: this.state.imageLink
      })
      .then(res => {
        this.setState({ goBack: true });
        console.log("Sent!");
      })
      .catch(err => {
        console.log("Something is missing " + err);
      });
  };

  getName = e => {
    this.setState({ name: e.target.value });
  };
  getAlbum = e => {
    this.setState({ album: e.target.value });
  };
  getSong = e => {
    this.setState({ song: e.target.value });
  };
  getYear = e => {
    this.setState({ year: e.target.value });
    console.log(this.state);
  };
  getimageLink = e => {
    this.setState({ imageLink: e.target.value });
    console.log(this.state);
  };

  render() {
    if (this.state.goBack === false) {
      return (
        <div>
          <h1>Add Item</h1>
          <form onSubmit={this.addSomething}>
            <h1>Name: </h1>
            <input
              type="text"
              name="name"
              id=""
              onChange={this.getName}
            ></input>
            <h1>Album: </h1>
            <input
              type="text"
              name="album"
              onChange={this.getAlbum}
              id=""
            ></input>
            <h1>Song: </h1>
            <input
              type="text"
              name="song"
              onChange={this.getSong}
              id=""
            ></input>
            <h1>Year: </h1>
            <input
              type="text"
              name="year"
              onChange={this.getYear}
              id=""
            ></input>
            <h1>Image Link: </h1>
            <input
              type="text"
              name="year"
              onChange={this.getimageLink}
              id=""
            ></input>
            <button>Add It!</button>
          </form>
          <Link to="/">Go Back</Link>
        </div>
      );
    } else {
      return <Redirect to="./" />;
    }
  }
}

export default AddItem;
