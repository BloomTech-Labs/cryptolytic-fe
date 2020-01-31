import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

import Link from '@material-ui/core/Link';

import logo from "../../../src/images/logo.svg"

const data = [
	{ name: "Services", href: "/services" },
	{ name: "Team", href: "/team" },
	{ name: "Login", href: "/login" },
	{ name: "Sign Up", href: "/signup" }
]

const useStyles = makeStyles({
	headerContainer: {
		width: '100%',
		height: '8vh',
		backgroundColor: 'black',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		color: 'white',
		fontFamily: 'Titillium Web',
		fontSize: '22px',
		lineHeight: '40px'
	},
	headerLeft: {
		width: '50%',
		display: 'flex',
		justifyContent: 'flex-start'
	},
	headerLogoContainer: {
		display: 'flex',
		justifyContent: 'flex-start',
		alignItems: 'center',
		width: '50%',
		fontSize: '40px',
		lineHeight: '76px',
		marginLeft: '1em'
	},
	headerLogoLink: {
		textDecoration: 'none',
		display: 'flex',
		alignItems: 'center',
		color: 'white',
		'&:hover': {
			textDecoration: 'none'
		}
	},
	headerLogo: {
		width: '1.8em'
	},
	headerRightContainer: {
		width: '70%',
		display: 'flex',
		justifyContent: 'flex-end'
	},
	headerMenuContainer: {
		display: 'flex',
		justifyContent: 'space-around',
		width: '50%',
	},
	headerMenuLink: {
		textDecoration: 'none',
		display: 'flex',
		alignItems: 'center',
		color: 'white',
		'&:hover': {
			textDecoration: 'none',
			color: '#4EB9FF'
		}
	},
	headerMenuLogin: {
		background: 'black',
		borderRadius: '4px',
		fontFamily: 'Titillium Web',
		padding: '2px 40px',
		textDecoration: 'none',
		display: 'flex',
		alignItems: 'center',
		color: 'white',
		'&:hover': {
			background: 'white',
			color: 'black',
			textDecoration: 'none',
		}
	}
});

export default function Header() {
	const classes = useStyles();
	return (
		<div className={classes.headerContainer}>
			<div className={classes.headerLeft}>
				<div className={classes.headerLogoContainer}>
					<Link href="/" className={classes.headerLogoLink}>
						<img src={logo} className={classes.headerLogo} />
						<p>Cryptolytic</p>
					</Link>
				</div>
			</div>
			<div className={classes.headerRightContainer}>
				<div className={classes.headerMenuContainer}>
					{data.map(e =>
						<Link href={e.href} className={classes.headerMenuLink}>{e.name}</Link>
					)}
				</div>
			</div>
		</div>
	)
}