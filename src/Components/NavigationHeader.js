import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import cogWheel from "../images/cogwheel.svg";
import Avatar from "@material-ui/core/Avatar";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import firebase from "../firebase";

const useStyles = makeStyles(theme => ({
	navHeader: {
		backgroundColor: "#000000",
		width: "100%",
		height: "10vh",
		display: "flex",
		justifyContent: "space-between",
		"@media(max-width: 1300px)": {
			display: "flex",
			justifyContent: "space-around",
			width: "15%"
		}
	},
	title: {
		width: "20vw",
		height: "10vh",
		marginLeft: "18vw",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		color: "#FFFFFF",
		fontWeight: 300,
		fontSize: "30px",
		lineHeight: "46px",
		letterSpacing: "0.03em",
		marginBottom: "30vw",
		"@media(max-width: 1300px)": {
			display: "none"
		}
	},
	cogWheel: {
		width: "10%",
		height: "10vh",
		display: "flex",
		justifyContent: "space-evenly",
		alignItems: "center",
		"@media(max-width: 1300px)": {
			width: "100%"
		}
	}
}));

function NavigationHeader({ history }) {
	const [anchorEl, setAnchorEl] = useState(null);
	const classes = useStyles();

	const handleClick = event => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleLogout = () => {
		localStorage.removeItem("firebase_jwt");
		firebase.auth().signOut();
		history.push("/");
	};

	return (
		<div className={classes.navHeader}>
			<div className={classes.title}></div>
			<div className={classes.cogWheel}>
				<img src={cogWheel} />
				<div>
					<Avatar
						aria-controls='profile-menu'
						aria-haspopup='true'
						onClick={handleClick}
						style={{ cursor: "pointer" }}
					/>
					<Menu
						id='profile-menu'
						anchorEl={anchorEl}
						keepMounted
						open={Boolean(anchorEl)}
						onClose={handleClose}
					>
						<MenuItem onClick={handleLogout}>Logout</MenuItem>
					</Menu>
				</div>
			</div>
		</div>
	);
}

export default NavigationHeader;
