import logo from './logo.svg';
import React, {Component} from 'react';
import './App.css';
import { react } from '@babel/types';
 
class App extends Component{
  constructor(){
    super();
 this.state={ 
  monsters: []
 };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(user=>this.setState({monsters: user}));
    
  }
  render(){
    return(
      <div className="App">
           {
       this.state.monsters.map(monster =>(<h1 key= { monster.id}> {monster.name}</h1>))
     }

    </div>
    )
  }
};
export default App;
