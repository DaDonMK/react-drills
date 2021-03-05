import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  // constructor() {
  //   super();

  //   this.state = {
  //     filterString: "",
  //     foods: ["spaghetti", "ice cream", "sushi", "bologna", "cheese"]
  //   };
  // }

  // handleChange(filter) {
  //   this.setState({ filterString: filter });
  // }

  // render() {
  //   let foodsToDisplay = this.state.foods.filter((element, index) => {
  //       return element.includes(this.state.filterString);
  //     }).map((element, index) => {
  //       return <h2 key={index}>{element}</h2>;
  //     });

  //   return (
  //     <div className="App">
  //       <input onChange={e => this.handleChange(e.target.value)} type="text" />
  //       {foodsToDisplay}
  //     </div>
  //   );
  // }

  constructor(){
    super()

    this.state = {
      message: ['Red', 'Fred', 'Lead', 'Blue', 'Clue', 'Loose'],
      message2: ['Red', 'Fred', 'Lead', 'Blue', 'Clue', 'Loose']
    }
  }

  filterTerms(val){
    let terms = this.state.message
    let arr = []
    for(var i = 0; i < terms.length; i++){
      if(terms[i].includes(val)){
        arr.push(terms[i])      
      }
    }
    this.setState({message : arr})

  }

  render(){
    let original = this.state.message2
    
      let toDisplay = this.state.message.map((elements, index) => {
      return <h2>{elements}</h2>
    })
  return (
    <div className="App">
      <input className ='array' onChange={(event) => this.filterTerms(event.target.value)}></input>
      <div>{toDisplay}</div>
    </div>
  );
  }
}

export default App;
