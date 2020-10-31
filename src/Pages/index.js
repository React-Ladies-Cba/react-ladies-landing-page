import React from 'react';
import Navbar from '../components/Navbar';
import Main from '../components/Main/index';
import Events from '../components/Events/index';
import Talks from '../components/Talks/Talks';
import Podcasts from '../components/Podcast/index';

const Home = () => {
    return (
        <>
        <Navbar/>
        <Main/>
        <Events/>
        <Talks/>
        <Podcasts/>
        </>
    );
};

export default Home;
