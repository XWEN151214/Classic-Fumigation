import React from 'react';
import Carousel from './carousel';
import ServiceBox from './ServicesOverview';
import Contact from './contact';
import Packages from './packages';

const Home = () => {
    return (
        <>
            <Carousel />
            <ServiceBox />
            <Contact />
            <Packages />
        </>
    )
}

export default Home;