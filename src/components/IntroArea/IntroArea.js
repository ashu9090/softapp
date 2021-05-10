import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography, Paper, Grid, Link } from "@material-ui/core";
import { inofBox } from "../../content/homePage";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: "60px 0",
  },

  introBox: {
    padding: "20px 10px",
    textAlign: "center",
    background: "rgba(240, 245, 251, 0.8)",
    boxShadow: "5px 7px 27px #ccc",
  },
  boxImage: {
    width: "120px",
    height: "120px",
    margin: "0 auto 20px",
    display: "table",
  },
  introHeading: {
    fontSize: "20px",
    fontWeight: "700",
    color: "#1F2873",
  },
}));

function IntroArea() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <Grid
          spacing={3}
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          {inofBox.map((elem, i) => {
            const { pic, heading } = elem;
            return (
              <Grid item md={3} key={(elem, i)}>
                <Paper className={classes.introBox}>
                  <img src={pic} alt="infoPic" className={classes.boxImage} />
                  <Link to="/">
                    <Typography
                      variant="h3"
                      gutterBottom
                      className={classes.introHeading}
                    >
                      {heading}
                    </Typography>
                  </Link>
                </Paper>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </div>
  );
}

export default IntroArea;
