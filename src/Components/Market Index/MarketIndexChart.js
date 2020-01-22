import React,{ useState, useEffect } from "react"
import axios from 'axios'
import CanvasJSReact from "../../assets/canvasjs.react"
import IndexChart from "./IndexChart"

const CanvasJS = CanvasJSReact.CanvasJS;
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

let arrayData = []
let formatArray = []
let nested = []
let chartData = []

export default function MarketIndexChart(props){
	const[ state, setState ] = useState({
		chartArray: [],
		nestedArray: []
	})
	useEffect(() => {
		if(props.controls.render){
		props.controls.compare.map(async e => {
			let formatData = []
				await axios
				.get(
					`https://min-api.cryptocompare.com/data/v2/histo${props.controls.interval}?fsym=${e}&tsym=USD&limit=7&e=${props.controls.exchange}&api_key={e3d42438b4feed7530ea18fbebdefb6d9c9e475a39c8d6486f4f7fc63d0a5e97}`
				)
				.then(res => {
					console.log(res.data.Data.Data);
					arrayData.push(res.data.Data.Data);
				})
				.catch(err => {
					console.log(err);
				});
				// console.log(arrayData, "after axios")
				arrayData.map((e, i) => {
					formatData.push(e)
				})
				const data = formatData[0]
				formatData[0].map(e => {
					let { open, high, low, close } = e;
					let obj = {}
					obj.x = new Date(e.time * 1000)
					open = Number(e.open).toFixed(2)
					high = Number(e.high).toFixed(2)
					low = Number(e.low).toFixed(2)
					close = Number(e.close).toFixed(2)
					obj.y = [open, high, low, close].map(ee => Number(ee));
					formatArray.push(obj)
				})
				setState({
					...state,
					chartArray: formatArray
				})
				nested.push(formatArray)
				let reverseChart = props.controls.compare;
				await nested.map(async (ee, index) => {
					if(props.controls.compare[index]){
					await chartData.push({
						type: "candlestick",
						showInLegend: true,
						name: reverseChart[index],
						yValueFormatString: "$###0.00",
						xValueFormatString: "YYYY MMMM DD",
						dataPoints: ee,
						cursor: "crosshair",
						color: props.names[index].color
						})
					}
				})
				await props.setControls({
					...props.controls,
					render: false
				})
				// console.log(chartData, "chartdata")
				// console.log(formatData, "formatData")
				// console.log(formatArray, "formatArray")
				// console.log(state, "format")
				// console.log(nested, "nested")
				arrayData = []
				formatArray = []
				chartData = []
			})
			nested = []
		}
		props.setControls({
			...props.controls,
			render: false,
			chartLoaded: true
		})
	}, [props.controls.compare, props.controls.exchange, props.controls.interval])

	CanvasJS.addColorSet("chartColors", ["#62e3ab", "#53cfd7", 'purple']);

	const options = {
		theme: "dark1",
		colorSet: "chartColors",
		backgroundColor: "#000",
		zoomEnabled: true,
		zoomType: "xy",
		toolTip: {
			shared: true
		},
		animationEnabled: true,
		axisX: {
			valueFormatString: ""
		},
		axisY: {
			includeZero: false,
			prefix: "$"
		},
		data: chartData
	};

	if(!props.controls.chartLoaded){
	return(
		<>
			<IndexChart options={options} />
		</>
	)}
	else{
	return(
		<h1 style={{ color: 'white', marginLeft: '40vw', marginRight: '20vw', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Loading...</h1>
	)}
}