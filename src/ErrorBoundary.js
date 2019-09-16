// Mostly code from reactjs.org/docs/error-boundaries.html

import React, { Component } from "react";
import { Link } from "@reach/router";
import { stringify } from "querystring";

class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Error Boundary caught an error", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <h1>
          There was error with this listing. <Link to="/">Click Here</Link> to
          go back to home page or wait five seconds.
        </h1>
      );
    }

    //return JSON.stringify(this.props);
    return this.props.children;
  }
}

export default ErrorBoundary;
