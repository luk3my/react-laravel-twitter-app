import React, { Component } from 'react';
import Axios from 'axios';
import './App.css';

class App extends Component {
  
constructor(props) {
  super(props)
  
  // state
  this.state = {
    users: []
  }
}

componentWillMount() {

  Axios(`https://api.randomuser.me/?nat=US&results=5`)
  .then(response => this.setState({
    users: response.data.results
   })
  );
 }

  render(){

    return <div className='app'>
      {this.state.users.map(user => <div key={user.id.value}>{user.cell}</div>)}
      </div>;
  }
};

export default App;
