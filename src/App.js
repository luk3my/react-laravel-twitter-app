import React, { Component } from "react";
import Axios from "axios";
import Loading from './loading';
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    // state
    this.state = {
      users: [],
      loading: false
    };
  }

  getUsers() {
    this.setState({
      loading: true
    });
    Axios(`https://api.randomuser.me/?nat=US&results=5`).then(response =>
      this.setState({
        users: response.data.results,
        loading: false
      })
    );
  }

  componentWillMount() {
    this.getUsers();
  }

  render() {
    return (
      <div className="app">
        {!this.state.loading ? (
          this.state.users.map(user => (
            <div key={user.id.value}>
              <h3>{user.name.first}</h3>
              <p>{user.email}</p>
              <hr />
            </div>
          ))
        ) : (
          <Loading />
        )}
      </div>
    );
  }
}

export default App;
