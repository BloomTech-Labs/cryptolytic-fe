import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import SelectDropdown from "./SelectDropdown";
import ToggleSwitch from "../../Components/Charting/ToggleSwitch";
import { connect } from "react-redux";
import {
	getChartData,
	getCompareChartData,
	setToggled
} from "../../store/actions";

const useStyles = makeStyles({
	form: {
		display: "flex",
		justifyContent: "flex-start",
		margin: "2em 0 2em 28.5rem",
		padding: "0.5em",
		width: "35%",
		backgroundColor: "rgba(35, 32, 44, 0.8)",
		borderRadius: "5px"
	}
});

const ChartOptionSelect = props => {
	const classes = useStyles();
	const { options, compareOptions, toggled } = props;
	const [exchanges, setExchanges] = useState([
		"coinbase",
		"binance",
		"hitbtc",
		"bitfinex"
	]);
	const [tradingPair, setTradingPair] = useState([
		"btc_usd",
		"eth_btc",
		"btc_usdt"
	]);
	const [timeFrames, setTimeFrames] = useState(["Day", "Week", "Month"]);

	useEffect(() => {
		props.getChartData(options);
		props.getCompareChartData(compareOptions);
	}, [options, compareOptions]);

	const handleSubmit = event => {
		event.preventDefault();
		props.getChartData(options);
	};

	const handleCompareSubmit = event => {
		event.preventDefault();
		props.getCompareChartData(compareOptions);
	};

	console.log("switch>>>>>>", toggled);

	if (toggled) {
		return (
			<div style={{ display: "flex", alignItems: "center" }}>
				<form onSubmit={handleCompareSubmit} className={classes.form}>
					<SelectDropdown
						id={"exchangeLabel"}
						label={"Exchange 1"}
						selectId={"exchange"}
						data={exchanges}
						val={options.exchange}
					/>
					<SelectDropdown
						id={"exchangeLabel2"}
						label={"Exchange 2"}
						selectId={"exchange"}
						data={exchanges}
						val={compareOptions.exchange}
					/>
					<SelectDropdown
						id={"tradingPairLabel"}
						label={"Trading Pair"}
						selectId={"trading_pair"}
						data={tradingPair}
						val={options.trading_pair}
					/>
					<SelectDropdown
						id={"timeFrameLabel"}
						label={"Time Frame"}
						selectId={"timeFrame"}
						data={timeFrames}
						val={options.timeFrame}
					/>
				</form>
				<ToggleSwitch />
			</div>
		);
	} else {
		return (
			<div
				style={{
					display: "flex",
					alignItems: "center"
				}}
			>
				<form onSubmit={handleSubmit} className={classes.form}>
					<SelectDropdown
						id={"exchangeLabel"}
						label={"Exchange"}
						selectId={"exchange"}
						data={exchanges}
						val={options.exchange}
					/>
					<SelectDropdown
						id={"tradingPairLabel"}
						label={"Trading Pair"}
						selectId={"trading_pair"}
						data={tradingPair}
						val={options.trading_pair}
					/>
					<SelectDropdown
						id={"timeFrameLabel"}
						label={"Time Frame"}
						selectId={"timeFrame"}
						data={timeFrames}
						val={options.timeFrame}
					/>
				</form>
				<ToggleSwitch />
			</div>
		);
	}
};

const mapStateToProps = ({ project }) => {
	return {
		cryptoData: project.cryptoData,
		options: project.options,
		compareOptions: project.compareOptions,
		toggled: project.switchToggled
	};
};

export default connect(mapStateToProps, {
	getChartData,
	getCompareChartData,
	setToggled
})(ChartOptionSelect);
