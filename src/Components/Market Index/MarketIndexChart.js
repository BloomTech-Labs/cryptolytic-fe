import React,{ useState, useEffect } from "react"
import axios from 'axios'
import { css } from "@emotion/core";

import CanvasJSReact from "../../assets/canvasjs.react"
import IndexChart from "./IndexChart"
import PropagateLoader from "react-spinners/PropagateLoader";

const CanvasJS = CanvasJSReact.CanvasJS;
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

let arrayData = []
let formatArray = []
let nested = []
let chartData = []
let chartArray = []
let chartColorIndex = 0

const override = css`
  display: flex;
  justify-content: center;
  position: relative;
  margin: 0vh 0 5vh 10vw;
`;
export default function MarketIndexChart(props){

	useEffect(() => {
		if(props.controls.render){
		props.controls.compare.map(async (e, i) => {
			let formatData = []
			props.setControls({
				...props.controls,
				render: true,
				chartLoaded: false
			})
				await axios
				.get(
					`https://min-api.cryptocompare.com/data/v2/histo${props.controls.interval}?fsym=${e}&tsym=USD&limit=1500&e=${props.controls.exchange}&api_key={e3d42438b4feed7530ea18fbebdefb6d9c9e475a39c8d6486f4f7fc63d0a5e97}`
				)
				.then(res => {
					console.log(res.data.Data.Data);
					arrayData.push(res.data.Data.Data);
				})
				.catch(err => {
					console.log(err);
				});
				// console.log(arrayData, "after axios")
				arrayData.map(async (e, i) => {
					formatData.push(e)
				})
				const data = await formatData[0]
				await formatData[0].map(async e => {
					let { open, high, low, close } = e;
					let obj = {}
					obj.x = await new Date(e.time * 1000)
					open = Number(e.open).toFixed(2)
					high = Number(e.high).toFixed(2)
					low = Number(e.low).toFixed(2)
					close = Number(e.close).toFixed(2)
					obj.y = [open, high, low, close].map(ee => Number(ee));
					await formatArray.push(obj)
				})

				nested.push(formatArray)
				let chartColorIndex = 0
				console.log(nested)
				nested.map(async (ee, ii) => {
					let colorIndex = 0;
					props.names.map((eee, iii) => {
						if(eee.name === props.controls.compare[ii])
						colorIndex = iii
					})
					if(props.controls.compare[i]){ 
					chartData.push({
						type: "candlestick",
						showInLegend: true,
						name: props.controls.compare[ii],
						yValueFormatString: "$###0.00",
						xValueFormatString: "YYYY MMMM DD",
						dataPoints: ee,
						cursor: "crosshair",
						color: props.names[colorIndex].chartColor
						})
					}
				})
				props.setControls({
					...props.controls,
					render: false,
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
	}, [props.controls.compare, props.controls.exchange, props.controls.interval, props.controls.render, props.names])
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
		<div style={{ color: 'white', marginLeft: '40vw', marginRight: '20vw', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
			<PropagateLoader
			size={25}
			css={override}
	        color={
	          "linear-gradient(93.16deg, #4EB9FF 19.25%, #53CFD7 45.13%, #5DDCB7 67.95%, #62E3AB 82.93%);"
	        }
	        loading={props.controls.chartLoaded}
	      />
		</div>
	)}
}