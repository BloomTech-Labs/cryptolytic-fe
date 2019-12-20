import React from "react";
import { NavLink } from "react-router-dom";
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
    display: "flex",
    textDecoration: "none",
    color: "#fff"
  },
  navBarMenuTextCursor: {
    visibility: "hidden",
    backgroundColor: "#4EB9FF",
    width: 20,
    height: "125%",
    marginLeft: -30,
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
    transition: "0.2s ease",
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
          { name: "Home", logo: home, link: "home" },
          { name: "Arbitrage", logo: arbitrage, link: "arbitrage-dashboard" },
          { name: "Trading", logo: trading, link: "trading-dashboard" },
          { name: "API", logo: api, link: "api" },
          { name: "Data", logo: data, link: "data" }
        ].map(e => (
          <NavLink to={e.link} className={classes.navBarMenuText}>
            <div className={classes.navBarMenuTextCursor}>
              <div className={classes.navBarMenuButton}>
                <img
                  style={{ margin: "0px 10px", marginLeft: 50 }}
                  src={e.logo}
                />
                {e.name}
              </div>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default NavigationBar;
