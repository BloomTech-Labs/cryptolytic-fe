import React from "react";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import taylor from "../../../src/images/profile-team17/taylor.png"
import arbLogo from "../../../src/images/arbitrage-logo.svg"

// Under construction

const useStyles = makeStyles(theme => ({
	icons: {
		width: '20%'
		},
		teamHeader: {
			width: '100%', backgroundColor: 'black', display: 'flex', alignItems: 'center', flexDirection: 'column', color: 'white', fontFamily: 'Titillium Web', fontWeight: 'bold', fontSize: "3.0rem" 

		},

}));

export default function TeamPage() {
	return(

	<div>
<div>
<h2> Meet the Teams!</h2>
	</div>
		<div>
		<Grid
  container
  direction="row"
  justify="space-around"
  alignItems="center"
>
		<img src={taylor} />

</Grid>
</div>
</div>
	

	)
}