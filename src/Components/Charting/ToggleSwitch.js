import React from "react";
import { connect } from "react-redux";
import { setToggled } from "../../store/actions";
import { withStyles } from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const ToggleChartSwitch = withStyles(theme => ({
  root: {
    width: 42,
    height: 26,
    padding: 0,
    margin: theme.spacing(1)
  },
  switchBase: {
    padding: 0,
    color: "rgba(35, 32, 44, 0.8)",
    "&$checked": {
      transform: "translateX(16px)",
      color: theme.palette.common.white,
      "& + $track": {
        opacity: 1,
        backgroundColor: theme.palette.grey[500],
        borderColor: theme.palette.grey[500]
      }
    }
  },
  thumb: {
    width: 26,
    height: 26
  },
  track: {
    border: `1px solid ${theme.palette.grey[500]}`,
    borderRadius: 26,
    opacity: 1,
    backgroundColor: theme.palette.common.white
  },
  checked: {}
}))(Switch);

const ToggleSwitch = props => {
  // Boolen value in redux for whether a user as toggled the switch for second exchange or not
  const { toggled, setToggled } = props;

  // Will change the boolen value to whatever the opposite of the current value is in redux
  const handleToggleChanges = () => {
    // Set Toggled action creator in redux
    setToggled(!toggled);
  };
  return (
    <Typography component='div' style={{ marginLeft: "4em" }}>
      <Grid component='label' container alignItems='center' spacing={1}>
        <Grid item style={{ color: "white" }}>
          Single Exchange
        </Grid>
        <Grid item>
          <ToggleChartSwitch
            checked={toggled}
            onChange={handleToggleChanges}
            value='toggled'
          />
        </Grid>
        <Grid item style={{ color: "white" }}>
          Compare Exchanges
        </Grid>
      </Grid>
    </Typography>
  );
};

const mapStateToProps = ({ project }) => {
  return {
    toggled: project.switchToggled
  };
};

export default connect(mapStateToProps, { setToggled })(ToggleSwitch);
