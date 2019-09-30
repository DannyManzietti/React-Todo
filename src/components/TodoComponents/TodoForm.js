import React from "react";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      todoName: "",
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  todoHandler = e => {
    // this.state.fullList.push();
    e.preventDefault();
    this.props.addItem(this.state.todoName);
  };

  render() {
    return (
      <form className="todo-form" onSubmit={this.todoHandler}>
        {/* {Here, I need to pass the user's input value up to App as props.} */}
        <input
          type="text"
          name="todoName"
          placeholder="Enter To-Do"
          value={this.todoName}
          onChange={this.handleChange}
        />

        <button>Add it!</button>
      </form>
    );
  }
}

export default TodoForm;
