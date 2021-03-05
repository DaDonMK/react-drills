import React, {Component} from 'react';

export default class Display extends Component{

    render(){
        let list = this.props.displaydown.map((element) => {
            return <h3>{element}</h3>;
          });
        return( 
            <h3>{list}</h3>
        )
    }
}