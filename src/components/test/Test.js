import React, { Component } from "react";

class Test extends Component {
  state = {
    title: "",
    completed: ""
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then(response => response.json())
      .then(data =>
        this.setState({
          title: data.title,
          completed: data.completed ? "True" : "False"
        })
      );
  }

  render() {
    const { title, completed } = this.state;
    return (
      <div>
        <h1>Test Component</h1>
        <p>{title}</p>
        <p>{completed}</p>
      </div>
    );
  }
}

export default Test;
