import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid, Paper, Typography } from "@material-ui/core";
import hcbgImage from "../../assets/images/bg-3.png";
import { Link } from "react-router-dom";
import { HeroText } from "../../content/homePage";

const useStyles = makeStyles((theme) => ({
  herobanner: {
    flexGrow: 1,
    padding: "10% 0",
    backgroundImage: "url(" + hcbgImage + ")",
    color: "#f5f5f5",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "100% 100%",
    height: "100vh",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      backgroundSize: "cover",
    },
    [theme.breakpoints.up("sm")]: {
      backgroundSize: "cover",
    },
  },
  appImage: {
    width: "100%",
    boxShadow: "none",
    background: "none",
    [theme.breakpoints.down("sm")]: {
      height: "200px",
      margin: "0 auto",
      display: "table",
    },
    [theme.breakpoints.up("md")]: {
      height: "300px",
    },
    [theme.breakpoints.up("lg")]: {
      height: "400px",
    },
  },
  imageStyle: {
    width: "100%",
    height: "100%",
    ObjectFit: "cover",
  },
  heading: {
    fontWeight: "bold",
    color: "#1F2873",
    fontSize: "clamp(1.5rem, 5vw, 4rem)",
  },
  subHeading: {
    fontWeight: "300",
    color: "#999",
    marginBottom: "25px",
  },
  btnLink: {
    background: "#8e6dfd",
    borderRadius: "4px",
    display: "inline-block",
    width: "100%",
    padding: "10px 30px",
    textAlign: "center",
    "&:hover": {
      background: "#000",
    },
  },
}));

function HeroBanner(props) {
  //const [items] = useState(HeroText);
  const classes = useStyles();

  return (
    <div className={classes.herobanner}>
      <Container max-width="md">
        {HeroText.map((elem, i) => {
          const { title, subtitle, pic, appStore, google } = elem;
          return (
            <Grid
              key={(elem, i)}
              container
              direction="row"
              justify="space-between"
              alignItems="center"
              spacing={2}
            >
              <Grid item md={6}>
                <Paper
                  className={classes.appImage}
                  data-aos="fade-right"
                  data-aos-duration="1000"
                >
                  <img src={pic} alt="apphero" className={classes.imageStyle} />
                </Paper>
              </Grid>
              <Grid item md={6}>
                <Typography
                  variant="h2"
                  component="h2"
                  gutterBottom
                  className={classes.heading}
                  data-aos="fade-right"
                >
                  {title}
                </Typography>
                <Typography
                  variant="subtitle1"
                  gutterBottom
                  className={classes.subHeading}
                  data-aos="fade-right"
                >
                  {subtitle}
                </Typography>

                <Grid container spacing={0}>
                  <Grid item xs={12} md={10} lg={8}>
                    <Grid
                      container
                      spacing={2}
                      data-aos="fade-right"
                      data-aos-duration="2000"
                    >
                      <Grid item xs={6}>
                        <Link to="/" className={classes.btnLink}>
                          <img
                            src={google}
                            alt="pic"
                            className={classes.imageStyle}
                          />
                        </Link>
                      </Grid>
                      <Grid item xs={6}>
                        <Link to="/" className={classes.btnLink}>
                          <img
                            src={appStore}
                            alt="pic"
                            className={classes.imageStyle}
                          />
                        </Link>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          );
        })}
      </Container>
    </div>
  );
}

export default HeroBanner;
