import React from "react";
import { Link } from "react-router-dom";
import { Button, Dialog, Slide } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { makeStyles, Grid, Container, Paper } from "@material-ui/core";
import imageName from "../../assets/images/des.png";
import { DesVideoText } from "../../content/homePage";
import MainHeading from "../mainHeading/MainHeading";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "60px 0 80px 0",
    marginTop: "-200px",
    backgroundImage: "url(" + imageName + ")",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom center",
    backgroundSize: "contain",
  },
  paper: {
    padding: theme.spacing(0),
    textAlign: "center",
    background: "none",
    boxShadow: "none",
    marginBottom: "60px",
  },
  counterTittle: {
    fontWeight: "600",
    fontSize: "38px",
    color: "#1f2873",
  },
  counterSubTittle: {
    fontWeight: "400",
    fontSize: "18px",
    color: "#111",
  },
  videoBox: {
    position: "relative",
    boxShadow: "none",
  },
  slidePic: {
    width: "100%",
  },
  playBtn: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translateX(-50%) translateY(-50%)",
    background: "#fff",
    width: "60px",
    height: "60px",
    textAlign: "center",
    lineHeight: "82px",
    borderRadius: "100px",
  },
  playImage: {
    maxWidth: "100%",
  },
  popOuter: {
    position: "relative",
  },
  closeBtn: {
    position: "absolute",
    background: "#fff",
    borderRadius: "100px",
    minWidth: "40px",
    height: "40px",
    display: "inline-block",
    right: "0",
    top: "0",
    padding: "0",
    lineHeight: "54px",
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

function DesVideo() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <Grid spacing={3} container>
          {DesVideoText.map((elm, i) => {
            const { heading, subHeading, pic, pic2 } = elm;
            return (
              <Grid
                item
                xs={12}
                key={(elm, i)}
                container
                direction="row"
                justify="center"
                alignItems="flex-start"
              >
                <Grid item md={8}>
                  <Paper className={classes.paper}>
                    <MainHeading heading={heading} subHeading={subHeading} />
                  </Paper>
                </Grid>
                <Paper className={classes.videoBox}>
                  <img src={pic} alt="demo" className={classes.slidePic} />
                  <Link
                    to="/"
                    className={classes.playBtn}
                    onClick={handleClickOpen}
                  >
                    <img src={pic2} alt="demo" className={classes.playImage} />
                  </Link>
                </Paper>
              </Grid>
            );
          })}
        </Grid>
      </Container>

      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
        className={classes.popOuter}
      >
        <Button
          autoFocus
          onClick={handleClose}
          color="primary"
          className={classes.closeBtn}
        >
          <CloseIcon />
        </Button>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/N3AkSS5hXMA"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </Dialog>
    </div>
  );
}

export default DesVideo;
