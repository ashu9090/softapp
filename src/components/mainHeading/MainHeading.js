import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  heading: {
    fontWeight: "bold",
    color: "#1F2873",
    fontSize: "clamp(1.5rem, 5vw, 2.375rem)",
  },
  subHeading: {
    fontWeight: "300",
    color: "#999",
  },
}));
function MainHeading(props) {
  const classes = useStyles();
  return (
    <>
      <Typography variant="h3" gutterBottom className={classes.heading}>
        {props.heading}
      </Typography>
      <Typography
        variant="subtitle1"
        gutterBottom
        className={classes.subHeading}
      >
        {props.subHeading}
      </Typography>
    </>
  );
}

export default MainHeading;
