import React from "react";

export default class ItemStatusFilter extends React.Component {
  buttons = [
    {
      name: "all",
      label: "All",
      id: 1,
    },
    {
      name: "active",
      label: "Active",
      id: 2,
    },
    {
      name: "done",
      label: "Done",
      id: 3,
    },
  ];

  render() {
    const { filter, onFilterChange } = this.props;
    const buttons = this.buttons.map(({ name, label, id }) => {
      const isActive = filter === name;
      const clazz = isActive ? "btn-info" : "btn-outline-secondary";
      return (
        <button
          onClick={() => onFilterChange(name)}
          type="button"
          key={id}
          className={`btn ${clazz}`}
        >
          {label}
        </button>
      );
    });
    return <div className="btn-group">{buttons}</div>;
  }
}
