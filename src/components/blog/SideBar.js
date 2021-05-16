import React from "react";
import { Paper, makeStyles, Typography, Grid, Link } from "@material-ui/core";
import { Category, featuredPosts } from "../../content/BolgContent";
import { ftContent } from "../../content/homePage";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "0px 0",
  },
  blogOuter: {
    background: "none",
    float: "left",
    width: "100%",
    padding: "0px",
    boxShadow: "none",
  },
  heading: {
    fontWeight: "bold",
    color: "#1F2873",
    fontSize: "30px",
    textTransform: "capitalize",
  },
  blogLinkBox: {
    float: "left",
    width: "100%",
    padding: "0px 20px",
    boxShadow: "none",
    background: "none",
  },
  blogLink: {
    float: "left",
    color: "#000",
    fontSize: "16px",
    width: "100%",
    marginBottom: "10px",
    "&:hover": {
      color: "red",
    },
  },
  heading1: {
    fontWeight: "bold",
    color: "#1F2873",
    fontSize: "20px",
    textTransform: "capitalize",
  },
  subHeading: {
    fontWeight: "300",
    color: "#999",
    fontSize: "14px",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    width: "100%",
    float: "left",
  },
  outerImg: {
    height: "100%",
    width: "100%",
    boxShadow: "none",
  },
  imageStyle: {
    height: "100%",
    width: "100%",
    objectFit: "cover",
  },
  socialIcons: {
    margin: "0 auto",
    display: "table",
  },
  Slink: {
    color: "#fff",
    background: "rgba(173, 171, 244, 0.4)",
    fontSize: "14px",
    marginRight: "15px",
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
}));

function SideBar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item md={12}>
          <Paper className={classes.blogOuter}>
            <Typography variant="h3" gutterBottom className={classes.heading}>
              Category
            </Typography>
            <Paper
              className={classes.blogLinkBox}
              style={{ marginBottom: "15px" }}
            >
              {Category.map((cat, i) => {
                const { CatLicks } = cat;

                return (
                  <Link to="/" className={classes.blogLink} key={(cat, i)}>
                    {CatLicks}
                  </Link>
                );
              })}
            </Paper>
            <Typography variant="h3" gutterBottom className={classes.heading}>
              Trending Post
            </Typography>
            {featuredPosts.map((post, i) => {
              const { pic, title, paragraph } = post;
              return (
                <Grid
                  container
                  spacing={2}
                  key={(post, i)}
                  style={{ marginBottom: "15px" }}
                >
                  <Grid item xs={3}>
                    <Paper className={classes.outerImg}>
                      <img
                        src={pic}
                        alt="tPhoto"
                        className={classes.imageStyle}
                      />
                    </Paper>
                  </Grid>
                  <Grid item xs={9}>
                    <Typography
                      variant="h3"
                      gutterBottom
                      className={classes.heading1}
                    >
                      <Link to="/" className={classes.heading1}>
                        {title}
                      </Link>
                    </Typography>
                    <Typography
                      variant=" subtitle1"
                      gutterBottom
                      className={classes.subHeading}
                    >
                      {paragraph}
                    </Typography>
                  </Grid>
                </Grid>
              );
            })}
            <Typography variant="h3" gutterBottom className={classes.heading}>
              Follow Us
            </Typography>
            {ftContent.map((elem, i) => {
              const { icon, link } = elem;
              return (
                <Link className={classes.Slink} to={link} key={(elem, i)}>
                  <i className={icon}></i>
                </Link>
              );
            })}
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default SideBar;
