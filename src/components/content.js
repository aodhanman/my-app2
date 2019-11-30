import React from 'react';
import '../App.css';

export class Content extends React.Component {

  render() {
    return (
      <div className="App">
        <h1>Content</h1>
        <h2>{new Date().toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

export default Content;