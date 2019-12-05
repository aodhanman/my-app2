import React from 'react';
import '../App.css';
import Background from '../Assets/library.jpg';

export class Content extends React.Component {

  render() {
    return (
      <div className="App">
        <h1>{"Welcome to your Reading List!"}</h1>
        <img src={Background} alt="Background"></img>

        <h2>{new Date().toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

export default Content;