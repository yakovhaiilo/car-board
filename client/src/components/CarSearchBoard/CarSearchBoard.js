import React from "react";
import { Toolbar, AppBar, Paper, Typography } from "@material-ui/core";
import CarForm from "../CarForm/CarForm";

function CarSearchBoard() {
  return (
    <div>
    <Paper elevation={0}>
      <AppBar color="primary" position="static" style={{ height: "64px" }}>
        <Toolbar>
          <Typography color="inherit"> car board </Typography>
        </Toolbar>
      </AppBar>
    </Paper>
    <CarForm />  
    </div>
  );
}

export default CarSearchBoard;
