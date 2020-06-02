import React, { Component } from "react";

class Counter extends Component {
  state = { count: 0 };

  style() {
    return (
      "badge badge-" + (this.props.settings.value === 0 ? "warning" : "primary")
    );
  }

  render() {
    return (
      <div>
        <span className={this.style() + " m-3"}>
          {this.props.settings.value === 0
            ? " Zero "
            : this.props.settings.value}
        </span>
        <button
          onClick={() => this.props.onIncrement(this.props.settings)}
          className="btn btn-success btn-sm m-3"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDecrement(this.props.settings)}
          className="btn btn-secondary btn-sm m-3"
        >
          Decrement
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.settings)}
          className="btn btn-danger btn-sm m-3"
        >
          Delete
        </button>
      </div>
    );
  }
}

export default Counter;
