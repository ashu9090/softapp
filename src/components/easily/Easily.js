import React from "react";
import { Container, Paper, Grid, makeStyles } from "@material-ui/core";
import CheckIcon from "@material-ui/icons/Check";
import { EasilyText, easilyList } from "../../content/homePage";
import MainHeading from "../mainHeading/MainHeading";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: "60px 0",
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
    color: "#333",
    marginBottom: "20px",
  },
  iconList: {
    background: "none",
    marginBottom: "10px",
    boxShadow: "none",
    float: "left",
    width: "100%",
    fontWeight: "300",
    color: "#333",
  },
  iconStyle: {
    color: "#1F2873",
    marginRight: "3px",
    float: "left",
  },
}));

function Easily() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container maxWidth="xl">
        {EasilyText.map((elem, i) => {
          const { heading, subHeading, pic1, pic2 } = elem;
          return (
            <Grid
              spacing={3}
              key={(elem, i)}
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              <Grid item md={5} data-aos="fade-down-right">
                <Paper className={classes.appImage}>
                  <img
                    src={pic1}
                    alt="features"
                    className={classes.imageStyle}
                  />
                </Paper>
              </Grid>
              <Grid item md={5}>
                <MainHeading heading={heading} subHeading={subHeading} />

                {easilyList.map((elem, i) => {
                  const { listText } = elem;
                  return (
                    <Paper key={(elem, i)} className={classes.iconList}>
                      <CheckIcon className={classes.iconStyle} />
                      {listText}
                    </Paper>
                  );
                })}
              </Grid>
              <Grid item md={2} data-aos="fade-down-left">
                <Paper className={classes.appImage}>
                  <img
                    src={pic2}
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

export default Easily;
