import "./App.css";
import React, { ReactDOM } from "react";
import "./App.css";
import "axios"; 
import axios from "axios";

class App extends React.Component {
  state = {
    advice: "",
  };

componentDidMount() {                      //method is a function that belongs to a class
  this.fetchAdvice();
}

fetchAdvice = () => {
  axios.get('http://api.adviceslip.com/advice')
  .then(() => {
    console.log("response")
  })
  .catch(() => {
    console.log("error")
  })
}  

  render() {
    return <h1>APP</h1>;
  }
}

export default App;
