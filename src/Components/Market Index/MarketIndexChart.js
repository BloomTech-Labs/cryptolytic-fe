import React, { useEffect } from "react";
import axios from "axios";
import { css } from "@emotion/core";

import CanvasJSReact from "../../assets/canvasjs.react";
import IndexChart from "./IndexChart";
import PropagateLoader from "react-spinners/PropagateLoader";

const CanvasJS = CanvasJSReact.CanvasJS;
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

// Initial reference set from axios 
let chartQueue = []
let chartData = []
let chartArray = []


const override = css`
  display: flex;
  justify-content: center;
  position: relative;
  margin: 0vh 0 5vh 10vw;
`;
export default function MarketIndexChart(props) {
	useEffect(() => {
		if(props.controls.render){
			// Maps over each coin that's set to controls.compare
		props.controls.compare.map(async (e, i) => {
			let formatArray = []
			let arrayData = []
			props.setControls({
				...props.controls,
				render: true,
				chartLoaded: false
			})
				// This axios call is ran for each string present in the controls.compare array
				await axios
				.get(
					`https://min-api.cryptocompare.com/data/v2/histo${props.controls.interval}?fsym=${e}&tsym=USD&limit=1500&e=${props.controls.exchange}&api_key={1f45e99a086ff370781ea93abb6e274e40f9f98a9e8ba2c5f4dd74ad34fbdc00}`
				)
				.then(res => {
					// While mapping out each iteration of controls.compare, push axios results into this array
					arrayData = [res.data.Data.Data];
				})
				.catch(err => {
					console.log(err);
				});
				// Take the first object from arrayData and restructure (via .map) the key:value pairs and format the value data
				// Push this result into formatArray
				arrayData[0].map(e => {
					let { open, high, low, close } = e;
					let obj = {}
					obj.x = new Date(e.time * 1000)
					open = Number(e.open).toFixed(2)
					high = Number(e.high).toFixed(2)
					low = Number(e.low).toFixed(2)
					close = Number(e.close).toFixed(2)
					obj.y = [open, high, low, close].map(ee => Number(ee));
					// Push the result of arrayData's formatting into formatArray
					formatArray.push(obj)
				})
				// Pushes results from .map method above. Using this chartQueue reference globally helps handle users spamming inputs by keeping track of the data
				chartQueue.push(formatArray)
				// Takes existing data that was formatted and pushed into chartQueue and .maps what currently exists
				chartQueue.map(async (ee, ii) => {
					// Creates a reference for the index that was matched from props.controls.compare(currently in select input) and props.names(reference consisting of coins and their corresponding colors).
					let colorIndex = 0;
					// .map out the color presets (consisting of coin name and color) from props.names
					props.names.map((eee, iii) => {
						// This essentially checks if the name from the select input matches the name in props.names. Then it references the index for any matches
						// checks if the name value from props.names equals props.controls.compare at the current iteration's index of chartQueue's .map  
						if(eee.name === props.controls.compare[ii])
						// sets referencee for color index when it matches
						colorIndex = iii
					})
					if(props.controls.compare[i]){ 
						// Pushes object during chartQueue's iteration into chartData's array
					chartData.push({
						type: "candlestick",
						showInLegend: true,
						// Uses name of string in props.controls.compare that matches preset name from if statement above
						name: props.controls.compare[ii],
						yValueFormatString: "$###0.00",
						xValueFormatString: "YYYY MMMM DD",
						// Inputs correctly formatted data from this iteration of chartQueue into this object
						dataPoints: ee,
						cursor: "crosshair",
						// Uses color that was matched between preset in props.names to current select input in props.controls.compare
						color: props.names[colorIndex].chartColor
						})
					}
				})
				props.setControls({
					...props.controls,
					render: false,
				})
				// Clears the array used for populating the chart's data so it's ready for the next render (otherwise new data will stack on the old)
				chartData = []
			})
			// Clears the chartQueue once all strings in props.controls.compare (selected coins inside input) are mapped out. 
			chartQueue = []
		}
		props.setControls({
			...props.controls,
			render: false,
			chartLoaded: true
		})
	}, [props.controls.compare, props.controls.exchange, props.controls.interval, props.controls.render, props.names])
	// Inputs structured chart data into the charts configuration along with some otherCanvasJS settings.
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

	if(!props.controls.render){
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
