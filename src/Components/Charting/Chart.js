import React, { Component } from "react";
import { connect } from "react-redux";
import CanvasJSReact from "../../assets/canvasjs.react";
import PropagateLoader from "react-spinners/PropagateLoader";
import { css } from "@emotion/core";

// Initializing CanvasJS Chart
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
    // First Exchange candlestick data coming from redux project reducer
    const data = [...this.props.chartData];

    // Second Exchange candlestick data coming from redux project reducer
    const compareData = [...this.props.compareData];

    // Adds the color set for each candlestick data
    CanvasJS.addColorSet("chartColors", ["#62e3ab"]);
    CanvasJS.addColorSet("compareColors", ["#53cfd7"]);

    // Maps over first exchange data to format it properly for chart
    const dataPoints = data.map(obj => {
      let { open, high, low, close } = obj;
      const dataObj = {};

      // Converts Unix Epoch Time to human readable
      dataObj.x = new Date(obj.timestamp * 1000);

      // Does not limit the decimal two places if trading pair is ETH
      // Other trading pairs are toFixed 2 decimal places
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

      // Converts the candlestick data to numbers
      dataObj.y = [open, high, low, close].map(i => Number(i));
      return dataObj;
    });

    // Formating Second Exchange candlestick data for comparison to the first exchange
    // This works same as above
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

    // Capitalizes the first letter for both exchanges
    let firstExchange =
      this.props.options.exchange.slice(0, 1).toUpperCase() +
      this.props.options.exchange.substr(1);
    let secondExchange =
      this.props.compareOptions.exchange.slice(0, 1).toUpperCase() +
      this.props.compareOptions.exchange.substr(1);

    // Checks to see if the switch is toggled from bool val in redux
    if (this.props.toggled) {
      // Configures chart for displaying candlestick data from two exchanges
      const twoExchangeOptions = {
        theme: "dark1",
        colorSet: "chartColors",
        backgroundColor: "#000",
        animationEnabled: false,
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
            name: firstExchange,
            yValueFormatString: "$###0.00",
            xValueFormatString: "MMMM DD YYYY",
            dataPoints: dataPoints
          },
          {
            type: "candlestick",
            showInLegend: true,
            name: secondExchange,
            yValueFormatString: "$###0.00",
            xValueFormatString: "MMMM DD YYYY",
            dataPoints: compareDataPoints
          }
        ]
      };

      // Displays loader if data is loading
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
        // Once data is received then the chart displays
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
      // Configures chart for displaying candlestick data for only one exchange
      // If switch is not toggled on
      const singleExchangeOptions = {
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
            name: firstExchange,
            yValueFormatString: "$###0.00",
            xValueFormatString: "MMMM DD YYYY",
            dataPoints: dataPoints
          }
        ]
      };

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

// Options and CompareOptions are being set from the select drop-downs and are stored in redux
// Options are for the first exchange and compareOptions are for the second
const mapStateToProps = ({ project }) => {
	return {
		options: project.options,
		compareOptions: project.compareOptions,
		chartData: project.chartData,
		compareData: project.compareData,
		toggled: project.switchToggled,
		fetchingFirstExchangeData: project.gettingCryptoData,
		fetchingSecondExchangeData: project.gettingCompareCryptoData
	};
};

export default connect(mapStateToProps, {})(Chart);
