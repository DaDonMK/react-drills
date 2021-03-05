import React, {Component} from 'react';
import './App.css';

export default class Image extends Component{

    render(){
        return(
            <img src={this.props.url}></img>

        )
    }
}