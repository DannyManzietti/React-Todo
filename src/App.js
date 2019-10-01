import React from "react";
import TodoForm from "./components/TodoComponents/TodoForm";
import Todo from "./components/TodoComponents/Todo";
import TodoList from "./components/TodoComponents/TodoList";

import { Button } from "reactstrap";

const todoList = [{}];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoList,
    };
  }

  toggleItem = id => {
    console.log(id);
    this.setState({
      todoList: this.state.todoList.map(item => {
        if (item.id === id) {
          return {
            ...item,
            finished: !item.finished,
          };
        } else {
          return item;
        }
      }),
    });
  };

  addItem = itemName => {
    const newItem = {
      name: itemName,
      id: Date.now(),
      finished: false,
    };
    this.setState({
      todoList: [...this.state.todoList, newItem],
    });
  };

  clearPurchased = () => {
    this.setState({
      todoList: this.state.todoList.filter(item => !item.finished),
    });
  };

  render() {
    return (
      <div>
        <h2>To-Do!</h2>
        <TodoForm addItem={this.addItem} />

        <TodoList
          todoList={this.state.todoList}
          toggleItem={this.toggleItem}
          clearPurchased={this.clearPurchased}
        />
      </div>
    );
  }
}

export default App;
