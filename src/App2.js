import logo from './logo.svg';
import './App.css';
import React from 'react';

class Buttan extends React.Component {
  constructor(props){
    super(props);

    this.state ={cool:"not so much"}
  }

  render() {
    return (
        <div>
            <p>prompt</p>
            <button> button</button>
            <button> button 2</button>
        </div>
    )
  }
}

export default Buttan;