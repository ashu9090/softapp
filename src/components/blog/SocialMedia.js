import React from "react";
import { makeStyles, Grid, Paper, Link } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: "20px",
    boxShadow: "0 5px 15px #ccc",
    borderRadius: "8px",
    marginTop: "20px",
  },
  sTagsList: {
    color: "#000",
    boxShadow: "none",
  },
  tagCover: {
    background: "#1f2873",
    border: "1px solid #1f2873",
    padding: "4px 15px 8px 15px",
    borderRadius: "100px",
    color: "#fff",
    marginRight: "10px",
    "&:hover": {
      background: "#fff",
      color: "#1f2873",
    },
  },
  sIconsOuter: {
    float: "right",
    boxShadow: "none",
  },
  sIconsBox: {
    marginLeft: "10px",
    color: "#1f2873",
    fontSize: "20px",
  },
}));

function SocialMedia(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item md={6}>
          <Paper className={classes.sTagsList}>
            <Link to="/" className={classes.tagCover}>
              {props.sTags1}
            </Link>
            <Link to="/" className={classes.tagCover}>
              {props.sTags2}
            </Link>
          </Paper>
        </Grid>
        <Grid item md={6}>
          <Paper className={classes.sIconsOuter}>
            <Link to="/" className={classes.sIconsBox}>
              <i className={props.facebook}></i>
            </Link>
            <Link to="/" className={classes.sIconsBox}>
              <i className={props.twitter}></i>
            </Link>
            <Link to="/" className={classes.sIconsBox}>
              <i className={props.linkedin}></i>
            </Link>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default SocialMedia;
