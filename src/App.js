import logo from './logo.svg';
import React, {Component} from 'react';
import './App.css';
import { react } from '@babel/types';
 
class App extends Component{
  constructor(){
    super();
 this.state={ 
  monsters: [
    {
      name: 'Frankestein',
      id: 'arp1'
    },
    {
      name: 'Dracula',
      id: 'db2a'
    },
    {
      name: 'zoombie',
      id: 'yuef3'
    }
  ]
 };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(user=>console.log(user))
    .then(email=>console.log(email));
    
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
