import React, { Component } from "react";
import Counters from "./counters";

class Counter extends Component {

  render() {

    return (
      <div>
        <span
          className={
            this.props.counter.value === 0 ? "badge badge-warning m-2" : "badge badge-primary m-2"
          }
        >
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-lg"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-md m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
