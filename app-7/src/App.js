import React, {Component} from 'react';
import './App.css';
import NewTasks from './NewTasks'
import Display from './Display'

class App extends Component {
  constructor(){
    super()
    
    this.state={
      tasks: [],
      
    }
     this.addToInput = this.addToInput.bind(this)
  }

  addToInput(val){
    this.setState({tasks: [...this.state.tasks, val]})
    
  }

  // addtoList(inp){
  //   this.setState({tasks: [...this.state.tasks, ' ',inp]})

  // }

  render(){
    
  return (
    <div className="App">
      <h1>LISTS</h1>
      <NewTasks sentdown={this.addToInput} />
      <Display displaydown={this.state.tasks}/>
    </div>   
  );
  }
}

export default App;
