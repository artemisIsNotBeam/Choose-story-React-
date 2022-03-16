import './App.css';
import React from 'react';

const example = {
  1:{
    "prompt":"do u buy azuki",
    "option1": "yes",
    "option2": "no",
    // option 1 will lead to 3
    1:3,
    // option 2 will lead to 2
    2:2
  },
  2:{
    "prompt":"u cry cause floor rises",
    "option1":"option1 (2)",
    "option2":"option2 (2)",
    1:"done",
    2:"done"
  },
  3:{
    "prompt":"nice u bought azuki u made big money",
    "option1": "option 1 nice",
    "option2": "option 2 nice",
    1:"done",
    2:"done"

  }
}

let CurIndex = 1;
let newIndex = 0;  

class Buttan extends React.Component {
  
  constructor(props){
    super(props);
    this.upDate = this.upDate.bind(this);
    this.restart = this.restart.bind(this);
  }
  
  restart(){
    newIndex=1;
    CurIndex = 1;

    const prompt = document.getElementById("prompt");
    const button1 = document.getElementById("button1");
    const button2 = document.getElementById("button2");
    //update
    prompt.innerHTML = example[newIndex]["prompt"];
    button1.innerHTML = example[newIndex]["option1"];
    button2.innerHTML = example[newIndex]["option2"];
  }

  upDate(num,Index){
    console.log("----")
    console.log("function got runned selectedNum was "+ num);
    console.log("function gor  unned index as "+Index);
    newIndex = example[Index][num];
    //find the new Index or where our new messages will be.
    if(example[Index][1] ==="done"){
      alert("you're done yay!!!")
    } else{
      CurIndex = newIndex;
      console.log("new Index is "+ CurIndex);
      //defining our things to update
      const prompt = document.getElementById("prompt");
      const button1 = document.getElementById("button1");
      const button2 = document.getElementById("button2");
      //update
      prompt.innerHTML = example[newIndex]["prompt"];
      button1.innerHTML = example[newIndex]["option1"];
      button2.innerHTML = example[newIndex]["option2"];
  }
  }
  
  
  render() {
    return (
      <div>
          <h1>Welcome to my choose your own adventure using react</h1>
          <p id="prompt">{example[CurIndex]["prompt"]}</p>
          <button id="button1" onClick={() =>{this.upDate(1,CurIndex)} }> {example[CurIndex]["option1"]}</button>
          <button id="button2" onClick={() =>{this.upDate(2,CurIndex)} }> {example[CurIndex]["option2"]}</button>
          <button id="third" onClick={()=>{this.restart()}}>Restart</button>
      </div>
    )
  }
}

export default Buttan;