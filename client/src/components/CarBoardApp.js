import React from "react";
import CarForm from "./CarForm";
import { Toolbar, AppBar, Paper, Typography } from "@material-ui/core";

function CarBoardApp() {
  return (
    <Paper
      style={{
        padding: 0,
        margin: 0,
        height: "100vh",
        backgroundColor: "#fafafa",
      }}
      elevation={0}
    >
      <AppBar color="primary" position="static" style={{ height: "64px" }}>
        <Toolbar>
          <Typography color="inherit"> car board </Typography>
        </Toolbar>
      </AppBar>
      <CarForm />
    </Paper>
  );
}

export default CarBoardApp;
