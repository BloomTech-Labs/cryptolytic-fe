import React, { Component } from "react";
import axios from "axios";
import CanvasJSReact from "../../assets/canvasjs.react"

import bch_usd_daily from "./DummyData/bch_usd_daily"
import bch_usd_monthly from "./DummyData/bch_usd_monthly"
import bch_usd_weekly from "./DummyData/bch_usd_weekly"

import btc_usd_daily from "./DummyData/btc_usd_daily"
import btc_usd_weekly from "./DummyData/btc_usd_weekly"
import btc_usd_monthly from "./DummyData/btc_usd_monthly"

const CanvasJS = CanvasJSReact.CanvasJS;
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

let arrayData = []
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
		const data = formatData[0].slice(0, 144);

		data.map(e => {
			let obj = {}
			obj.x = e[0]
			obj.y = e[1]
			console.log(obj)
		})


		return (
			<></>
		)
	}
}

export default MarketIndexChart