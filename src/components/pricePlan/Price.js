import React from "react";
import {
  makeStyles,
  Grid,
  Container,
  Paper,
  Typography,
  Card,
  CardActions,
  CardHeader,
  CssBaseline,
  Button,
  CardContent,
} from "@material-ui/core";
import StarIcon from "@material-ui/icons/StarBorder";
import imageName from "../../assets/images/pricing-bg.png";
import { PriceHeadText, tiers } from "../../content/homePage";
import CheckIcon from "@material-ui/icons/Check";
import MainHeading from "../mainHeading/MainHeading";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "80px 0",
    backgroundImage: "url(" + imageName + ")",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom center",
    backgroundSize: "cover",
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
    textAlign: "center",
  },
  counterSubTittle: {
    fontWeight: "400",
    fontSize: "18px",
    color: "#111",
  },
  priceTitle: {
    fontWeight: "400",
    fontSize: "24px",
    color: "#fff",
    textAlign: "center",
  },
  priceBox: {
    background: "linear-gradient(45deg, #E287A9, #9A71F0)",
    padding: "20px 0px",
    overflow: "visible",
  },

  playImage: {
    maxWidth: "100px",
    margin: "15px auto",
    display: "table",
  },
  orderBtn: {
    margin: "0 auto -60px",
    display: "table",
    background: "#ED472F",
    color: "#ffffff",
    padding: "15px 30px",
    borderRadius: "0",
    fontSize: "16px",
    textAlign: "center",
    textTransform: "uppercase",
    fontWeight: "600",
    "&:hover": {
      background: "#1c8ef4",
      color: "#ffffff",
    },
  },
  cardHeader: {
    backgroundColor: "none",
    color: "#fff",
  },
  cardPricing: {
    display: "flex",
    justifyContent: "center",
    alignItems: "baseline",
    marginBottom: theme.spacing(2),
  },
  listTxt: {
    margin: "0 0 30px -25px",
    background: "#fff",
    padding: "20px 40px",
    listStyle: "none",
    width: "100%",
    borderRadius: "4px",
    position: "relative",
    "&:after": {
      content: '""',
      position: "absolute",
      webkitClipPath: "polygon(100% 100%, 0 0, 100% 0)",
      clipPath: "polygon(100% 100%, 0 0, 100% 0)",
      height: "25px",
      width: "25px",
      backgroundImage: "linear-gradient(90deg, #D6D6D6, #FFFFFF)",
      zIndex: "1",
      left: "0",
      bottom: "-25px",
    },
  },
}));

function Price() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <Grid spacing={3} container>
          {PriceHeadText.map((elm, i) => {
            const { heading, subHeading } = elm;
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
                <Grid item md={6}>
                  <Paper className={classes.paper}>
                    <MainHeading heading={heading} subHeading={subHeading} />
                  </Paper>
                </Grid>
                <CssBaseline />
                <Container maxWidth="lg" component="main">
                  <Grid container spacing={5} alignItems="flex-end">
                    {tiers.map((tier) => (
                      // Enterprise card is full width at sm breakpoint
                      <Grid
                        item
                        key={tier.title}
                        xs={12}
                        sm={tier.title === "Basic" ? 12 : 6}
                        md={4}
                      >
                        <Card className={classes.priceBox}>
                          <CardHeader
                            title={tier.title}
                            pic={tier.pic}
                            subheader={tier.subheader}
                            titleTypographyProps={{ align: "center" }}
                            subheaderTypographyProps={{ align: "center" }}
                            action={tier.title === "Pro" ? <StarIcon /> : null}
                            className={classes.cardHeader}
                          />
                          <img
                            src={tier.pic}
                            alt="priimg"
                            style={{
                              margin: "0 auto 10px",
                              display: "table",
                            }}
                          />
                          <CardContent style={{ padding: "0px" }}>
                            <div className={classes.cardPricing}>
                              <Typography
                                component="h2"
                                variant="h3"
                                color="textPrimary"
                              >
                                ${tier.price}
                              </Typography>
                              <Typography variant="h6" color="textSecondary">
                                /mo
                              </Typography>
                            </div>
                            <ul className={classes.listTxt}>
                              {tier.description.map((line) => (
                                <Typography
                                  component="li"
                                  variant="subtitle1"
                                  key={line}
                                  style={{
                                    marginBottom: "8px",
                                  }}
                                >
                                  <CheckIcon
                                    style={{
                                      color: "#ed472f",
                                      marginRight: "5px",
                                      marginTop: "4px",
                                      float: "left",
                                    }}
                                  />
                                  {line}
                                </Typography>
                              ))}
                            </ul>
                          </CardContent>
                          <CardActions>
                            <Button className={classes.orderBtn}>
                              <i
                                className={tier.iconBtn}
                                style={{
                                  marginRight: "5px",
                                }}
                              ></i>
                              {tier.buttonText}
                            </Button>
                          </CardActions>
                        </Card>
                      </Grid>
                    ))}
                  </Grid>
                </Container>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </div>
  );
}

export default Price;
