import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import logo from "../../assets/images/logo.png";
import { Typography } from "@material-ui/core";
import { Link, NavLink } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: "#fff",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  link: {
    color: "#1F2873",
    fontSize: "14px",
    textTransform: "uppercase",
    marginLeft: "15px",
    textDecoration: "none",
    fontWeight: "bold",
    "&:hover": {
      color: "#000",
    },
    "&:active": {
      color: "#000",
    },
  },
}));

function Header() {
  const classes = useStyles();
  return (
    <AppBar position="sticky" className={classes.root}>
      <Toolbar className={classes.toolbar}>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <Typography>
          <NavLink
            className={classes.link}
            to="/"
            exact
            activeClassName="selected"
            activeStyle={{
              fontWeight: "bold",
              color: "red",
            }}
          >
            Home
          </NavLink>
          <NavLink
            exact
            className={classes.link}
            to="/about"
            activeClassName="selected"
            activeStyle={{
              fontWeight: "bold",
              color: "red",
            }}
          >
            About
          </NavLink>
          <NavLink
            exact
            className={classes.link}
            to="/feature"
            activeClassName="selected"
            activeStyle={{
              fontWeight: "bold",
              color: "red",
            }}
          >
            Features
          </NavLink>
          <NavLink
            exact
            className={classes.link}
            to="/blog"
            activeClassName="selected"
            activeStyle={{
              fontWeight: "bold",
              color: "red",
            }}
          >
            Blog
          </NavLink>
          <NavLink
            exact
            className={classes.link}
            to="/contact"
            activeClassName="selected"
            activeStyle={{
              fontWeight: "bold",
              color: "red",
            }}
          >
            Contact
          </NavLink>
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
