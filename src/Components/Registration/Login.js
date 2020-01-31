import React, { useCallback, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { withRouter, Redirect } from "react-router";
import firebase from "firebase/app";
import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import { signIn } from "../../store/actions";

const useStyles = makeStyles(theme => ({
  form: {
    width: "25%",
    margin: "0 auto",
    height: "40vh"
  },
  formContainer: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    padding: 5
  },
  button: {
    width: "30%",
    margin: "0 auto",
    transition: ".4s ease",
    "&:hover": {
      backgroundColor: "#161616",
      color: "#dddddd"
    }
  },
  textField: {
    width: "75%"
  },

  cssOutlinedInput: {
    "&$cssFocused $notchedOutline": {
      borderColor: `gray !important`
    }
  },

  cssFocused: {
    color: "black !important"
  },

  notchedOutline: {
    borderWidth: "1px",
    borderColor: "black !important"
  }
}));

const Login = props => {
  const { history, signIn } = props;
  const classes = useStyles();

  const handleLogin = event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    signIn({ email: email.value, password: password.value });
  };

  // const handleLogin = useCallback(
  //   async event => {
  //     event.preventDefault();
  //     const { email, password } = event.target.elements;
  //     try {
  //       await firebase
  //         .auth()
  //         .signInWithEmailAndPassword(email.value, password.value);
  //       history.push("/");
  //     } catch (error) {
  //       alert(error);
  //     }
  //   },
  //   [history]
  // );

  // if (currentUser) {
  //   return <Redirect to="/" />;
  // }

  return (
    <div>
      <h1>Log in</h1>
      <Paper className={classes.form}>
        <form onSubmit={handleLogin} className={classes.formContainer}>
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
                  focused: classes.cssFocused
                }
              }}
            />
          </div>
          <Button variant='contained' type='submit' className={classes.button}>
            Log In
          </Button>
          <p>Don't have an account yet? Sign up!</p>
        </form>
      </Paper>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    userSignInError: state.auth.userSignInError
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signIn: creds => dispatch(signIn(creds))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login));
