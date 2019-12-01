import React, { Component } from "react";
import { Link } from 'react-router-dom'

class ErrorPage extends Component {
  render() {
    return (
      <div className="goof">
        <h1>You Done Goofed!</h1>
        <Link to="/" className="baby">
        Go Home Roger?
        </Link>
      </div>
    );
  }
}
export default ErrorPage;
