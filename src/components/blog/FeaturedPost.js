import React from "react";
import { featuredPosts } from "../../content/BolgContent";
import { Link } from "react-router-dom";
import { Paper, makeStyles, Typography } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {},
  blogOuter: {
    padding: "0px",
    boxShadow: "none",
    marginBottom: "20px",
  },
  blogImage: {
    height: "300px",
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
    margin: "10px 0",
    display: "inline-block",
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

function FeaturedPost() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {featuredPosts.map((post, i) => {
        const { id, pic, title, paragraph, Posted, By, Category, Comment } =
          post;
        return (
          <Paper key={(post, i)} className={classes.blogOuter}>
            <Paper className={classes.blogImage}>
              <img src={pic} alt="blogPic" className={classes.imageStyle} />
            </Paper>

            <Paper className={classes.blogTextBox}>
              <Typography variant="h3" gutterBottom className={classes.heading}>
                {title}
              </Typography>
              <ul className={classes.tagsList}>
                <li className={classes.liList}>
                  <span className={classes.span}>Posted : </span>
                  <Link to="/">{Posted}</Link>
                </li>
                <li className={classes.liList}>
                  <span className={classes.span}>By : </span>
                  <Link to="/">{By}</Link>
                </li>
                <li className={classes.liList}>
                  <span className={classes.span}>Category : </span>
                  <Link to="/">{Category}</Link>
                </li>
                <li className={classes.liList}>
                  <span className={classes.span}>Comment : </span>
                  <Link to="/">{Comment}</Link>
                </li>
              </ul>
              <Typography
                variant="subtitle1"
                gutterBottom
                className={classes.subHeading}
              >
                {paragraph}
              </Typography>

              <Link className={classes.readMore} to={`/blog/${id}`}>
                Read More
              </Link>
            </Paper>
          </Paper>
        );
      })}
      <Link to="/" className={classes.readMore}>
        Load More
      </Link>
    </div>
  );
}

export default FeaturedPost;
