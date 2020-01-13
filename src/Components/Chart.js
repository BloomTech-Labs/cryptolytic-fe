import React, { Component } from "react";
import axios from "axios";
import CanvasJSReact from "../assets/canvasjs.react";

const CanvasJS = CanvasJSReact.CanvasJS;

const CanvasJSChart = CanvasJSReact.CanvasJSChart;


class Chart extends Component {
  state = {
    chartData: [],
    cryptoData: { exchange: "coinbase", trading_pair: "btc_usd" }
  };

  componentDidMount() {
    axios
      .post(
        "https://cryptolytics-sample-ds.herokuapp.com/liveDataRoute/getDataByWeek",
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
    const data = [...this.state.chartData].slice(0, 20);
    console.log("data>>>>>", data);
    const dataPoints = data.map(obj => {
      const dataObj = {};
      dataObj.x = new Date(obj.timestamp);
      dataObj.y = [obj.open, obj.high, obj.low, obj.close];
      return dataObj;
    });
    
    console.log("dataPoints>>>>>>", dataPoints);

    const options = {
      theme: 'dark1',
      axisX: {
        valueFormatString: ''
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
          yValueFormatString: "",
          xValueFormatString: "",
          dataPoints: []
        }
      ]
    }
    return (
      <>
       <CanvasJSChart options={options} onRef={ref => (this.chart = ref)} />
      </>
    );
  }
}

export default Chart;
