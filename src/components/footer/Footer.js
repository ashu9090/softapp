import React from "react";
import {
  makeStyles,
  Grid,
  Paper,
  Typography,
  Container,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo-2.png";
import ftBg from "../../assets/images/footer-bg-1.png";
import { ftContent } from "../../content/homePage";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: "60px",
    backgroundImage: "url(" + ftBg + ")",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top center",
    backgroundSize: "cover",
  },
  Logo: {
    textAlign: "center",
    background: "none",
    boxShadow: "none",
    marginBottom: "20px",
  },
  outerNav: {
    margin: "0 auto 25px",
    display: "table",
  },
  link: {
    color: "#fff",
    fontSize: "14px",
    textTransform: "uppercase",
    margin: "0 25px",
    textDecoration: "none",
    fontWeight: "400",

    "&:hover": {
      color: "#000",
    },
    "&:active": {
      color: "#000",
    },
  },
  socialIcons: {
    margin: "0 auto",
    display: "table",
  },
  Slink: {
    color: "#fff",
    background: "rgba(173, 171, 244, 0.4)",
    fontSize: "14px",
    margin: "0 25px",
    height: "40px",
    width: "40px",
    textAlign: "center",
    borderRadius: "100px",
    display: "inline-block",
    lineHeight: "40px",

    "&:hover": {
      color: "#000",
    },
    "&:active": {
      color: "#000",
    },
  },
  copyRight: {
    background: "none",
    textAlign: "center",
    fontSize: "12px",
    boxShadow: "none",
    color: "#fff",
    marginTop: "40px",
    padding: "13px 0",
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth="sm">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.Logo}>
              <img src={logo} alt="logo" />
            </Paper>
            <Typography className={classes.outerNav}>
              <Link className={classes.link} to="/">
                Home
              </Link>
              <Link className={classes.link} to="/about">
                About
              </Link>
              <Link className={classes.link} to="/feature">
                Features
              </Link>
              <Link className={classes.link} to="/blog">
                Blog
              </Link>
              <Link className={classes.link} to="/contact">
                Contact
              </Link>
            </Typography>

            <Typography className={classes.socialIcons}>
              {ftContent.map((elem, i) => {
                const { icon, link } = elem;
                return (
                  <Link className={classes.Slink} to={link} key={(elem, i)}>
                    <i className={icon}></i>
                  </Link>
                );
              })}
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <Paper className={classes.copyRight}>
        @copy Copy right ashu. All Rights Reserved
      </Paper>
    </div>
  );
}
