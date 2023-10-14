import React from 'react';
import Carousel from './carousel';
import ServiceBox from './ServicesOverview';
import Contact from './contact';
import Packages from './packages';
import { useEffect } from 'react';

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
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