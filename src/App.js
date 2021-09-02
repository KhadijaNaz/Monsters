import logo from './logo.svg';
import React, {Component} from 'react';
import { CardList } from './Component/CardList/CardList.Component'
import { CardList2 } from './Component/CardList/cardlist2'
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
        <CardList name="Monster1">
          <h1>Monsters Children1</h1>
          <h1>Monsters Children1</h1>
          <h1>Monsters Children1</h1>
          <h1>Monsters Children1</h1>
        </CardList>
        <CardList2 name="Monster2">
          <h1>Monsters Children2</h1>
          <h1>Monsters Children2</h1>
          <h1>Monsters Children2</h1>
          <h1>Monsters Children2</h1>
        </CardList2>
           {this.state.monsters.map(monster =>(<h1 key= { monster.id}> {monster.name}</h1>))}

    </div>
    
    )
  }
};
export default App;
