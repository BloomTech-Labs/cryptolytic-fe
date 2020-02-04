import React from "react";
import Header from "../Marketing Page/Header";
import { useSpring, animated } from "react-spring";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import { Link } from "@material-ui/core";

import { data17, data19 } from "./TeamPageData.js";

const useStyles = makeStyles(theme => ({
  teamHeader: {
    width: "100%",
    backgroundColor: "black",
    color: "white",
    fontFamily: "Titillium Web",
    fontWeight: "bold",
    fontSize: "3.0rem"
  },
  profileContainer: {
    margin: theme.spacing(1),
    padding: theme.spacing(1),
    display: "flex",
    flexWrap: "wrap",
    margin: "0 auto",
    width: "70%"
  },
  profilePicsMargin: {
    marginBottom: "12%",
    display: "flex"
  },
  headerStyles: {
    width: "100%",
    height: "100%",
    fontFamily: "Titillium Web"
  },
  dataContainer: {
    display: "flex",
    flexDirection: "column",
    marginLeft: "10px",
    width: "40%"
  },
  image: {
    borderRadius: "50%",
    "&:hover": {
      WebkitTransform: "scale(1.1)",
      WebkitBoxShadow: " 0px 0px 15px #ccc",
      transition: ".5s"
    }
  },
  name: {
    color: "white",
    margin: 0,
    fontSize: ".9rem"
  },
  role: {
    color: "white",
    margin: 0,
    fontSize: ".8rem"
  }
}));

export default function TeamPage() {
  const props = useSpring({
    to: { opacity: 1, marginLeft: 0 },
    from: { opacity: 0, marginLeft: -1200 },
    config: { duration: 800 }
  });
  const classes = useStyles();
  return (
    <>
      <div>
        <Header className={classes.headerStyles} />
      </div>
      <div className={classes.teamHeader}>
        <h3>Come Meet the Teams!</h3>
        <h3>Lab 17</h3>
      </div>
      <animated.div style={props}>
        <Grid className={classes.profileContainer}>
          {data17.map(e => (
            <Grid
              className={classes.profilePicsMargin}
              item
              xs={12}
              sm={6}
              md={4}
            >
              <Link href={e.href}>
                <img src={e.img} className={classes.image} />
              </Link>
              <div className={classes.dataContainer}>
                <h3 className={classes.name}>{e.name}</h3>
                <p className={classes.role}>{e.role}</p>
              </div>
            </Grid>
          ))}
        </Grid>

        <div>
          <div className={classes.teamHeader}>
            <h3>Lab 19</h3>
          </div>

          <Grid className={classes.profileContainer}>
            {data19.map(e => (
              <Grid
                className={classes.profilePicsMargin}
                item
                xs={12}
                sm={6}
                md={4}
              >
                <Link href={e.href}>
                  <img src={e.img} className={classes.image} />
                </Link>
                <div className={classes.dataContainer}>
                  <h3 className={classes.name}>{e.name}</h3>
                  <p className={classes.role}>{e.role}</p>
                </div>
              </Grid>
            ))}
          </Grid>
        </div>
      </animated.div>
    </>
  );
}
