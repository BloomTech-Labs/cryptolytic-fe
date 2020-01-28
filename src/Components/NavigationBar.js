import React from "react";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import logo from "../images/logo.svg";
import home from "../images/home-logo.svg";
import arbitrage from "../images/arbitrage-logo.svg";
import trading from "../images/line-chart-logo.svg";
import candlestick from "../images/candlestick-icon2.png";
import api from "../images/cloud-upload-logo.svg";
import data from "../images/data-logo.svg";

import AlertDialog from "./AlertDialog";

const useStyles = makeStyles(theme => ({
	NavBar: {
		width: "17vw",
		height: "100vh",
		backgroundColor: "black",
		boxShadow: "1px 0px 0px",
		borderRight: "1px solid #FFFFFF",
		position: "fixed",
		top: 0,
		left: 0,
		zIndex: 100
	},
	NavBarLogo: {
		width: "100%",
		height: "100px",
		display: "flex",
		justifyContent: "center",
		alignItems: "center"
	},
	NavBarMenu: {
		paddingTop: "3vh",
		width: "100%",
		display: "flex",
		alignItems: "center",
		flexDirection: "column",
		color: "#FFFFFF",
		marginLeft: 15
	},
	navBarMenuText: {
		width: "100%",
		textAlign: "left",
		fontWeight: 600,
		fontSize: "1.2rem",
		lineHeight: "33px",
		letterSpacing: "0.03em",
		display: "flex",
		textDecoration: "none",
		color: "#fff"
	},
	navBarMenuTextDisabled: {
		width: "100%",
		textAlign: "left",
		fontWeight: 600,
		fontSize: "1.2rem",
		lineHeight: "33px",
		letterSpacing: "0.03em",
		display: "flex",
		textDecoration: "none",
		color: "gray"
	},
	NavBarMenuContainer: {
		"&:hover": {
			backgroundColor: "rgba(35, 32, 44, 0.9)",
			width: "100%",
			marginLeft: 20,
			position: "relative"
		}
	},
	navBarMenuTextCursorActive: {
		backgroundColor: "#4EB9FF",
		width: 20,
		marginLeft: "-18vw"
	},
	navBarMenuButton: {
		visibility: "visible",
		display: "flex",
		marginBottom: "10px",
		alignItems: "center",
		width: "100%",
		height: "100%",
		position: "relative",
		transition: "0.2s ease"
	},
	navBarMenuIcon: {
		margin: "0px 10px",
		marginLeft: 50
	}
}));

function NavigationBar() {
	const classes = useStyles();
	return (
		<div className={classes.NavBar}>
			<div className={classes.NavMenuContainer}>
				<div className={classes.NavBarLogo}>
					<img src={logo} className={classes.Logo} />
				</div>
				<div className={classes.NavBarMenu}>
					{[
						{ name: "Home", logo: home, link: "home", status: "active" },
						{
							name: "Arbitrage",
							logo: arbitrage,
							link: "arbitrage-dashboard",
							status: "active"
						},
						{
							name: "Trading",
							logo: trading,
							link: "trading-dashboard",
							status: "active"
						},
						{
							name: "Charts",
							logo: candlestick,
							link: "exchange-charts",
							status: "active"
						},
						{ name: "API", logo: api, link: "api", status: "inactive" },
						{ name: "Data", logo: data, link: "data", status: "inactive" }
					].map(e =>
						e.status === "inactive" ? (
							<AlertDialog
								button={
									<NavLink
										activeClassName={classes.navBarMenuTextCursor}
										to={e.link}
										className={classes.navBarMenuTextDisabled}
									>
										<div className={classes.navBarMenuButton}>
											<img
												className={classes.navBarMenuIcon}
												style={{ margin: "0px 10px", marginLeft: 50 }}
												src={e.logo}
											/>
											{e.name}
										</div>
									</NavLink>
								}
								title={"Coming Soon"}
								message={`We're still working on features included in the ${e.name} page. Come back soon!`}
							/>
						) : (
								<div style={{ all: "inherit" }}>
									<NavLink
										activeClassName={classes.navBarMenuTextCursorActive}
										to={e.link}
										className={classes.navBarMenuText}
									>
										<div className={classes.navBarMenuButton}>
											<img className={classes.navBarMenuIcon} src={e.logo} />
											{e.name}
										</div>
									</NavLink>
								</div>
							)
					)}
				</div>
			</div>
		</div>
	);
}

export default NavigationBar;
