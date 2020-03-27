import React from 'react';
import './App.css';
import {Link} from "react-router-dom"

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      value : 0,
      arr : ["a", "b", "c", "d"]
    }
  }

Click = ()=> {
  // this.setState({ value: 1 });
  this.setState((state) => {
      return { value : state.value + 1}  
  })
}
Minus = ()=> {
  // this.setState({ value: 1 });
  this.setState((state) => {
      return { value : state.value - 1}  
  })
}

Reset = ()=> {
  // this.setState({ value: 1 });
  this.setState((state) => {
      return { value : 0}  
  })
}

addList = () => {
  let text = prompt("Please type data to add list")
  let array = this.state.arr
  //arr : ["a", "b", "c", "d"] 
  array.push(text)
  //Add promp(text) to variable array
  this.setState({ arr: array})
  // Add array to arr
}


  render() {
    return (
      <div className="App">
        
      {this.state.value} 
      <br></br>
      <button onClick={this.Click}>Plus</button>
      <button onClick={this.Minus}>Minus</button>
      <button onClick={this.Reset}>Reset</button>
      <button onClick={this.addList}>Add List</button>
      <p>
        <ul>
          {this.state.arr.map( function (item) {
            return <li> {item} </li>
          })}
        </ul>
      </p>

      <Link to="/">My Home page</Link>
      </div>
    );
  }
  
}

export default App;
