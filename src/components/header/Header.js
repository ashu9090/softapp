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
import useMediaQuery from "@material-ui/core/useMediaQuery";
import MenuIcon from "@material-ui/icons/Menu";
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
    float: "right",
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
  const matches = useMediaQuery("(min-width: 600px)");
  const [right, setRight] = React.useState(false);
  const toggleDrawer = (open) => {
    setRight(open);
  };

  const list = () => (
    <div
      role="presentation"
      onClick={() => toggleDrawer(false)}
      onKeyDown={() => toggleDrawer(false)}
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
      {matches ? (
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
      ) : (
        <React.Fragment>
          <Button
            className={classes.menuButton}
            onClick={() => toggleDrawer(true)}
          >
            <MenuIcon />
          </Button>
          <Link to="/" className={classes.mobLogo}>
            <img src={logo} alt="logo" />
          </Link>
          <Drawer
            anchor="left"
            open={right}
            onClose={() => toggleDrawer(false)}
          >
            {list()}
          </Drawer>
        </React.Fragment>
      )}
    </>
  );
}

export default Header;
