import React, { Component } from "react";
import axios from "axios";
import CanvasJSReact from "../../assets/canvasjs.react";

const CanvasJS = CanvasJSReact.CanvasJS;

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

class Chart extends Component {
  state = {
    chartData: [],
    cryptoData: { exchange: "coinbase", trading_pair: "btc_usd", timeFrame: "Week" }
  };

  componentDidMount(timeFrame) {
    axios
      .post(
        `https://cryptolytics-sample-ds.herokuapp.com/liveDataRoute/getDataBy${timeFrame}`,
        this.state.cryptoData
      )
      .then(res => {
        console.log(res.data.data);
        this.setState({
          chartData: res.data.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const data = [...this.state.chartData].slice(0, 144);

    CanvasJS.addColorSet("chartColors", ["#62e3ab", "#53cfd7"]);

    const dataPoints = data.map(obj => {
      let { open, high, low, close } = obj;
      const dataObj = {};
      dataObj.x = new Date(obj.timestamp * 1000);
      open = Number(open).toFixed(2);
      high = Number(high).toFixed(2);
      low = Number(low).toFixed(2);
      close = Number(close).toFixed(2);

      dataObj.y = [open, high, low, close].map(i => Number(i));
      return dataObj;
    });

    console.log("dataPoints>>>>>>", dataPoints);

    const options = {
      theme: "dark1",
      colorSet: "chartColors",
      backgroundColor: "#000",
      animationEnabled: true,
      axisX: {
        valueFormatString: ""
      },
      axisY: {
        includeZero: false,
        prefix: "$"
      },
      data: [
        {
          type: "candlestick",
          showInLegend: true,
          name: "",
          yValueFormatString: "$###0.00",
          xValueFormatString: "MMMM DD YYYY",
          dataPoints: dataPoints
        }
      ]
    };
    return (
      <div style={{ width: "80%", marginLeft: "350px" }}>
        <CanvasJSChart options={options} onRef={ref => (this.chart = ref)} />
      </div>
    );
  }
}

export default Chart;
