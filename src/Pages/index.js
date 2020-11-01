import React from "react";
import Navbar from "../components/Navbar";
import Main from "../components/Main/index";
import Events from "../components/Events/index";
import Talks from "../components/Talks/Talks";
import Podcasts from "../components/Podcast";
import { Grid } from "./globalElements";

const Home = () => {
  return (
    <>
      <Navbar />
      <Grid>
        <Main />
        <Events />
        <Podcasts />
        <Talks />
      </Grid>
    </>
  );
};

export default Home;
