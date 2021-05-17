import React from "react";
import Slider from "react-slick";
import {
  Container,
  Typography,
  Paper,
  Grid,
  makeStyles,
} from "@material-ui/core";
import { ClientsList, clientCard } from "../../content/homePage";
import MainHeading from "../mainHeading/MainHeading";
const useStyles = makeStyles((theme) => ({
  root: {
    padding: "80px 0",
  },
  paper: {
    padding: theme.spacing(0),
    textAlign: "center",
    background: "none",
    boxShadow: "none",
    marginBottom: "60px",
  },

  counterTittle: {
    fontWeight: "600",
    fontSize: "38px",
    color: "#1f2873",
    textAlign: "center",
  },
  counterSubTittle: {
    fontWeight: "400",
    fontSize: "18px",
    color: "#111",
  },
  outerPic: {
    textAlign: "center",
    background: "#fff",
    boxShadow: "0px 0px 27px #ccc",
    padding: "20px",
    width: "96% !important",
    margin: "50px 0 50px 2%",
    borderRadius: "6px",
  },
  criImage: {
    display: "table",
    boxShadow: "none",
    margin: "-68px auto 35px",
    borderRadius: "100px",
    height: "100px",
    width: " 100px",
    overflow: "hidden",
    padding: "10px",
    background: " linear-gradient(to bottom, #D684B7, #9C72F0);",
  },
  testWord: {
    color: "#999",
    fontSize: "16px",
    marginBottom: "10px",
  },

  testName: {
    color: "#1f2873",
    marginBottom: "10px",
    fontWeight: "400",
    fontSize: "18px",
    textTransform: "uppercase",
  },
  Date: {
    color: "#999",
    fontSize: "16px",
    marginBottom: "10px",
  },
  slickList: {
    "& .slick-arrow": {
      width: "40px",
      height: "40px",
    },
  },
}));
function Clients() {
  const classes = useStyles();
  var settings = {
    dots: true,
    speed: 500,
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <Grid spacing={4} container>
          {ClientsList.map((elm, i) => {
            const { heading, subHeading } = elm;
            return (
              <Grid
                item
                xs={12}
                key={(elm, i)}
                container
                direction="row"
                justify="center"
                alignItems="flex-start"
              >
                <Grid item md={6}>
                  <Paper className={classes.paper}>
                    <MainHeading heading={heading} subHeading={subHeading} />
                  </Paper>
                </Grid>
              </Grid>
            );
          })}
          <Grid item xs={12}>
            <Slider {...settings} className={classes.slickList}>
              {clientCard.map((elm, i) => {
                const { pic, textWord, name, date, stars } = elm;
                return (
                  <div className={classes.outerPic} key={(elm, i)}>
                    <Paper className={classes.criImage}>
                      <img
                        src={pic}
                        alt="slide-app"
                        className={classes.slidePic}
                      />
                    </Paper>
                    <i
                      className="fas fa-quote-left"
                      style={{
                        color: "#1c8ef4",
                        fontSize: "30px",
                      }}
                    ></i>

                    <Typography
                      variant="subtitle1"
                      gutterBottom
                      className={classes.testWord}
                    >
                      {textWord}
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                      {stars.map((line) => (
                        <i
                          key={line}
                          className={stars}
                          style={{ color: "#ed472f", margin: "0 5px" }}
                        ></i>
                      ))}
                    </Typography>
                    <Typography
                      variant="h5"
                      gutterBottom
                      className={classes.testName}
                    >
                      {name}
                    </Typography>
                    <Typography
                      variant="h6"
                      gutterBottom
                      className={classes.Date}
                    >
                      {date}
                    </Typography>
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

export default Clients;
