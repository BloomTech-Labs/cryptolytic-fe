import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import cogWheel from "../images/cogwheel.svg";
import Avatar from "@material-ui/core/Avatar";

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

function NavigationHeader() {
  const classes = useStyles();
  return (
    <div className={classes.navHeader}>
      <div className={classes.title}></div>
      <div className={classes.cogWheel}>
        <img src={cogWheel} className={classes.img} />
        <Avatar />
      </div>
    </div>
  );
}

export default NavigationHeader;
