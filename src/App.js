import React, { Component } from "react";
import Axios from "axios";
import Loading from "./loading";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    // state
    this.state = {
      users: [],
      loading: false
    };
    //bind function
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getUsers() {
    this.setState({
      loading: true
    });
    Axios(`https://api.randomuser.me/?nat=US&results=5`).then(response =>
      this.setState({
        users: [...this.state.users, ...response.data.results],
        loading: false
      })
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    this.getUsers();
  }

  componentWillMount() {
    this.getUsers();
  }

  render() {
    const { loading, users } = this.state;
    return (
      <div className="app" style={{marginLeft: '10px'}}>
        <form onSubmit={this.handleSubmit}>
          <input type="submit" value="load users" />
        </form>
        {!loading ? (
          users.map(user => (
            <div key={user.id.value}>
              <h3 style={{ color: "red" }}>{user.name.first}</h3>
              <p>{user.email}</p>
              <hr />
            </div>
          ))
        ) : (
          <Loading message="Loading" />
        )}
      </div>
    );
  }
}

export default App;
