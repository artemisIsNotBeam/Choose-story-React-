import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state ={cool:"not so much"}
  }

  render() {
    return <h1>Welcome to my choose your own adventure using react</h1>
  }
}

export default App;