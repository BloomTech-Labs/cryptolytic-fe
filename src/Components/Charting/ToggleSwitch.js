import React from "react";
import { connect } from "react-redux";
import { setToggled } from "../../actions";
import { withStyles } from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";

const ToggleChartSwitch = withStyles(theme => ({
  root: {
    width: 28,
    height: 16,
    padding: 0,
    display: "flex",
    justifyContent: "flex-end",
    marginLeft: 20
  },
  switchBase: {
    padding: 2,
    color: theme.palette.grey[500],
    "&$checked": {
      transform: "translateX(12px)",
      color: theme.palette.common.white,
      "& + $track": {
        opacity: 1,
        backgroundColor: theme.palette.primary.main,
        borderColor: theme.palette.primary.main
      }
    }
  },
  thumb: {
    width: 12,
    height: 12,
    boxShadow: "none"
  },
  track: {
    border: `1px solid ${theme.palette.grey[500]}`,
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor: theme.palette.common.white
  },
  checked: {}
}))(Switch);

const ToggleSwitch = props => {
  const { toggled, setToggled } = props;

  const handleToggleChanges = () => {
    setToggled(!toggled);
  };
  return (
    <ToggleChartSwitch
      checked={toggled}
      onChange={handleToggleChanges}
      value='toggled'
    />
  );
};

const mapStateToProps = state => {
  return {
    toggled: state.switchToggled
  };
};

export default connect(mapStateToProps, { setToggled })(ToggleSwitch);
