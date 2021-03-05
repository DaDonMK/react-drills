import React, {Component} from 'react';
import './App.css';
import Todo from './Todo'

class App extends Component {

  constructor(){
    super()

    this.state={
      tasks: [],
      input : ''
    } 
  }

  inputVal(val){
    this.setState({input: val})
  }

  printtoDom(inp){
    this.setState({tasks : [...this.state.tasks, ' ',inp]})
  }

  render(){
    let show = this.state.tasks.map(function(element, index){
     return  <Todo display={element}/>
    })
  return (
    <div className="App">
      <input onChange={(event) => this.inputVal(event.target.value)}></input>
      <button onClick={() => this.printtoDom(this.state.input)}>Click</button>
      {show}
    </div>
  );
  }
}

export default App;
