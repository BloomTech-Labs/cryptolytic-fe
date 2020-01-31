import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import cogWheel from "../images/cogwheel.svg";
import Avatar from "@material-ui/core/Avatar";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles(theme => ({
  navHeader: {
    backgroundColor: "#000000",
    width: "100%",
    height: "10vh",
    display: "flex",
    justifyContent: "space-between"
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
    marginBottom: "30vw"
  },
  cogWheel: {
    width: "10%",
    height: "10vh",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center"
  }
}));

function NavigationHeader() {
  const classes = useStyles();
  return (
    <div className={classes.navHeader}>
      <div className={classes.title}></div>
      <div className={classes.cogWheel}>
        <img src={cogWheel} />
        <div>
          <Avatar />
          <Menu
            id='simple-menu'
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </div>
      </div>
    </div>
  );
}

export default NavigationHeader;
