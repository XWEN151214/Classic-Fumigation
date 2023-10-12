import React from 'react'
import Navbar from './Navbar';
import Carousel from './carousel';
import ServiceBox from './ServicesOverview';

const Home = () => {
    return (
        <>
            <Navbar />
            <Carousel />
            <ServiceBox />
        </>
    )
}

export default Home;