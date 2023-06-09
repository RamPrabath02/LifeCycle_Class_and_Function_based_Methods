import React from "react";

class ClassLC extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
    console.log("Constructor called");
  }

  componentDidMount() {
    console.log("Component did mount");

    this.timer = setInterval(() => {
      console.log("Timer tick");
    }, 1000);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Component did update");
    if (prevState.counter !== this.state.counter) {
      console.log("Counter has changed");
    }
  }

  componentWillUnmount() {
    console.log("Component will unmount");

    clearInterval(this.timer);
  }

  handleClick = () => {
    this.setState((prevState) => ({
      counter: prevState.counter + 1,
    }));
  };

  render() {
    console.log("Render called");
    return (
      <div>
        <h1>Class Lifecycle Methods</h1>
        <p>Counter: {this.state.counter}</p>
        <button onClick={this.handleClick}>Increment</button>
      </div>
    );
  }
}

export default ClassLC;
