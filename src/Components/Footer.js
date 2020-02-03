import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link, Grid } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(t => ({
	footer: {
		backgroundColor: "black",
		display: "flex",
		justifyContent: "flex-end",
		alignItems: "center",
		height: "10vh",
		width: "90%",
		padding: '60px 0px 225px 0px',

	},
	footerNavigation: {
		zIndex: 1,
		backgroundColor: "black",
		color: "#f0f8ff",
		display: "flex",
		alignItems: "center",
		width: "70%",
		height: "100%",
		paddingTop: 30,
		marginTop: 150
	},
	footerLinks: {
		fontFamily: 'Titillium Web, sans-serif',
		fontStyle: 'normal',
		fontWeight: 600,
		fontSize: '1.6rem',
		lineHeight: '49px',
		display: 'flex',
		alignItems: 'center',
		textAlign: 'center',
		margin: '5px',
		'&:hover': {
			textDecoration: 'none',
			color: 'gray'
		}
	},
	footerTitle: {
		fontFamily: 'Titillium Web, sans-serif',
		fontStyle: 'normal',
		fontWeight: 'bold',
		fontSize: '3rem',
		lineHeight: '76px',
		display: 'flex',
		alignItems: 'center',
		textAlign: 'center',
		letterSpacing: '0.03em'
	},
	footerBody: {
		fontFamily: 'Titillium Web, sans-serif',
		fontStyle: 'normal',
		fontWeight: 600,
		fontSize: '1.6rem',
		lineHeight: '49px',
		display: 'flex',
		alignItems: 'center',
		textAlign: 'center'
	},
	footerCopyright: {
		fontFamily: 'Titillium Web, sans-serif',
		fontStyle: 'normal',
		fontWeight: 'normal',
		fontSize: '1.4rem',
		lineHeight: '37px',
		display: 'flex',
		alignItems: 'center',
		textAlign: 'center',
		marginLeft: '1vw'
	}
}));

const Footer = () => {
	const classes = useStyles();
	return (
		<div className={classes.footer}>
			<nav className={classes.footerNavigation}>
				<Grid container spacing={0}>
					<Grid
						item
						sm={4}
						direction='column'
						container
						alignItems='flex-start'
					>
						<Typography className={classes.footerTitle}>Cryptolytic</Typography>
						<div style={{ margin: '30px 0px' }}>
							{['Contact Us', 'cryptolyticapp@gmail.com'].map(e =>
								<Typography className={classes.footerBody}>{e}</Typography>
							)}
						</div>
						<Typography className={classes.footerCopyright}>Copyright 2020 Cryptolytic</Typography>
					</Grid>
					<Grid item sm={4} container direction='column' alignItems='center'>
						{['Home', 'About', 'Services'].map(e =>
							<Link color='inherit' className={classes.footerLinks}>{e}</Link>
						)}
					</Grid>
					<Grid item sm={3} container direction='column' alignItems='center'>
						{['Legal', 'Privacy Policy', 'User Agreement', 'FAQ'].map(e =>
							<Link color='inherit' className={classes.footerLinks}>{e}</Link>
						)}
					</Grid>
				</Grid>
			</nav>
		</div>
	);
};

export default Footer;
