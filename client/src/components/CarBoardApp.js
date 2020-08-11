import React from "react";
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid'; 
import CarSerch from './CarSerch';


function CarBoardApp() {
 

  return (
    <Paper style = {{
      padding: 0,
      margin:0,
      height: '100vh',
      backgroundColor: '#fafafa'
    }}
    elevation ={0}>
      <AppBar color ='primary' position='static' style ={{height: '64px'}}>
         <Toolbar>
             <Typography color = 'inherit'> car board </Typography>
         </Toolbar>
      </AppBar>
      <Grid container >
        <Grid item xs ={11} md = {8} lg = {6} style = {{
      padding: 40,
      margin:40,
      height: '20vh'
    }} >
        <CarSerch/>
      </Grid>
      </Grid>
     
    </Paper>
  );
}

export default CarBoardApp;


// CarBoardApp
  //  CarSerch
  // CarTable