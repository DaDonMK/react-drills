import React, {Component} from 'react';
import './App.css';

class Login extends Component{
    constructor(){
        super()

        this.state={
            outputuser: '',
            outputpass: '',
            login : '',
            password: ''
        }

    }

    InputLog(val){
        this.setState({login: val})
    }

    InputPass(val){
        this.setState({password: val})
    }

    ShowEverything(log, pass){
        this.setState({outputuser : log})
        this.setState({outputpass: pass})
    }

    render(){

        return(
            <div className ='main'>
                <input className ='login' onChange={(event) => this.InputLog(event.target.value)}></input>
                <input className = 'pass' onChange={(event) => this.InputPass(event.target.value)}></input>
                <button className = 'button' onClick={() => this.ShowEverything(this.state.login, this.state.password)}>Click</button>
                <h1>{this.state.outputuser}</h1>
                <h1>{this.state.outputpass}</h1>
            </div>
        )

    }

}
export default Login