import { Container, Paper, Grid } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AvailableList, avList } from "../../content/homePage";
import CheckIcon from "@material-ui/icons/Check";
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
  iconList: {
    background: "none",
    margin: "10px 0",
    boxShadow: "none",
    float: "left",
    width: "100%",
    fontWeight: "300",
    color: "#999",
  },
  iconStyle: {
    color: "#1F2873",
    marginRight: "3px",
    float: "left",
  },
}));

function Available(pros) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        {AvailableList.map((elem, i) => {
          const { heading, subHeading, pic } = elem;
          return (
            <Grid
              spacing={3}
              key={(elem, i)}
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              <Grid item md={6}>
                <MainHeading heading={heading} subHeading={subHeading} />
                {avList.map((elem, i) => {
                  const { listText } = elem;
                  return (
                    <Paper key={(elem, i)} className={classes.iconList}>
                      <CheckIcon className={classes.iconStyle} />
                      {listText}
                    </Paper>
                  );
                })}
              </Grid>
              <Grid item md={6} data-aos="zoom-in-left">
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

export default Available;
