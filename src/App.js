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
  .then((response) => {
    const { advice } = response.data.slip;
    this.setState({ advice })
  })
  .catch((error) => {
    console.log(error)
  })
}  

  render() {
    const { advice } = this.state;
    return <h1>{advice}</h1>;
  }
}

export default App;
