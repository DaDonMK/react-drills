import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()

    this.state = {
      message :['Array', 'LinkedList', 'Heaps', ' All with Love', 'I Hope...']
    }
  }


  render(){
    let todisplay = this.state.message.map((element, index) =>{
      return <h2>{element}</h2>
    })
  return (
    // <div className="App">
      /* <h2>{this.state.message[0]}</h2>
      <h2>{this.state.message[1]}</h2>
      <h2>{this.state.message[2]}</h2>
      <h2>{this.state.message[3]}</h2>
      <h2>{this.state.message[4]}</h2> */

    <div className="App">{todisplay}</div>
  );
  }
}

export default App;
