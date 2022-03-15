import './App.css';
import React from 'react';

const example = {
  1:{
  "prompt":"do u buy azuki",
  "option1": "yes",
  "option2": "no",
  1:3,
  2:2
  },
  2:{
    "prompt":"u cry cause floor rises",
    "option1":"option1 (2)",
    "option2":"option2 (2)"
  },
  3:{
    "prompt":"nice u bought azuki u made big money",
    "option1": "option 1 nice",
    "option2": "option 2 nice",
  }
}
   
class Buttan extends React.Component {
  constructor(props){
    super(props);

    this.state ={ 
      story: example, 
      CurIndex:1
    }

    this.upDate = this.upDate.bind(this);
  }

  upDate(num){
    console.log("function got runned selectedNum was "+ num);
    let newIndex = this.state.story[this.state.CurIndex][num];
    //alert(newIndex);
    console.log("new Index is "+ newIndex);
    this.setState({
      CurIndex: newIndex
    });

    console.log("new value is "+this.state.CurIndex)
  }

  render() {

    return (
        <div>
            <p>{this.state.story[this.state.CurIndex]["prompt"]}</p>
            <button onClick={this.upDate(1)} > {this.state.story[this.state.CurIndex]["option1"]}</button>
            <button onClick={this.upDate(2
              )} > {this.state.story[this.state.CurIndex]["option2"]}</button>
        </div>
    )
  }
}

export default Buttan;