import React, { Component } from "react";
import Chart from "react-apexcharts";

class CandlestickChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "candlestick"
        },
        xaxis: {
          labels: {
            formatter: function(value) {
              return new Date(value);
            }
          }
        }
      },
      series: [
        {
          data: []
        }
      ]
    };

    this.updateChart = this.updateChart.bind(this);
  }

  updateChart() {
    fetch(
      `https://www.fxempire.com/api/v1/en/markets/eur-usd/chart?time=${
        this.props.time
      }`
    )
      .then(res => (res.ok ? res : Promise.reject(res)))
      .then(res => res.json())
      .then(res => {
        const data = res.map(item => {
          const arr = Object.values(item);
          return { x: arr.shift(), y: arr };
        });
        this.setState({
          series: [{ data, name: "candle" }]
        });
      });
  }

  componentDidMount() {
    this.updateChart();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.time !== this.props.time) {
      this.updateChart();
    }
  }

  render() {
    return (
      <Chart
        height={window.innerHeight * 0.95}
        options={this.state.options}
        series={this.state.series}
        type="candlestick"
      />
    );
  }
}

export default CandlestickChart;
