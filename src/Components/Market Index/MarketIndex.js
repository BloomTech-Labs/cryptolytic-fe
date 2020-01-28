import React, { useState } from "react";
import MarketIndexChart from "./MarketIndexChart"
import DashboardTable from "../DashboardTable"
import CompareControls from "./CompareControls"
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles';
import axios from "axios";

const useStyles = makeStyles(theme => ({
	root: {
		'& > *': {
			margin: theme.spacing(1),
		},
	header: {
		background: "-webkit-linear-gradient(92.5deg, #4EB9FF 19.25%, #53CFD7 45.13%, #5DDCB7 67.95%, #62E3AB 82.93%)",
	  	WebkitBackgroundClip: "text",
	  	WebkitTextFillColor: "transparent",
		}
	},
	emptyInputMessage: {
		paddingLeft: "20vw", 
		width: '50%', 
		color: 'white', 
		display: 'flex', 
		alignItems: 'center', 
		justifyContent: 'center'
	},
	indexControlsContainer: {
		display: 'flex', 
		flexDirection: 'column', 
		alignItems: 'center', 
		justifyContent: 'center', 
		marginLeft: '2em', 
		color: 'white'
	},
	dashboardTableContainer: {
		marginLeft: "2em" 
	},
	marketIndexContainer: {
		display: 'flex', 
		height: '100%'
	}
}));


export default function MarketIndex(props) {
	const [ controls, setControls ] = useState({
		compare: ['BTC'],
		interval: "day",
		exchange: "bitfinex",
		render: true,
		chartLoaded: false
	})
	const classes = useStyles();

	let deletedColumns = ['image', 'market_cap_rank', 'price_change_24h', 'market_cap_change_percentage_24h', 'circulating_supply', 'total_supply', 'ath', 'ath_change_percentage', 'roi', 'id', 'ath_date', 'last_updated', 'market_cap_change_24h']
	let orderedColumns = ['symbol', 'name', 'current_price'].reverse()
	let tradingPairArray = []
	let exchangeArray = []
	let percentageArray = [7]
	let fiatArray = [2, 5, 6]
	let cryptoArray = []
	let endpointUrl = ['https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin%2Cethereum%2Cripple%2Ctether%2Cbitcoin-cash%2Cmonero%2Ceos&order=market_cap_desc&per_page=100&page=1&sparkline=false']
	let largeNumberArray = [3, 4]
	let tickerArray = [0]
	let tradeProps = { deletedColumns, orderedColumns, tradingPairArray, exchangeArray, percentageArray, fiatArray, cryptoArray, endpointUrl, largeNumberArray, tickerArray }
	
	const names = [
		{name: 'BTC', color: 'orange'},
		{name: 'LTC', color: 'silver'},
		{name: 'ETH', color: 'purple'},
		{name: 'XMR', color: 'green'},
		{name: 'XRP', color: 'red'},
		{name: 'DASH', color: 'yellow'},
		{name: 'XLM', color: 'blue'}
	  ];
	
	return (
		<div>
			<div className={classes.marketIndexContainer}>
				{controls.compare.length > 0 ?
				<MarketIndexChart controls={controls} setControls={setControls} names={names} />
				:
				<h1 className={classes.emptyInputMessage}>Select a coin, exchange, and interval...</h1>
				}
				<div className={classes.indexControlsContainer}>
					<CompareControls compare={controls} setCompare={setControls} names={names} />
				</div>
			</div>
			<div className={classes.dashboardTableContainer}>
				<DashboardTable {...tradeProps} />
			</div>
		</div>
	)
}