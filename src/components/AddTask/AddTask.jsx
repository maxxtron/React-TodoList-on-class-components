import React from "react";
import "./AddTask.css";

export default class AddTask extends React.Component {
  state = {
    label: "",
  };
  inputValue = (e) => {
    this.setState({
      label: e.target.value,
    });
  };
  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTask(this.state.label);
    this.setState({
      label: "",
    });
  };

  render() {
    return (
      <form className="add-task d-flex" onSubmit={this.onSubmit}>
        <input
          type="text"
          className="form-control task-input"
          onChange={this.inputValue}
          placeholder="Type a new task"
          value={this.state.label}
        />
        <button className="btn btn-outline-secondary btn-task" type="submit">
          <i className="fas fa-plus" />
        </button>
      </form>
    );
  }
}
