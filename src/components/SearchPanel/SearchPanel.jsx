import React from "react";
import "./SearchPanel.css";

export default class SearchPanel extends React.Component {
  state = {
    term: "",
  };

  onSeachChange = (e) => {
    const term = e.target.value;
    this.setState({ term });
    this.props.search(term);
  };

  render() {
    return (
      <input
        type="text"
        className="form-control search-input"
        placeholder="Type to search"
        onChange={this.onSeachChange}
        value={this.state.term}
      />
    );
  }
}
