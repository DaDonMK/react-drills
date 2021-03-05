import React, {Component} from 'react';
import './App.css';

export default class NewTasks extends Component{
    constructor(){
        super()
        
        this.state={
            input: ''
        }
      }
    
    addtoInput(val){
        this.setState({input: val})
    }
    
    addtoList(inp){

        this.props.sentdown(inp)
      }

      render(){
       
          return(
              <div>
                <input onChange={(event) => this.addtoInput(event.target.value)}></input>
                 <button onClick={() => this.addtoList(this.state.input)}>ADD</button>
                
              </div>
          )
      }


}