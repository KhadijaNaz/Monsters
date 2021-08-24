import logo from './logo.svg';
import React, {Component} from 'react';
import './App.css';
import { react } from '@babel/types';
 
class App extends Component{
  constructor(){
    super();
 this.state={ 
   string: 'Hello I am a Monster'
 };
  }
  render(){
    return(
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        {this.state.string}
        </p>
        <button onClick={()=>this.setState({string:'hello Monster'})}>
          show detail
          </button>
      </header>
    </div>
    )
  }
};
export default App;
