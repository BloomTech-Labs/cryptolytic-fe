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
		padding: '0.5em 0px',
		position: 'sticky',
		top: '0px',
		background: 'rgb(25, 30, 35)',
		fontWeight: 'bold',
		color: 'rgb(112, 112, 112)',
		borderBottom: '1px solid rgba(35, 32, 44, 0.9)'
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

	///// Working Trading configuration
	// let deletedColumns = ['_id', 'trade_time', '__v'];
	// let orderedColumns = ['date', 'time', 'period', 'exchange', 'trading_pair', 'trade_price', 'percentage'].reverse()
	// let tradingPairArray = [4]
	// let exchangeArray = [3]
	// let percentageArray = [6]
	// let fiatArray = [5]
	// let cryptoArray = []
	// let endpointUrl = "https://cryptolytic-starter.herokuapp.com/trading"

	///// Working Arbitrage configuration
	// let deletedColumns = ['_id', 'trade_time', '__v'];
	// let orderedColumns = ['date', 'time', 'buy_exchange', 'sell_exchange', 'trading_pair', 'price_difference', 'arbitrage_percentage'].reverse()
	// let tradingPairArray = [4]
	// let exchangeArray = [2,3]
	// let percentageArray = [6]
	// let fiatArray = []
	// let cryptoArray = [5]
	// let endpointUrl = "https://cryptolytic-starter.herokuapp.com/arbitrage"

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

	useEffect(() => {
		axios
			.get(endpointUrl)
			.then(res => {
				setData(res.data);
				setLoading({
					...loading,
					setData: true
				})
			})
			.catch(err => console.log(err.response));
	}, []);
	useEffect(() => {
		// Capture and converts endpoint's time into seperate date AND time
		data.map((e, i) => {
			let convertTime = new Date(e.trade_time * 1000)
			let date = convertTime.toLocaleDateString();
			let time = convertTime.toLocaleTimeString();
			// should later be passed in as props
			// uses array of strings to delete corresponding key
			deletedColumns.map((ee, i) => {
				delete e[ee]
			})
			// prepend date and time into data's object this iteration.
			if (e.trade_time)
				data[i] = {
					date,
					time,
					...data[i]
				}
			// orders columns based on order of strings in array
			// currently appends results after date, time. will change this soon
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
			console.log(data, "Use this order/formation to determine/calculate prop values")
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
								// formats column headers (or keys) to readable format
								Object.keys(data[0]).map((e, i) => {
									e = e.replace(/\_/g, " ").split(" ").map(e => {
										return e.charAt(0).toUpperCase() + e.substr(1)
									}).join(" ")
									return <TableCell align="center" className={classes.tableHeadCell}>{e}</TableCell>
								})
								: <></>}
						</TableRow>
					</TableHead>
					<DashboardTableRow loading={loading} data={data} tradingPairArray={tradingPairArray} exchangeArray={exchangeArray} fiatArray={fiatArray} percentageArray={percentageArray} largeNumberArray={largeNumberArray} tickerArray={tickerArray} />
				</Table>
			</TableContainer>
	);
}