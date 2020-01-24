export const singleExchangeOptions = {
  theme: "dark1",
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
      yValueFormatString: "$###0.00",
      xValueFormatString: "MMMM DD YYYY"
    }
  ]
};

export const twoExchangeOptions = {
  theme: "dark1",
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
      yValueFormatString: "$###0.00",
      xValueFormatString: "MMMM DD YYYY"
    },
    {
      type: "candlestick",
      showInLegend: true,
      yValueFormatString: "$###0.00",
      xValueFormatString: "MMMM DD YYYY"
    }
  ]
};
