import React, { Component } from "react";
import { connect } from "react-redux";
import { singleExchangeOptions, twoExchangeOptions } from "./chartConfig";
import CanvasJSReact from "../../assets/canvasjs.react";
import PropagateLoader from "react-spinners/PropagateLoader";
import { css } from "@emotion/core";

const CanvasJS = CanvasJSReact.CanvasJS;

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const override = css`
  display: flex;
  justify-content: center;
  position: relative;
  margin: 30vh 0 50vh 10vw;
`;

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

    let firstExchange =
      this.props.options.exchange.slice(0, 1).toUpperCase() +
      this.props.options.exchange.substr(1);
    let secondExchange =
      this.props.compareOptions.exchange.slice(0, 1).toUpperCase() +
      this.props.compareOptions.exchange.substr(1);

    // Checks to see if the switch is toggled from bool val in redux
    if (this.props.toggled) {
      twoExchangeOptions.colorSet = "chartColors";
      twoExchangeOptions.data[0].name = firstExchange;
      twoExchangeOptions.data[0].dataPoints = dataPoints;
      twoExchangeOptions.data[1].name = secondExchange;
      twoExchangeOptions.data[1].dataPoints = compareDataPoints;

      if (this.props.fetchingSecondExchangeData) {
        return (
          <PropagateLoader
            css={override}
            size={25}
            color={
              "linear-gradient(93.16deg, #4EB9FF 19.25%, #53CFD7 45.13%, #5DDCB7 67.95%, #62E3AB 82.93%);"
            }
            loading={this.props.fetchingSecondExchangeData}
          />
        );
      } else {
        return (
          <div style={{ width: "60%", marginLeft: "440px" }}>
            <CanvasJSChart
              options={twoExchangeOptions}
              onRef={ref => (this.chart = ref)}
            />
          </div>
        );
      }
    } else {
      singleExchangeOptions.colorSet = "chartColors";
      singleExchangeOptions.data[0].name = firstExchange;
      singleExchangeOptions.data[0].dataPoints = dataPoints;

      if (this.props.fetchingFirstExchangeData) {
        return (
          <PropagateLoader
            css={override}
            size={25}
            color={
              "linear-gradient(93.16deg, #4EB9FF 19.25%, #53CFD7 45.13%, #5DDCB7 67.95%, #62E3AB 82.93%);"
            }
            loading={this.props.fetchingFirstExchangeData}
          />
        );
      } else {
        return (
          <div style={{ width: "60%", marginLeft: "440px" }}>
            <CanvasJSChart
              options={singleExchangeOptions}
              onRef={ref => (this.chart = ref)}
            />
          </div>
        );
      }
    }
  }
}

const mapStateToProps = state => {
  return {
    options: state.options,
    compareOptions: state.compareOptions,
    chartData: state.chartData,
    compareData: state.compareData,
    toggled: state.switchToggled,
    fetchingFirstExchangeData: state.gettingCryptoData,
    fetchingSecondExchangeData: state.gettingCompareCryptoData
  };
};

export default connect(mapStateToProps, {})(Chart);
