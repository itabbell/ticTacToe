import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { increment as test, decrement } from './actions';
import { connect } from 'react-redux';

class App extends Component {

  constructor() {
    super();
    this.increment = this.increment.bind(this);
    this.subtract = this.subtract.bind(this);
  }

  increment() {
    this.props.dispatch(test(2));
  }

  subtract() {
    this.props.dispatch(decrement(1));
  }

  render() {
    return (
      <div className="App">
        <p>
        {this.props.number}
        </p>
        <button onClick={this.increment}>
          Increment
        </button>
        <button onClick={this.subtract}>
          Decrement
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  number: state.number
});

export default connect(mapStateToProps)(App);
