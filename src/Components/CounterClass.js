import React, { Component } from "react";

class CounterClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  increment() {
    //*********** 1 *********************************
    // this.state.count = this.state.count + 1 // Not rendering
    // console.log(this.state.count);

    //******** 2********************************
    // this.setState(
    //   {
    //     count: this.state.count + 1,
    //   },
    //   () => {
    //     console.log("callback value", this.state.count);
    //   }
    // );

    // 3 =>>>>>>to increace 5 +++ use this or use second one


    this.setState((prevState) =>({
        count : prevState.count + 1
    }))
    console.log(this.state.count);
  }
  incrementFive() { // it will increase 5 
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
  }
  render() {
    return (
      <div>
        <div>Count - {this.state.count}</div>
        <button onClick={() => this.increment()}>Increment</button>
        {/* <button onClick={() => this.incrementFive()}>Increment</button> */}
      </div>
    );
  }
}

export default CounterClass;
