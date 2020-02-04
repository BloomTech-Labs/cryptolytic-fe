import React from "react";
import { connect } from "react-redux";
import { withRouter, Redirect } from "react-router";
import { Link } from "react-router-dom";
import firebase from "firebase/app";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Alert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";
import { signUp } from "../../store/actions";

const useStyles = makeStyles(theme => ({
  form: {
    width: "30%",
    height: "100%",
    margin: "3% auto",
    background: "rgba(35, 32, 44, 0.7)"
  },
  formContainer: {
    padding: "3% 0 3% 0",
    margin: "10% 0 0 0",
    display: "flex",
    flexDirection: "column"
  },
  button: {
    width: "35%",
    margin: "8% auto 5% auto",
    transition: ".4s ease",
    color: "white",
    background: "rgba(35, 32, 44, 0.7)",
    border: "2px solid #4EB9FF",
    boxSizing: "border-box",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: "4px",
    "&:hover": {
      background: "white",
      color: "black",
      textDecoration: "none",
      msTransform: "translateX(4px)",
      webkitTransform: "translateX(4px)",
      transform: "translateX(4px)",
      boxShadow: "3px 3px",
      transition: ".5s"
    }
  },
  textField: {
    marginTop: "3%",
    width: "85%",
    background: "#28262C",
    borderRadius: "4px"
  },

  cssOutlinedInput: {
    "&$cssFocused $notchedOutline": {
      borderColor: `gray !important`
    }
  },

  cssFocused: {
    color: "#A5A3AB !important"
  },
  cssRoot: {
    color: "#A5A3AB !important"
  },
  notchedOutline: {
    borderWidth: "1px",
    borderColor: "black !important"
  },
  header: {
    background:
      "-webkit-linear-gradient(92.5deg, #4EB9FF 19.25%, #53CFD7 45.13%, #5DDCB7 67.95%, #62E3AB 82.93%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    height: "53px",
    fontWeight: "180px",
    fontSize: "2.2em",
    lineHeight: "3em",
    display: "flex",
    alignItems: "center",
    letterSpacing: "0.03em",
    margin: "10% auto 0 auto"
  },
  headerContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    textAlign: "center"
  },
  p: {
    color: "white",
    fontWeight: "bold"
  },
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2)
    },
    background: "blue"
  }
}));

const SignUp = props => {
  const { history, signUp, userSignUpError } = props;
  const classes = useStyles();

  const handleSignUp = event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    signUp({ email: email.value, password: password.value });
    if (firebase.auth().currentUser) {
      history.push("/main/home");
    }
  };

  if (firebase.auth().currentUser) {
    return <Redirect to='/main/home' />;
  }

  return (
    <div>
      <div className={classes.headerContainer}>
        <h1 className={classes.header}>Sign Up</h1>
      </div>
      <Paper className={classes.form}>
        <form className={classes.formContainer} onSubmit={handleSignUp}>
          <div className='emailField'>
            <TextField
              name='email'
              label='Email'
              type='email'
              size='small'
              variant='outlined'
              className={classes.textField}
              InputProps={{
                classes: {
                  root: classes.cssOutlinedInput,
                  focused: classes.cssFocused,
                  notchedOutline: classes.notchedOutline
                }
              }}
              InputLabelProps={{
                classes: {
                  root: classes.cssRoot,
                  focused: classes.cssFocused
                }
              }}
            />
          </div>
          <div className='passField'>
            <TextField
              name='password'
              label='Password'
              type='password'
              size='small'
              variant='outlined'
              className={classes.textField}
              InputProps={{
                classes: {
                  root: classes.cssOutlinedInput,
                  focused: classes.cssFocused,
                  notchedOutline: classes.notchedOutline
                }
              }}
              InputLabelProps={{
                classes: {
                  root: classes.cssRoot,
                  focused: classes.cssFocused
                }
              }}
            />
          </div>
          <Button variant='contained' type='submit' className={classes.button}>
            Sign Up
          </Button>
        </form>
      </Paper>
      <p className={classes.p}>
        Already have an account?<Link to='/login'> Login</Link>{" "}
      </p>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    userSignUpError: state.auth.userSignUpError
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signUp: creds => dispatch(signUp(creds))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SignUp));
