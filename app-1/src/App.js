import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{
  constructor(){
    super()

    this.state={
      message: ''
    }
  }

  printDom(val){
    this.setState({message: val})
  }

  render(){
  return (
    <div className='show'>
      <input className = 'to-dom' onChange={(event) => this.printDom(event.target.value)}></input>
      <p>{(this.state.message)}</p>
    </div>
  )
  }
}

export default App;
