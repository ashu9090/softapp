import React from "react";
import {
  makeStyles,
  Grid,
  Paper,
  Container,
  TextField,
  Button,
} from "@material-ui/core";

import { Notif } from "../../content/homePage";
import MainHeading from "../mainHeading/MainHeading";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "60px 0",
    background: "#f0f5fb",
  },
  appImage: {
    width: "100%",
    minHeight: "300px",
    boxShadow: "none",
    background: "none",
  },
  imageStyle: {
    width: "100%",
  },
  heading: {
    fontWeight: "bold",
    color: "#1F2873",
    fontSize: "clamp(1.5rem, 5vw, 2.375rem)",
  },
  subHeading: {
    fontWeight: "300",
    color: "#999",
  },
  NotiMail: {
    marginTop: "20px",
    background: "#fff",
    padding: "4px",
    borderRadius: "4px",
    boxShadow: "5px 7px 27px rgba(0, 0, 0, 0.06)",
    "& .MuiTextField-root": {
      width: "100%",
      "& .MuiInputBase-input": {
        width: "100%",
        padding: "15px 10px",
        border: "none",
        boxShadow: "none !important",
        outline: "none",
      },
      "& .MuiInputBase-input:hover": {
        border: "none",
        boxShadow: "none !important",
        outline: "none",
      },
    },
  },

  SubmitButton: {
    background: "#ed472f",
    color: "#fff",
    fontSize: "14px",
    padding: "10px 30px",
    position: "absolute",
    right: "0",
    top: "0",
  },
}));

function Notification() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
        {Notif.map((elm, i) => {
          const { heading, subHeading, pic } = elm;
          return (
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <MainHeading heading={heading} subHeading={subHeading} />

                <form
                  className={classes.NotiMail}
                  noValidate
                  autoComplete="off"
                >
                  <div style={{ position: "relative" }}>
                    <TextField id="standard-basic" placeholder="Your Email" />
                    <Button className={classes.SubmitButton}>Subscribe</Button>
                  </div>
                </form>
              </Grid>
              <Grid item xs={6} data-aos="fade-left">
                <Paper className={classes.appImage}>
                  <img
                    src={pic}
                    alt="features"
                    className={classes.imageStyle}
                  />
                </Paper>
              </Grid>
            </Grid>
          );
        })}
      </Container>
    </div>
  );
}

export default Notification;
