import React from 'react';
import './App.css';


class App extends React.Component {
constructor(){
super();
this.state = {
  value : 0,
  arr : ["a", "b", "c","d"],
  text: ""
}
this.addList = this.addList.bind(this)
}
Click = e =>{
 
  this.setState({value : this.state.value+1 })
}
Minus = ()=> {
  this.setState({value : this.state.value -1})
}
reset = ()=> {
  this.setState({value : 0})
}
addList =  (e) => {
  e.preventDefault()
 let array = [...this.state.arr, this.state.text]
 this.setState({arr : array, text: ""})
 
 
 console.log(this.state.text)
}
input = (e) => {
 
  this.setState({text: e.target.value})
  console.log(this.state.text)
}
  render(){
    return (
    <div className="App">
     {this.state.value}
     <p>
    <button onClick={this.Click}>Plus</button>
     <button onClick={this.Minus}> Minus</button>
     <button onClick={this.reset}> reset </button> 
     
     </p>
<p> 
  <form>
  <input type="text" onChange={this.input} value={this.state.text}></input>
  <button onClick={this.addList}> add list </button> 
  {/* <input type="text" value="oioi"></input> */}
  </form>
  </p>
     <ul>
    {this.state.arr.map( function(item){
      return <li> {item} </li>
    })}
     </ul>
    </div>
  );
  }
  
}
export default App;