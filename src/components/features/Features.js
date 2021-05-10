import React from "react";
import {
  makeStyles,
  Grid,
  Container,
  Paper,
  Typography,
} from "@material-ui/core";
import { Feature, FeatHeading } from "../../content/homePage";
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
    color: "#999",
  },
  iconHeading: {
    fontWeight: "bold",
    color: "#1F2873",
  },
  iconBox: {
    width: "100%",
    boxShadow: "none",
    background: "none",
    marginTop: "15px",
  },
  iconImage: {
    width: "100px",
  },
  iconSubText: {
    fontWeight: "300",
    color: "#999",
  },
}));

function Features() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container max-width="md">
        {FeatHeading.map((elem, i) => {
          const { heading, subHeading, pic } = elem;
          return (
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              spacing={6}
              key={(elem, i)}
            >
              <Grid item md={6}>
                <Paper
                  className={classes.appImage}
                  data-aos="zoom-in-right"
                  data-aos-duration="1000"
                >
                  <img
                    src={pic}
                    alt="features"
                    className={classes.imageStyle}
                  />
                </Paper>
              </Grid>
              <Grid item md={6}>
                <MainHeading heading={heading} subHeading={subHeading} />
                <Grid container spacing={2}>
                  {Feature.map((elem, i) => {
                    const { pic, title, paragraph } = elem;
                    return (
                      <Grid item md={6} key={(elem, i)}>
                        <Paper className={classes.iconBox}>
                          <img
                            src={pic}
                            alt="iconImage"
                            className={classes.iconImage}
                          />
                        </Paper>

                        <Typography
                          variant="h5"
                          gutterBottom
                          className={classes.iconHeading}
                        >
                          {title}
                        </Typography>
                        <Typography
                          variant="subtitle2"
                          gutterBottom
                          className={classes.iconSubText}
                        >
                          {paragraph}
                        </Typography>
                      </Grid>
                    );
                  })}
                </Grid>
              </Grid>
            </Grid>
          );
        })}
      </Container>
    </div>
  );
}

export default Features;
