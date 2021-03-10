import React, { Component } from "react";

class Counter extends Component {
  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  state = {
    count: 0,
    tags: ['tag1', 'tag2', 'tag3'],
  };

  handleIncrement = (e) => {
    console.log(e)
    console.log("Increment Clicked");
    this.setState({ count: this.state.count + 1 });
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
    return (
      <div>
        {/* {this.state.tags.length === 0 && "please create a new tag"}
        {this.renderTags()} */}
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
      </div>
    );
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
