import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AddTask from "./Componenets/AddTask";
import TaskList from "./Componenets/TaskList";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: "",
      list: [],
    };
  }

  updateInput(value) {
    this.setState({
      userInput: value,
    });
  }

  addItem() {
    if (this.state.userInput !== "") {
      const userInput = {
        id: Math.random(),
        value: this.state.userInput,
      };
      const list = [...this.state.list];
      list.push(userInput);
      this.setState({
        list,
        userInput: "",
      });
    }
  }

  deleteItem(key) {
    const list = [...this.state.list];
    const updateList = list.filter((item) => item.id !== key);
    this.setState({
      list: updateList,
    });
  }

  render() {
    return (
      <Container>
        <Row className="app-row">
          TODO LIST
        </Row>
        <hr />
        <Row>
          <Col md={{ span: 5, offset: 4 }}>
            <AddTask
              userInput={this.state.userInput}
              updateInput={(value) => this.updateInput(value)}
              addItem={() => this.addItem()}
            />
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 5, offset: 4 }}>
            <TaskList
              tasks={this.state.list}
              deleteItem={(key) => this.deleteItem(key)}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
