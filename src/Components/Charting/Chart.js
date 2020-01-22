import React, { Component } from "react";
import { connect } from "react-redux";
import CanvasJSReact from "../../assets/canvasjs.react";

const CanvasJS = CanvasJSReact.CanvasJS;

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

class Chart extends Component {
  render() {
    const data = [...this.props.chartData];
    const compareData = [...this.props.compareData];

    CanvasJS.addColorSet("chartColors", ["#62e3ab", "#53cfd7"]);
    CanvasJS.addColorSet("compareColors", ["#53cfd7"]);

    const dataPoints = data.map(obj => {
      let { open, high, low, close } = obj;
      const dataObj = {};
      dataObj.x = new Date(obj.timestamp * 1000);
      if (obj.trading_pair.includes("eth")) {
        open = Number(open);
        high = Number(high);
        low = Number(low);
        close = Number(close);
      } else {
        open = Number(open).toFixed(2);
        high = Number(high).toFixed(2);
        low = Number(low).toFixed(2);
        close = Number(close).toFixed(2);
      }

      dataObj.y = [open, high, low, close].map(i => Number(i));
      return dataObj;
    });

    const compareDataPoints = compareData.map(obj => {
      let { open, high, low, close } = obj;
      const dataObj = {};
      dataObj.x = new Date(obj.timestamp * 1000);
      if (obj.trading_pair.includes("eth")) {
        open = Number(open);
        high = Number(high);
        low = Number(low);
        close = Number(close);
      } else {
        open = Number(open).toFixed(2);
        high = Number(high).toFixed(2);
        low = Number(low).toFixed(2);
        close = Number(close).toFixed(2);
      }

      dataObj.y = [open, high, low, close].map(i => Number(i));
      return dataObj;
    });

    console.log("dataPoints>>>>>>", dataPoints);

    if (this.props.toggled) {
      const options = {
        theme: "dark1",
        colorSet: "chartColors",
        backgroundColor: "#000",
        animationEnabled: true,
        zoomEnabled: true,
        zoomType: "xy",
        toolTip: {
          shared: true
        },
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
            name: this.props.compareOptions.exchange.slice(0, 1).toUpperCase()+this.props.compareOptions.exchange.substr(1),
            yValueFormatString: "$###0.00",
            xValueFormatString: "MMMM DD YYYY",
            dataPoints: dataPoints
          },
          {
            type: "candlestick",
            showInLegend: true,
            name: this.props.compareOptions.exchange.slice(0, 1).toUpperCase()+this.props.compareOptions.exchange.substr(1),            yValueFormatString: "$###0.00",
            xValueFormatString: "MMMM DD YYYY",
            dataPoints: compareDataPoints
          }
        ]
      };

      return (
        <div style={{ width: "70%", marginLeft: "350px" }}>
          <CanvasJSChart options={options} onRef={ref => (this.chart = ref)} />
        </div>
      );
    } else {
      const options = {
        theme: "dark1",
        colorSet: "chartColors",
        backgroundColor: "#000",
        animationEnabled: true,
        zoomEnabled: true,
        zoomType: "xy",
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
            name: this.props.options.exchange.slice(0, 1).toUpperCase()+this.props.options.exchange.substr(1),
            yValueFormatString: "$###0.00",
            xValueFormatString: "MMMM DD YYYY",
            dataPoints: dataPoints
          }
        ]
      };

      return (
        <div style={{ width: "70%", marginLeft: "350px" }}>
          <CanvasJSChart options={options} onRef={ref => (this.chart = ref)} />
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    options: state.options,
    compareOptions: state.compareOptions,
    chartData: state.chartData,
    compareData: state.compareData,
    toggled: state.switchToggled
  };
};

export default connect(mapStateToProps, {})(Chart);
