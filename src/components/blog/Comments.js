import React from "react";
import {
  makeStyles,
  Grid,
  Paper,
  Link,
  Typography,
  TextField,
  Button,
  TextareaAutosize,
} from "@material-ui/core";
import { CommentBox } from "../../content/BolgContent";
const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "30px",
    "& > .MuiGrid-root": {
      "&:nth-child(2)": {
        marginLeft: "2%",
        width: "97%",
      },
    },
  },
  blogOuter: {
    background: "#fff",
    padding: "20px",
    float: "left",
    width: "100%",
    marginBottom: "30px",
    boxShadow: "0 5px 15px #ccc",
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
    height: "60px",
    width: "60px",
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
  inputBox: {
    float: "left",
    width: "100%",
    background: "#fff",
    boxShadow: "0 5px 15px #ccc",
    "& .MuiInputBase-root": {
      borderRadius: "0px",
      float: "left",
      width: "100%",
      borderBottom: "none",
      "& .MuiInputBase-input": {
        padding: "15px",
        fontSize: "16px",
      },
    },
    "& .MuiInput-underline:before, & .MuiInput-underline:after": {
      display: "none",
      boxShadow: "none !important",
      outline: "none !important",
      borderBottom: "none !important",
    },
  },
  textAreaBox: {
    padding: "15px",
    fontSize: "16px",
    float: "left",
    border: "none",
    width: "100% !important",
    height: "200px !important",
    fontFamily: "'Roboto', sans-serif",
    color: "#555",
  },
  SubmitButton: {
    background: "#ed472f",
    color: "#fff",
    fontSize: "14px",
    padding: "10px 30px",
    marginTop: "15px",
    borderRadius: "0px",
    "&:hover": {
      background: "#1f2873",
      color: "#fff",
    },
  },
}));

function Comments() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {CommentBox.map((post, i) => {
        const { pic, title, paragraph, date } = post;
        return (
          <Grid
            container
            spacing={2}
            key={(post, i)}
            className={classes.blogOuter}
          >
            <Grid item md={1}>
              <Paper className={classes.outerImg}>
                <img src={pic} alt="tPhoto" className={classes.imageStyle} />
              </Paper>
            </Grid>
            <Grid item md={11}>
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
                variant="h6"
                gutterBottom
                className={classes.blogLink}
              >
                {date}
              </Typography>
              <Typography
                variant=" subtitle1"
                gutterBottom
                className={classes.subHeading}
              >
                {paragraph}
              </Typography>
              <Link to="/" className={classes.heading1}>
                Read More
              </Link>
            </Grid>
          </Grid>
        );
      })}
      <Typography variant="h4" gutterBottom className={classes.heading}>
        Leave your comment
      </Typography>
      <form className={classes.formBoz} noValidate autoComplete="off">
        <Grid container spacing={2}>
          <Grid item md={6}>
            <TextField
              id="name"
              placeholder="Your Name"
              className={classes.inputBox}
            />
          </Grid>
          <Grid item md={6}>
            <TextField
              id="email"
              placeholder="Your Email"
              className={classes.inputBox}
            />
          </Grid>
          <Grid item md={12}>
            <div className={classes.inputBox}>
              <TextareaAutosize
                placeholder="Your Message"
                rowsMax={4}
                className={classes.textAreaBox}
              />
            </div>
            <Button className={classes.SubmitButton}>SEND COMMENT</Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}

export default Comments;
