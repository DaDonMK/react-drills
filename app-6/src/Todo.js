import React, {Component} from 'react';
import './App.css';

export default class Todo extends Component{

    constructor(){
        super()
    }
   
    render(){
        return (
            <div>
                <h3>{this.props.display}</h3>
            </div>
            
        )
    }
}