import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link, Grid } from "@material-ui/core";

const useStyles = makeStyles(t => ({
  footer: {
    backgroundColor: "black",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    height: "10vh",
    width: "90%",
    bottom: 0,
    left: 0,
    marginTop: "2em"
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
    margin: "8px 0px"
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
            xs={6}
            sm={3}
            direction='column'
            container
            alignItems='flex-start'
          >
            <p>Cryptolytic</p>
            <p>Contact Us</p>
            <p>cryptolyticapp@gmail.com</p>
            <p>Cryptolytic © 2020</p>
          </Grid>
          <Grid item xs={7} sm={4} container direction='column'>
            <Link color='inherit' className={classes.footerLinks}>
              Home
            </Link>
            <Link color='inherit' className={classes.footerLinks}>
              About
            </Link>
            <Link color='inherit' className={classes.footerLinks}>
              Services
            </Link>
          </Grid>
          <Grid item xs={7} sm={4} container direction='column'>
            <Link color='inherit' className={classes.footerLinks}>
              Legal
            </Link>
            <Link color='inherit' className={classes.footerLinks}>
              Privacy Policy
            </Link>
            <Link color='inherit' className={classes.footerLinks}>
              User Agreement
            </Link>
            <Link color='inherit' className={classes.footerLinks}>
              FAQ
            </Link>
          </Grid>
        </Grid>
      </nav>
    </div>
  );
};

export default Footer;
