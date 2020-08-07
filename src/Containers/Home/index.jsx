import React, { Component } from "react";

import AddTodoList from "../../Components/AddTodoForm";
import List from "../../Components/List";

class Home extends Component {
  state = {
  };
  componentDidMount() {
  }
  
  render() {
    return (
      <React.Fragment>
        <AddTodoList />
        <List />
      </React.Fragment>
    );
  }
}


export default Home;
