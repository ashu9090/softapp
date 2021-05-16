import React from "react";
import { makeStyles, Container, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import NavigateNextOutlinedIcon from "@material-ui/icons/NavigateNextOutlined";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: "500px",
    padding: "10% 0px",
    textAlign: "center",
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    // background: "#4e54c8" /* fallback for old browsers */,
    // background:
    //   "-webkit-linear-gradient(to right, #8f94fb, #4e54c8)" /* Chrome 10-25, Safari 5.1-6 */,
    background:
      "linear-gradient(to right, #8f94fb, #4e54c8)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */,
  },
  heading: {
    fontWeight: "bold",
    color: "#1F2873",
  },
  bNav: {
    color: "#fff",
    fontSize: "18px",
    marginRight: "10px",
  },
}));

function InnerBanner(props) {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <Container>
          <Typography variant="h2" gutterBottom className={classes.heading}>
            {props.Bannertext}
          </Typography>
          <Typography className={classes.bNav} variant="6">
            <Link to="/" className={classes.bNav}>
              Home
            </Link>
            <NavigateNextOutlinedIcon className={classes.bNav} />
            {props.Bannertext}
          </Typography>
        </Container>
      </div>
    </>
  );
}

export default InnerBanner;
