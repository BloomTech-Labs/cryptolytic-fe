import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { setOptions, setCompareOptions } from "../../actions";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles({
  select: {
    width: "200px",
    margin: "0 5px",
    padding: "0.5em",
    border: "1px solid #62e3ab",
    borderRadius: "5px",
    textAlign: "center"
  },
  label: {
    width: "100%",
    padding: "0.5em",
    color: "#62e3ab"
  },
  textField: {
    width: "200px",
    margin: "0 5px",
    padding: "0.5em",
    border: "1px solid #62e3ab",
    borderRadius: "5px",
    textAlign: "center"
  }
});

const SelectDropdown = props => {
  const classes = useStyles();
  const {
    id,
    label,
    selectId,
    data,
    options,
    compareOptions,
    toggled,
    val
  } = props;

  console.log("options", options);
  console.log("val>>>>>>", val);

  const handleChanges = name => event => {
    console.log("event.id>>>>", event.target.id, name);
    switch (event.target.id) {
      case "exchange":
        if (toggled && id === "exchangeLabel2") {
          props.setCompareOptions({
            ...compareOptions,
            render: true,
            [name]: event.target.value
          });
        } else {
          props.setOptions({
            ...options,
            render: true,
            [name]: event.target.value
          });
        }
        break;
      case "trading_pair":
        // const trading_pair = event.target.value.toLowerCase().replace("/", "_");
        if (toggled) {
          props.setCompareOptions({
            ...compareOptions,
            render: true,
            [name]: event.target.value
          });
          props.setOptions({
            ...options,
            render: true,
            [name]: event.target.value
          });
        } else {
          props.setOptions({
            ...options,
            render: true,
            [name]: event.target.value
          });
        }
        break;
      case "timeFrame":
        if (toggled) {
          props.setCompareOptions({
            ...compareOptions,
            render: true,
            [name]: event.target.value
          });
          props.setOptions({
            ...options,
            render: true,
            [name]: event.target.value
          });
        } else {
          props.setOptions({
            ...options,
            render: true,
            [name]: event.target.value
          });
        }
        break;
    }
  };

  return (
    <FormControl className={classes.select}>
      <InputLabel id={id} htmlFor={id} className={classes.label}>
        {label}
      </InputLabel>
      <Select
        native
        labelId={id}
        id={selectId}
        value={val}
        style={{ color: "#fff" }}
        onChange={handleChanges(selectId)}
      >
        {data.map(ex => {
          if (ex.includes("_")) {
            ex = ex.toUpperCase().replace("_", "/");
            return (
              <option key={ex} style={{ borderRadius: "5px", color: "#000" }}>
                {ex}
              </option>
            );
          } else {
            ex = ex.slice(0, 1).toUpperCase() + ex.substr(1);
            return (
              <option key={ex} style={{ borderRadius: "5px", color: "#000" }}>
                {ex}
              </option>
            );
          }
        })}
      </Select>
    </FormControl>
  );
};

const mapStateToProps = state => {
  return {
    cryptoData: state.cryptoData,
    options: state.options,
    compareOptions: state.compareOptions,
    toggled: state.switchToggled
  };
};

export default connect(mapStateToProps, { setOptions, setCompareOptions })(
  SelectDropdown
);
