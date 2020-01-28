import React from "react";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import taylor from "../../../src/images/profile-team17/taylor.png";
import elizabeth from "../../../src/images/profile-team17/elizabeth.png";
import alfredo from "../../../src/images/profile-team17/alfredo.png";
import marvin from "../../../src/images/profile-team17/marvin.png";
import nathan from "../../../src/images/profile-team17/nathan.png";
import stan from "../../../src/images/profile-team17/stan.png";

// Under construction

const useStyles = makeStyles(theme => ({
	teamHeader: {
		width: '100%', backgroundColor: 'black', display: 'flex', alignItems: 'center', flexDirection: 'column', color: 'white', fontFamily: 'Titillium Web', fontWeight: 'bold', fontSize: "3.0rem"
	},
	profileContainer: {
		margin: theme.spacing(1),
		padding: theme.spacing(1),
		display: 'flex',
		flexWrap: 'wrap',
		justify: "space-around",
		marginBottom: "8%",

	},
	profilePicsMargin: {
		marginBottom: "12%",
	},



}));

export default function TeamPage() {
	const classes = useStyles();
	return (

		<div>
			<div className={classes.teamHeader}>
				<h2>Come Meet the Teams!</h2>
			</div>
			<div>
				<Grid className={classes.profileContainer}>
					<Grid className={classes.profilePicsMargin} item xs={12} sm={6} md={4}>
						<img src={elizabeth} />
					</Grid>
					<Grid className={classes.profilePicsMargin} item xs={12} sm={6} md={4}>
						<img src={marvin} />
					</Grid>
					<Grid className={classes.profilePicsMargin} item xs={12} sm={6} md={4}>
						<img src={nathan} />
					</Grid>
					<Grid className={classes.profilePicsMargin} item xs={12} sm={6} md={4}>
						<img src={taylor} />
					</Grid>
					<Grid className={classes.profilePicsMargin} item xs={12} sm={6} md={4}>
						<img src={stan} />
					</Grid>
					<Grid className={classes.profilePicsMargin} item xs={12} sm={6} md={4}>
						<img src={alfredo} />
					</Grid>


				</Grid>
			</div>

		</div>



	)
}