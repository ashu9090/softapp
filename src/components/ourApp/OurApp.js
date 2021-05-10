import React from "react";
import Slider from "react-slick";
import {
  makeStyles,
  Grid,
  Container,
  Paper,
  Typography,
} from "@material-ui/core";
import imageName from "../../assets/images/appbg.png";
import imageApp from "../../assets/images/pn-bg.png";

import { ourApp, sliderContent } from "../../content/homePage";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "216px 0 360px 0",
    marginTop: "-150px",
    backgroundImage: "url(" + imageName + ")",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom center",
    backgroundSize: "cover",
  },
  paper: {
    padding: theme.spacing(0),
    textAlign: "center",
    background: "none",
    boxShadow: "none",
    color: "#fff",
    marginBottom: "60px",
  },
  counterTittle: {
    fontWeight: "600",
    fontSize: "38px",
  },
  counterSubTittle: {
    fontWeight: "400",
    fontSize: "18px",
  },
  outerPic: {
    padding: "10px",
  },
  slidePic: {
    width: "100%",
  },
  slickList: {
    background: "url(" + imageApp + ")",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "contain",
  },
}));

function OurApp() {
  const classes = useStyles();

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };

  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <Grid spacing={3} container>
          <Grid item xs={12}>
            {ourApp.map((elm, i) => {
              const { heading, subHeading } = elm;
              return (
                <Paper className={classes.paper}>
                  <Typography
                    variant="h3"
                    gutterBottom
                    className={classes.counterTittle}
                  >
                    {heading}
                  </Typography>
                  <Typography
                    variant="h4"
                    gutterBottom
                    className={classes.counterSubTittle}
                  >
                    {subHeading}
                  </Typography>
                </Paper>
              );
            })}
          </Grid>
          <Grid item xs={12}>
            <Slider {...settings} className={classes.slickList}>
              {sliderContent.map((elm, i) => {
                const { pic } = elm;
                return (
                  <div className={classes.outerPic} key={(elm, i)}>
                    <img
                      src={pic}
                      alt="slide-app"
                      className={classes.slidePic}
                    />
                  </div>
                );
              })}
            </Slider>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default OurApp;
