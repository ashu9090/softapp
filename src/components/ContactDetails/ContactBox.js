import React from "react";
import {
  makeStyles,
  Grid,
  Paper,
  Typography,
  Container,
  TextField,
  Button,
  TextareaAutosize,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: "60px",
  },
  heading: {
    fontWeight: "bold",
    color: "#1F2873",
    fontSize: "26px",
    textTransform: "capitalize",
  },
  subTitle: {
    float: "left",
    color: "#000",
    fontSize: "16px",
    width: "100%",
    marginBottom: "20px",
    "&:hover": {
      color: "red",
    },
  },
  inputBox: {
    float: "left",
    width: "100%",
    background: "#fff",
    boxShadow: "0 5px 15px #ccc",
    "& .MuiInputBase-root": {
      borderRadius: "0px",
      float: "left",
      width: "100%",
      borderBottom: "none",
      "& .MuiInputBase-input": {
        padding: "15px",
        fontSize: "16px",
      },
    },
    "& .MuiInput-underline:before, & .MuiInput-underline:after": {
      display: "none",
      boxShadow: "none !important",
      outline: "none !important",
      borderBottom: "none !important",
    },
  },
  textAreaBox: {
    padding: "15px",
    fontSize: "16px",
    float: "left",
    border: "none",
    width: "100% !important",
    height: "200px !important",
    fontFamily: "'Roboto', sans-serif",
    color: "#555",
  },
  SubmitButton: {
    background: "#ed472f",
    color: "#fff",
    fontSize: "14px",
    padding: "10px 30px",
    marginTop: "15px",
    borderRadius: "0px",
    "&:hover": {
      background: "#1f2873",
      color: "#fff",
    },
  },
}));
function ContactBox() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item md={6}>
            <Typography variant="h3" gutterBottom className={classes.heading}>
              Phone Number
            </Typography>
            <Typography
              variant="sutitle2"
              gutterBottom
              className={classes.subTitle}
            >
              0123654789
            </Typography>
            <Typography variant="h3" gutterBottom className={classes.heading}>
              Email
            </Typography>
            <Typography
              variant="sutitle2"
              gutterBottom
              className={classes.subTitle}
            >
              admin@gmail.com
            </Typography>
            <Typography variant="h3" gutterBottom className={classes.heading}>
              Address
            </Typography>
            <Typography
              variant="sutitle2"
              gutterBottom
              className={classes.subTitle}
            >
              demo address 12364 pin
            </Typography>
          </Grid>
          <Grid item md={6}>
            <Paper className={classes.mapBox}>
              {/* <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59851659.083995014!2d62.39970776507416!3d23.709716875698597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3663f18a24cbe857%3A0xa9416bfcd3a0f459!2sAsia!5e0!3m2!1sen!2sin!4v1621174059541!5m2!1sen!2sin"
                width="600"
                height="450"
                style="border:0;"
                allowfullscreen=""
                loading="lazy"
              ></iframe> */}
            </Paper>
          </Grid>

          <Grid item md={12}>
            <Typography variant="h3" gutterBottom className={classes.heading}>
              Send Message
            </Typography>
            <form className={classes.formBoz} noValidate autoComplete="off">
              <Grid container spacing={2}>
                <Grid item md={6}>
                  <TextField
                    id="name"
                    placeholder="Your Name"
                    className={classes.inputBox}
                  />
                </Grid>
                <Grid item md={6}>
                  <TextField
                    id="email"
                    placeholder="Your Email"
                    className={classes.inputBox}
                  />
                </Grid>
                <Grid item md={12}>
                  <div className={classes.inputBox}>
                    <TextareaAutosize
                      placeholder="Your Message"
                      rowsMax={4}
                      className={classes.textAreaBox}
                    />
                  </div>
                  <Button className={classes.SubmitButton}>SEND </Button>
                </Grid>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default ContactBox;
