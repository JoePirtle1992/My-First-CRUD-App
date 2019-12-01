import React, { Component } from "react";
import axios from "axios";
import ErrorPage from "./ErrorPage";
import { Redirect } from "react-router-dom";

class UpdateItem extends Component {
  constructor(props, { match }) {
    super();
    this.state = {
      name: "",
      album: "",
      song: "",
      year: "",
      imageLink: "",
      goBack: false
    };
  }

  componentDidMount() {
    axios
      .get(`http://localhost:4000/v1/mazzystar/${this.props.match.params.id}`)
      .then(res => {
        this.setState({
          name: res.data.data.name,
          album: res.data.data.album,
          song: res.data.data.song,
          year: res.data.data.year,
          imageLink: res.data.data.imageLink
        });
        console.log(this.state);
      });
  }

  changeSomething = e => {
    e.preventDefault();
    axios
      .put(`http://localhost:4000/v1/mazzystar/${this.props.match.params.id}`, {
        name: this.state.name,
        album: this.state.album,
        song: this.state.song,
        year: this.state.year,
        imageLink: this.state.imageLink
      })
      .then(res => {
        this.setState({ goBack: true });
        console.log(res.data);
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
  getImageLink = e => {
    this.setState({ imageLink: e.target.value });
    console.log(this.state);
  };
  render() {
    if (this.state.goBack === false) {
      return (
        <div>
          <h1>United States Of America</h1>
          <form onSubmit={this.changeSomething}>
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
            <h1>ImageLink: </h1>
            <input
              type="text"
              name="imageLink"
              onChange={this.getImageLink}
              id=""
            ></input>
            <button>Add It!</button>
          </form>
        </div>
      );
    } else {
      return <Redirect to="/" />;
    }
  }
}
export default UpdateItem;
