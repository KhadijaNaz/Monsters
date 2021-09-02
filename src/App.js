import logo from './logo.svg';
import React, {Component} from 'react';
import { CardList } from './Component/CardList/CardList.Component'
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
        <CardList monsters={this.state.monsters}/>
       

    </div>
    
    )
  }
};
export default App;
