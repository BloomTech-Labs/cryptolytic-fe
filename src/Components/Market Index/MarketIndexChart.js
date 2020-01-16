import React, { Component } from "react";
import axios from "axios";
import CanvasJSReact from "../../assets/canvasjs.react"
import Typography from '@material-ui/core/Typography'

import bch_usd_daily from "./DummyData/bch_usd_daily"
import bch_usd_monthly from "./DummyData/bch_usd_monthly"
import bch_usd_weekly from "./DummyData/bch_usd_weekly"

import btc_usd_daily from "./DummyData/btc_usd_daily"
import btc_usd_weekly from "./DummyData/btc_usd_weekly"
import btc_usd_monthly from "./DummyData/btc_usd_monthly"

const CanvasJS = CanvasJSReact.CanvasJS;
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

let arrayData = []
let formatArray = []
arrayData.push(btc_usd_daily['Time Series (Digital Currency Daily)']);
console.log(arrayData[0], "here!")

class MarketIndexChart extends Component {
	state = {
		chartData: [],
		cryptoData: {}
	};

	componentDidMount() {

	}

	render() {
		CanvasJS.addColorSet("chartColors", ["#62e3ab", "#53cfd7"]);
		let formatData = []
		arrayData.map((e, i) => {
			formatData.push(Object.entries(e))
		})
		const data = formatData[0]

		data.map(e => {
			let { open, high, low, close } = e;
			let obj = {}
			obj.x = new Date(e[0])
			open = Number(e[1]["1a. open (USD)"]).toFixed(2)
			high = Number(e[1]["2a. high (USD)"]).toFixed(2)
			low = Number(e[1]["3a. low (USD)"]).toFixed(2)
			close = Number(e[1]["4a. close (USD)"]).toFixed(2)
			obj.y = [open, high, low, close].map(ee => Number(ee));
			formatArray.push(obj)
		})
		console.log(formatArray, "formatarray")

		const options = {
			theme: "dark1",
			colorSet: "chartColors",
			backgroundColor: "#000",
			zoomEnabled: true,
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
					xValueFormatString: "YYYY MMMM DD",
					dataPoints: formatArray
				}
			]
		};

		return (
			<div style={{ width: "50%", marginLeft: "20vw", display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', color: 'white' }}>
				<Typography style={{ fontSize: '1.4rem' }}>Chart Data</Typography>
				<CanvasJSChart options={options} onRef={ref => (this.chart = ref)} />
			</div >
		)
	}
}

export default MarketIndexChart