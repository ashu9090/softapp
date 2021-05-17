import React from "react";
import {
  makeStyles,
  Grid,
  Container,
  Paper,
  Typography,
} from "@material-ui/core";

import { CounterText } from "../../content/homePage";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  counterOuter: {
    clipPath: "polygon(0 0, 100% 10%, 100% 90%, 0 100%)",
    backgroundImage: "linear-gradient(-45deg, #5C47F1, #9D65DC)",
    padding: "105px 0",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    background: "none",
    boxShadow: "none",
    color: "#fff",
  },
  counterTittle: {
    fontWeight: "600",
    fontSize: "38px",
  },
  counterSubTittle: {
    fontWeight: "400",
    fontSize: "18px",
  },
}));

function Counter() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <Grid
          spacing={3}
          container
          direction="row"
          justify="center"
          alignItems="center"
          className={classes.counterOuter}
        >
          {CounterText.map((elm, i) => {
            const { number, text } = elm;
            return (
              <Grid item xs={12} md={6} lg={3} key={(elm, i)}>
                <Paper className={classes.paper}>
                  <Typography
                    variant="h3"
                    gutterBottom
                    className={classes.counterTittle}
                  >
                    {number}
                  </Typography>
                  <Typography
                    variant="h4"
                    gutterBottom
                    className={classes.counterSubTittle}
                  >
                    {text}
                  </Typography>
                </Paper>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </div>
  );
}

export default Counter;
