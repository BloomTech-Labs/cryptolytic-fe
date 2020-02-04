import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { css } from "@emotion/core";
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import axios from "axios";
import PropagateLoader from "react-spinners/PropagateLoader";
import DashboardTableRow from "./DashboardTableRow.js";

const useStyles = makeStyles({
	table: {
		marginLeft: "20vw",
		width: "70%",
		background: "rgba(35, 32, 44, 0.8)",
		boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
		"&::-webkit-scrollbar-thumb": {
			backgroundColor: "rgba(255,255,255,1.0)",
			outline: "1px solid slategrey"
		}
	},
	tableContainer: {
		maxHeight: '80vh',
		"&::-webkit-scrollbar": {
			display: "none"
		}
	},
	tableHeader: {
		top: 0,
	},
	tableHeadRow: {
		background: '#23282D',
	},
	tableHeadCell: {
		padding: '1em 0px',
		position: 'sticky',
		top: '0px',
		background: 'rgb(25, 30, 35)',
		fontWeight: 'bold',
		color: 'rgb(112, 112, 112)',
		borderBottom: '1px solid rgba(35, 32, 44, 0.9)',
		fontFamily: 'Titillium Web',
		fontSize: '1em',
	}
});
const override = css`
  display: flex;
  justify-content: center;
  position: relative;
  margin: 30vh 0 50vh 10vw;
`;

export default function DashboardTable(props) {
	const classes = useStyles();
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState({
		setData: false,
		formatData: false,
	})
	// When creating formatters for column types, they must be added below and passed into the DashboardTableRow component
	let deletedColumns = props.deletedColumns;
	let orderedColumns = props.orderedColumns;
	let tradingPairArray = props.tradingPairArray;
	let exchangeArray = props.exchangeArray;
	let percentageArray = props.percentageArray;
	let fiatArray = props.fiatArray;
	let cryptoArray = props.cryptoArray;
	let endpointUrl = props.endpointUrl;
	let largeNumberArray = props.largeNumberArray;
	let tickerArray = props.tickerArray;
	let predictionsArray = props.predictionsArray;

	useEffect(() => {
		axios
			.get(endpointUrl)
			.then(res => {
				res.data.data ?
				setData(res.data.data)
				:
				setData(res.data);
				setLoading({
					...loading,
					setData: true
				})
			})
			.catch(err => console.log(err.response));
	}, []);
	useEffect(() => {
		// Capture and converts endpoint's unix timestamp into seperate date AND time
		data.map((e, i) => {
			let tradeTime;
			let convertTime;
			let date;
			let time;
			if(e.trade_time)
			tradeTime = e.trade_time
			convertTime = new Date(tradeTime * 1000)
			date = convertTime.toLocaleDateString();
			time = convertTime.toLocaleTimeString();
			if(e.timestamp)
			tradeTime = e.timestamp
			convertTime = new Date(tradeTime)
			date = convertTime.toLocaleDateString();
			time = convertTime.toLocaleTimeString();
			// uses array of strings passed in the (deletedColumns) array to delete corresponding key
			deletedColumns.map((ee, i) => {
				delete e[ee]
			})
			// If trade_time column exists, prepends readable date and time columns (created above) into first two positions of all columns
			if (tradeTime)
				data[i] = {
					date,
					time,
					...data[i]
				}
			// Orders columns based on order of strings in (orderedColumns) array
			// If using date and time (created above), input these into the array to change position
			// date and time count as ONE position!
			orderedColumns.map(ee => {
				Object.keys(data[i]).map((eee, ii) => {
					if (ee === eee)
						data[i] = {
							[ee]: Object.values(data[i])[ii],
							...data[i]
						}
				})
			})
			setLoading({
				...loading,
				formatData: true
			})
			// This console.log should assist with configurating the exact position of columns 
			// This should also help when determining where to apply specific formatters
			// console.log(data, "Use this order/formation to determine/calculate prop values")
		}
		)
	}, [data]);
	return (
		!loading.formatData ?
			<PropagateLoader
				css={override}
				size={25}
				color={
					"linear-gradient(93.16deg, #4EB9FF 19.25%, #53CFD7 45.13%, #5DDCB7 67.95%, #62E3AB 82.93%);"
				}
				loading={loading}
			/>
			:
			<TableContainer className={classes.tableContainer}>
				<Table className={classes.table} size="small" aria-label="a dense table">
					<TableHead className={classes.tableHeader}>
						<TableRow className={classes.tableHeadRow}>
							{data[0] ?
								// Formats column headers (or keys) to remove underscores and use proper capitalization
								Object.keys(data[0]).map((e, i) => {
									e = e.replace(/\_/g, " ").split(" ").map(e => {
										return e.charAt(0).toUpperCase() + e.substr(1)
									}).join(" ")
									return <TableCell align="center" className={classes.tableHeadCell}>{e}</TableCell>
								})
								: <></>}
						</TableRow>
					</TableHead>
					{/* Should create a single reference to pass into props */}
					<DashboardTableRow loading={loading} data={data} tradingPairArray={tradingPairArray} exchangeArray={exchangeArray} fiatArray={fiatArray} percentageArray={percentageArray} largeNumberArray={largeNumberArray} tickerArray={tickerArray} predictionsArray={predictionsArray}/>
				</Table>
			</TableContainer>
	);
}