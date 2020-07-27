import React, { Component } from "react";

// Context this
// const user = {
//   name: "Kris",
//   info: function (tel, job) {
//     console.dir(this.name);
//     console.log(tel);
//     console.log(job);
//   },
// };

// const max = {
//   name: "Max",
// };

// user.info.call(max, "809333", "front");
// user.info.apply(max, ["809333", "front"]);

// const start = user.info.bind(max, "809333");

// start();

class Main extends Component {


  state = {
    step: 0,
  };

  hahdlePlus = () => {
    const { step } = this.state;

    this.setState({ step: step + 1 });

    // console.log(step, "+");
  };

  hahdleMinus = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });

    // console.log(step, "-");
  };

  render() {
    // console.log();
    const { step } = this.state;
    // console.log(step, "render");

    return (
      <>
        <button onClick={this.hahdlePlus}>+</button>
        <button onClick={this.hahdleMinus}>-</button>
        <p>{step}</p>
      </>
    );
  }
}

export default Main;
