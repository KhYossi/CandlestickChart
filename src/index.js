import React, { Component } from "react";
import ReactDOM from "react-dom";
import CandlestickChart from "./components/chart/CandlestickChart";
import Tab from "./components/tab/Tab";
import "./styles.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { time: "MIN_5" };

    this.onTimeChange = this.onTimeChange.bind(this);
  }

  onTimeChange(time) {
    this.setState({ time });
  }

  render() {
    return (
      <div className="App">
        <Tab onTimeChange={this.onTimeChange} time={this.state.time} />
        <CandlestickChart time={this.state.time} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
