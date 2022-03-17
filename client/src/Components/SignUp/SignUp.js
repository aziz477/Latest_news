import React, { useState,useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Logo from  './siteLogo.jpg'
import axios from "axios";
import { withRouter } from "react-router-dom";



function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://www.facebook.com/aladdinebrahem/">
        3A Company
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function SignUp(props) {
  

  useEffect(()=>{
    if(localStorage.getItem('token')){
      window.location.replace('/');
    };
  });

  const classes = useStyles();
  const [name, setName] = useState("");
  const [pseudo, setPseudo] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword,setConfirmPassword] = useState('')

  // error message

  const [Errname, setErrname] = useState("");
  const [Errpseudo, setErrpseudo] = useState("");
  const [Erremail, setErremail] = useState("");
  const [Errpassword, setErrpassword] = useState("");


  function checkEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
  



 

  const adduser = () => {


    if (!checkEmail(email)) {
      return  setErremail('Adresse e-mail not valid');
    } 
  
    if(name==="" || name === null){
      return setErrname('Field name required');
    }
     if(pseudo==="" || pseudo===null){
     return setErrname('Field name required');
    }
     if(confirmPassword !== password){
    return setErrpassword('please confirm correctly your password')
    }
     if(password==='' || password===null){
     return setErrpassword('password field required')
    }

    else{
      axios
      .post("http://localhost:6800/users/add_user", { name, pseudo, email, password })
      .then((response) => {
        if (response.status === 200) {
          alert("New Account Added Succesfully");
         window.location.replace('/login')
        }
      })
      .catch((err) => {
        alert(err);
        setName("");
        setPseudo("");
        setEmail("");
        setPassword("");
      });
    }


 
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <img style={{ borderRadius: "50%", width: "70px" }}  src={Logo} />
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                onChange={(event) => setName(event.target.value)}
                value={name}
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="name"
                autoFocus
              />
               <div style={{backgroundColor:'pink'}}  >
                        <p style={{color:'red',textAlign:'center'}} >{Errname}</p>
                    </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="pseudo"
                onChange={(event) => setPseudo(event.target.value)}
                value={pseudo}
                autoComplete="lname"
              />
               <div style={{backgroundColor:'pink'}}  >
                        <p style={{color:'red',textAlign:'center'}} >{Errpseudo}</p>
                    </div>
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                onChange={(event) => setEmail(event.target.value)}
                value={email}
                autoComplete="email"
              />
               <div style={{backgroundColor:'pink'}}  >
                        <p style={{color:'red',textAlign:'center'}} >{Erremail}</p>
                    </div>
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                label="Password"
                type="password"
                id="password"
                onChange={(event) => setPassword(event.target.value)}
                value={password}
          
              />
               <div style={{backgroundColor:'pink'}}  >
                        <p style={{color:'red',textAlign:'center'}} >{Errpassword}</p>
                    </div>
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                label="Confirm password"
                type="password"
                id="password"
                onChange={(event) => setConfirmPassword(event.target.value)}
                value={confirmPassword}
              />
            </Grid>
            <Grid item xs={12}>
              <div>
                <br />
                <br />
              </div>
            </Grid>
          </Grid>
          <Button
            type="button"
            fullWidth
            variant="contained"
            color="primary"
            onClick={() => adduser()}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}
export default withRouter(SignUp);
