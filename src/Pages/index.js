import React from "react";
import Navbar from "../components/Navbar";
import Main from "../components/Main/index";
import Events from "../components/Events/index";
import Talks from "../components/Talks/Talks";
import Podcasts from "../components/Podcast";
import { Grid } from "./globalElements";
import Footer from "../components/Footer/footer";
import Redes from "../components/Redes/redes";

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
      <Redes />
      <Footer />
    </>
  );
};

export default Home;
