import React from "react";
import {
  makeStyles,
  Grid,
  //   Paper,
  Container,
  //   TextField,
  //   Button,
} from "@material-ui/core";
import SideBar from "./SideBar";
import FeaturedPost from "./FeaturedPost";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "60px 0",
    background: "#f0f5fb",
  },
}));

function BlogMain() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            <Grid item md={9}>
              <FeaturedPost />
            </Grid>
            <Grid item md={3}>
              <SideBar />
            </Grid>
          </Grid>

          {/* <main>
            <MainFeaturedPost post={mainFeaturedPost} />
            <Grid container spacing={4}>
            
            </Grid>
            <Grid container spacing={5} className={classes.mainGrid}>
              <Main title="From the firehose" posts={posts} />
              <Sidebar
                title={sidebar.title}
                description={sidebar.description}
                archives={sidebar.archives}
                social={sidebar.social}
              />
            </Grid>
          </main> */}
        </Container>
      </div>
    </>
  );
}

export default BlogMain;
