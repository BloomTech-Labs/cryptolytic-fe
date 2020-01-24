import React, { useCallback } from "react";
import { withRouter } from "react-router";
import app from "./base";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const SignUp = ({ history }) => {




  const useStyles = makeStyles(theme => ({
    
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: 200,
        backgroundColor: "#4EB9FF",
      },
      color: "#4EB9FF",

    },
  }));
  
  
  
  const classes = useStyles();
  


  
  const handleSignUp = useCallback(async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      await app
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
      history.push("/");
    } catch (error) {
      alert(error);
    }
  }, [history]);

  return (
    <div className="signupForm">
      <h1>Sign up</h1>
      <form className={classes.root} onSubmit={handleSignUp}>
       <div className="emailField">
          <TextField name="email" label="Email" type="email"  variant="filled"  />
        </div>
           <div className="passField">
          <TextField name="password" label="Password" type="password"  variant="filled" />
        </div>
      
        <Button variant="contained" color="blue" type="submit">Sign Up</Button>
        
      </form>
    </div>
  );
};

export default withRouter(SignUp);
