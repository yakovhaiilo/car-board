import React, { useState, useEffect } from "react";
import axios from "axios";
import { Redirect } from 'react-router';
import { Link } from "react-router-dom";

// MUI
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Grid,
  Typography,
  Container,
} from "@material-ui/core";
import useStyles from "./useStyle";

export default function R(props) {
  const classes = useStyles();
  const [password, setUserPassword] = useState("");
  const [email, setUserEmail] = useState("");
  const [SpinerHidden, setSpinerHidden] = useState(false);
  const [signUp, setSignUp] = useState(false);
  const user = { email, password };
  

  useEffect(() => {  
    return () => {
     setSignUp(false);
    }
  }, [])

  function handleSubmit(e) {
    e.preventDefault(); 
    setSpinerHidden(true)
    axios.post("/api/user/register", user).then((res) =>{
        if(res.status === 201){
          console.log(res.data)
          setSpinerHidden(false)
          setSignUp(true);

        }else {
          setSpinerHidden(false)
        }
        
   }).catch(err =>{
    setSpinerHidden(false)
     console.log(err);
   })
  }

  if(props.token !== null) {
    return <Redirect  to = '/cars' />
  }
  if(signUp){
    return <Redirect  to = '/login' />
  }
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}></Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={(e) => setUserEmail(e.target.value)}
            value={email}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={(e) => setUserPassword(e.target.value)}
            value={password}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSubmit}
          >
            Sign up
          </Button>
          <Grid container>
            <Grid item>
              <Link to="/login" variant="body2">
                {"have an account? Sign in"}
              </Link>
            </Grid>
          </Grid>
        </form>
        {SpinerHidden ?  <p>loading......</p> : null }
      </div>
    </Container>
  );
}






















// function Register() {
//   const [password , setUserPassword] = useState("");
//   const [email , setUserEmail] = useState("");
//   const user = { email , password };

//   function handlesubmit(e) {
//     e.preventDefault(); 
//     axios.post("/api/user/register", user).then((res) =>{
//           console.log(res.data)
//     });
//   }

//   return (
//     <div className="App">
//       <h1>this is regitration page</h1>

//       <form>
//         <div className = "form-group">
//           <label htmlFor="email">Email : </label>
//           <input 
//           type = "email"
//           className = "form-control"
//           name = "username" 
//           onChange={(e) => setUserEmail(e.target.value)}
//             />
//         </div>
//         <div className = "form-group">
//           <label htmlFor = "password">Password : </label>
//           <input
//            type= "password" 
//            className = "form-control"
//            name = "password"
//            onChange={(e) => setUserPassword(e.target.value)}
//              />
//         </div>
//         <button
//          type="submit"
//          className="btn btn-dark"
//          onClick = {handlesubmit}
//           >
//           Register
//         </button>
//       </form>
//     </div>
//   );
// }

// export default Register;
