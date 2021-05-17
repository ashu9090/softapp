import React from "react";
import {
  makeStyles,
  Drawer,
  AppBar,
  Toolbar,
  Typography,
  Button,
  List,
} from "@material-ui/core";

import clsx from "clsx";
// import MenuIcon from "@material-ui/icons/Menu";
import logo from "../../assets/images/logo.png";

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
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  menuButton: {
    width: "40px",
  },
  dLink: {
    display: "flex",
    flexDirection: "column",
    "& a": {
      padding: "10px",
      marginBottom: "2px",
    },
  },
}));

function Header() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false,
  });
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List className={classes.dLink}>
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
      </List>
    </div>
  );

  return (
    <>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button
            className={classes.menuButton}
            onClick={toggleDrawer(anchor, true)}
          >
            {anchor}
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
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
    </>
  );
}

export default Header;
