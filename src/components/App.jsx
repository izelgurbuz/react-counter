import React, { Component } from "react";
import Navbar from "./navbar";
import Counters from "./counters";

class App extends Component {
  state = {
    temp: 5,
    counters: [
      { key: 3, value: 0 },
      { key: 5, value: 0 },
      { key: 7, value: 5 }
    ]
  };
  render() {
    return (
      <React.Fragment>
        <Navbar totalCounters={this.state.counters.length}></Navbar>
        <button
          className="btn btn-sm btn-danger m-2"
          onClick={this.handleReset}
        >
          Reset
        </button>
        <Counters
          counters={this.state.counters}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
        />
      </React.Fragment>
    );
  }
  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index].value++;
    this.setState({ counters });
  };

  handleDecrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index].value === 0
      ? (counters[index].value = 0)
      : counters[index].value--;
    this.setState({ counters });
  };

  handleDelete = counter => {
    const counters = this.state.counters.filter(x => x.key !== counter.key);
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = [...this.state.counters];
    counters.map(x => (x.value = 0));
    this.setState({ counters });
  };
}
export default App;
