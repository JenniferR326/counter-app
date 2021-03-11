import React, { Component } from "react";
import Counters from './counters'

class Counter extends Component {
  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  state = {
    value: this.props.value,
  };

  handleIncrement = (e) => {
    console.log(e)
    console.log("Increment Clicked");
    this.setState({ value: this.state.value + 1 });
  }


  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags</p>;
    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  render() {
    console.log('VALUE', this.props.value)

    return (
      <div>
        <span
          className={
            this.state.count === 0 ? "badge-warning m-2" : "badge-primary m-2"
          }
        >
          {this.formatCount()}
        </span>

        <button
          onClick={()=> this.handleIncrement()}
          className="btn btn-secondary btn-lg"
        >
          Increment
        </button>
        <button onClick={()=>this.props.onDelete(this.props.id)} className="btn btn-danger btn-md m-2">Delete</button>
      </div>
    );
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
