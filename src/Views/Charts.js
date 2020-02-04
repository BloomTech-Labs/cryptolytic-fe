import React from "react";
import Chart from "../Components/Charting/Chart";
import ChartOptionSelect from "../Components/Charting/ChartOptionSelect";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
	mainHeader: {
		background:
			"-webkit-linear-gradient(92.5deg, #4EB9FF 19.25%, #53CFD7 45.13%, #5DDCB7 67.95%, #62E3AB 82.93%)",
		WebkitBackgroundClip: "text",
		WebkitTextFillColor: "transparent",
		fontWeight: "180px",
		height: "53px",
		fontSize: "2.2em",
		lineHeight: "1em",
		display: "flex",
		alignItems: "center",
		letterSpacing: "0.03em",
		margin: "0"
	},
	headerContainer: {
		display: "flex",
		justifyContent: "flex-start",
		margin: "2em 0 0 28.5rem",
		width: "50%",
		borderRadius: "5px"
	},
	secondaryHeader: {
		display: "flex",
		justifyContent: "flex-start",
		margin: "0 0 0 28.5rem",
		width: "50%",
		color: "white",
		height: "2.5rem"
	},

});

const Charts = () => {
	const classes = useStyles();

	return (
		<>
			<div className={classes.headerContainer}>
				<h1 className={classes.mainHeader}>Exchange Charts</h1>
			</div>
			<div className={classes.secondaryHeader}>
				<h3>Visualizations to analyze historic and current trends in arbitrage!</h3>
			</div>
			<div>
				<ChartOptionSelect />
				<Chart />
			</div>
		</>
	);
};

export default Charts;
