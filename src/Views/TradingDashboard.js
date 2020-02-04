import React from "react";
import DashboardTable from "../Components/DashboardTable";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
	mainHeader: {
		background:
			"-webkit-linear-gradient(92.5deg, #4EB9FF 19.25%, #53CFD7 45.13%, #5DDCB7 67.95%, #62E3AB 82.93%)",
		WebkitBackgroundClip: "text",
		WebkitTextFillColor: "transparent",
		position: "relative",
		width: "140px",
		height: "53px",
		left: "24.3%",
		fontWeight: "600",
		fontSize: "2.2em",
		lineHeight: "3em",
		display: "flex",
		alignItems: "center",
		letterSpacing: "0.03em"
	},
	secondaryHeader: {
		position: "relative",
		left: "23.7%",
		color: "white",
		width: "800px",
		height: "34px",
		fontWeight: "600",
		fontSize: "1.2em",
		lineHeight: "1.2em"
	}
});

	///// Working Trading configuration
	let deletedColumns = ['model_type', 'period', 'timestamp'];
	let orderedColumns = [].reverse()
	let tradingPairArray = [3]
	let exchangeArray = [2]
	let percentageArray = []
	let fiatArray = []
	let cryptoArray = []
	let largeNumberArray = []
	let tickerArray = []
	let predictionsArray = [4]
	let endpointUrl = "https://cryptolytics-sample-ds.herokuapp.com/liveDataRoute/getTradePredictionsClean"
	let tradeProps = { deletedColumns, orderedColumns, tradingPairArray, exchangeArray, percentageArray, fiatArray, cryptoArray, endpointUrl, largeNumberArray, tickerArray, predictionsArray }

const TradingDashboard = () => {
	const classes = useStyles();

	return (
		<>

			<h1 className={classes.mainHeader}>Trading</h1>
			<h3 className={classes.secondaryHeader}>
				Price movement predictions for cryptocurrency trading pairs based on
        technical analysis.
      		</h3>
			<DashboardTable  {...tradeProps} />
		</>
	);
};

export default TradingDashboard;
