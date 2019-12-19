import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import logo from "../images/logo.svg";
import home from "../images/home-logo.svg";
import arbitrage from "../images/arbitrage-logo.svg";
import trading from "../images/line-chart-logo.svg";
import api from "../images/cloud-upload-logo.svg";
import data from "../images/data-logo.svg";

const useStyles = makeStyles(theme => ({
  NavBar: {
    width: "15vw",
    height: "auto",
    backgroundColor: "black",
    boxShadow: "1px 0px 0px",
    borderRight: "1px solid #FFFFFF",
    position: "absolute",
    top: 0,
    left: 0
  },
  NavBarLogo: {
    width: "100%",
    height: "100px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  NavBarMenu: {
    // paddTop: "10px",
    width: "100%",
    height: "75vh",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    color: "#FFFFFF",
    marginLeft: 25
  },
  navBarMenuText: {
    width: "100%",
    textAlign: "left",
    fontWeight: 600,
    fontSize: "22px",
    lineHeight: "33px",
    letterSpacing: "0.03em",
    margin: 15,
    display: "flex"
  },
  navBarMenuTextCursor: {
    visibility: "hidden",
    backgroundColor: "#4EB9FF",
    width: 15,
    height: "125%",
    marginLeft: -25,
    "&:active": {
      visibility: "visible"
    }
  },
  navBarMenuButton: {
    visibility: "visible",
    display: "flex",
    alignItems: "center",
    width: "100%",
    height: "100%",
    position: "relative",
    "&:hover": {
      backgroundColor: "rgba(35, 32, 44, 0.9)",
      width: "13vw",
      marginLeft: 20,
      position: "relative"
    }
  }
}));

function NavigationBar() {
  const classes = useStyles();
  return (
    <div className={classes.NavBar}>
      <div className={classes.NavBarLogo}>
        <img src={logo} className={classes.Logo} />
      </div>
      <div className={classes.NavBarMenu}>
        {[
          { name: "Home", logo: home },
          { name: "Arbitrage", logo: arbitrage },
          { name: "Trading", logo: trading },
          { name: "API", logo: api },
          { name: "Data", logo: data }
        ].map(e => (
          <div className={classes.navBarMenuText}>
            <div className={classes.navBarMenuTextCursor}>
              <div className={classes.navBarMenuButton}>
                <img
                  style={{ margin: "0px 10px", marginLeft: 50 }}
                  src={e.logo}
                />
                {e.name}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NavigationBar;
