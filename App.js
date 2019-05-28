import React, {Component} from 'react';
import Card from './card';

var users = [
  { id : 1, name : 'chinmaya', age : 23, salary : 25000},
  { id : 2, name : 'chinu', age : 22, salary : 50000 },
  { id : 3, name : 'chini', age : 16, salary : 80000 },
  { id : 4, name : 'Cp', age : 23, salary : 120000 }
];

export default class App extends Component {
  constructor(){
    super();
    this.state={
      userList : users
    }
  }

  render(){
    return(this.state.userList.map(val => <Card key = {val.id} employee = {val}/>));
  }
}   
