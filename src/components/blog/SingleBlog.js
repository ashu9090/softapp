import React from "react";
import { useParams, Link } from "react-router-dom";
import {
  Paper,
  makeStyles,
  Typography,
  Grid,
  Container,
} from "@material-ui/core";
import { featuredPosts } from "../../content/BolgContent";
import SocialMedia from "./SocialMedia";
import SideBar from "./SideBar";
import Comments from "./Comments";
const useStyles = makeStyles((theme) => ({
  root: {
    padding: "60px 0",
  },
  blogOuter: {
    padding: "0px",
    boxShadow: "none",
    marginBottom: "20px",
  },
  blogImage: {
    height: "500px",
    width: "100%",
    boxShadow: "none",
  },
  imageStyle: {
    height: "100%",
    width: "100%",
    objectFit: "cover",
  },
  blogTextBox: {
    padding: "15px",
  },
  heading: {
    fontWeight: "bold",
    color: "#1F2873",
    fontSize: "clamp(1.5rem, 5vw, 2.375rem)",
    textTransform: "capitalize",
  },
  subHeading: {
    fontWeight: "300",
    color: "#999",
  },
  readMore: {
    fontWeight: "bold",
    color: "#1F2873",
    fontSize: "18px",
    textTransform: "capitalize",
  },
  tagsList: {
    display: "flex",
    listStyle: "none",
    padding: "0px",
  },
  liList: {
    marginRight: "10px",
    marginBottom: "15px",
    color: "#1f2873",
    fontWeight: "600",
  },
  span: {
    color: "#000",
    marginRight: "5px",
  },
}));
function SingleBlog(props) {
  const { id } = useParams();

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item md={9}>
            <Paper className={classes.blogOuter}>
              <Paper className={classes.blogImage}>
                <img
                  src={featuredPosts[id - 1].pic}
                  alt="blogPic"
                  className={classes.imageStyle}
                />
              </Paper>

              <Paper className={classes.blogTextBox}>
                <Typography
                  variant="h3"
                  gutterBottom
                  className={classes.heading}
                >
                  {featuredPosts[id - 1].title}
                </Typography>
                <ul className={classes.tagsList}>
                  <li className={classes.liList}>
                    <span className={classes.span}>Posted :</span>
                    <Link to="/">{featuredPosts[id - 1].Posted}</Link>
                  </li>
                  <li className={classes.liList}>
                    <span className={classes.span}>By :</span>
                    <Link to="/">{featuredPosts[id - 1].By}</Link>
                  </li>
                  <li className={classes.liList}>
                    <span className={classes.span}>Category :</span>
                    <Link to="/">{featuredPosts[id - 1].Category}</Link>
                  </li>
                  <li className={classes.liList}>
                    <span className={classes.span}>Comment :</span>
                    <Link to="/">{featuredPosts[id - 1].Comment}</Link>
                  </li>
                </ul>
                <Typography
                  variant="subtitle1"
                  gutterBottom
                  className={classes.subHeading}
                >
                  {featuredPosts[id - 1].paragraph}
                </Typography>
                <SocialMedia
                  sTags1={featuredPosts[id - 1].sTags1}
                  sTags2={featuredPosts[id - 1].sTags2}
                  facebook={featuredPosts[id - 1].facebook}
                  twitter={featuredPosts[id - 1].twitter}
                  linkedin={featuredPosts[id - 1].linkedin}
                />
              </Paper>
            </Paper>
            <Comments />
          </Grid>
          <Grid item md={3}>
            <SideBar />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default SingleBlog;
