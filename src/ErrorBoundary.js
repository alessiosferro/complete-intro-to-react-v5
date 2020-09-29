import React, { Component } from 'react';
import { Link, navigate, Redirect } from '@reach/router';

class ErrorBoundary extends Component {
  state = {
    hasError: false,
    redirect: false,
  };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error', error, errorInfo);
  }

  componentDidUpdate() {
    if (this.state.hasError) {
      setTimeout(() => navigate('/'), 5000);
    }
  }

  render() {
    if (!this.state.hasError) {
      return this.props.children;
    }

    return (
      <h1>
        There was an error with this listing. <Link to="/">Click here</Link> to
        go back to the home page or wait five seconds.
      </h1>
    );
  }
}

export default ErrorBoundary;
