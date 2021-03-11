import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 7 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };
  handleDelete = (counterId) => {
    console.log(counterId);
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };
  render() {
    console.log("state", this.state.counters);
    return (
      <div>
        {this.state.counters.map((counter) => (
          <Counter
            key={counter.id}
            id={counter.id}
            value={counter.value}
            onDelete={this.handleDelete}
          >
            <h4>
              Counter #{counter.id} {counter.value}
            </h4>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
