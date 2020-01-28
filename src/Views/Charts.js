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
		position: "relative",
		width: "600px",
		height: "53px",
		left: "24.3%",
		fontWeight: "600",
		fontSize: "2.2em",
		lineHeight: "3em",
		display: "flex",
		justifyContent: "flex-start",
		alignItems: "center",
		letterSpacing: "0.03em"
	}
});

const Charts = () => {
	const classes = useStyles();

	return (
		<div>
			<h1 className={classes.mainHeader}>Exchange Charts</h1>
			<ChartOptionSelect />
			<Chart />
		</div>
	);
};

export default Charts;
