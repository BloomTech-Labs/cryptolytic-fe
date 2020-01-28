import React from "react";
import ArbitrageDashboardTable from "../Components/ArbitrageDashboardTable/ArbitrageDashboardTable";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
	mainHeader: {
		background:
			"-webkit-linear-gradient(92.5deg, #4EB9FF 19.25%, #53CFD7 45.13%, #5DDCB7 67.95%, #62E3AB 82.93%)",
		WebkitBackgroundClip: "text",
		WebkitTextFillColor: "transparent",
		position: "relative",
		width: "180px",
		height: "53px",
		left: "24.3%",
		fontWeight: "180px",
		fontSize: "2.2em",
		lineHeight: "3em",
		display: "flex",
		alignItems: "center",
		letterSpacing: "0.03em"
	},
	secondaryHeader: {
		position: "relative",
		left: "21.7%",
		color: "white",
		width: "800px",
		height: "34px",
		fontWeight: "600",
		fontSize: "1.2em",
		lineHeight: "1.2em"
	}
});

const ArbitrageDashboard = () => {
	const classes = useStyles();

	return (
		<div>
			<h1 className={classes.mainHeader}>Arbitrage</h1>
			<h3 className={classes.secondaryHeader}>
				Buy at the first exchange and sell at the second 30 minutes later to
        make a profit!
      </h3>
			<ArbitrageDashboardTable />
		</div>
	);
};

export default ArbitrageDashboard;
