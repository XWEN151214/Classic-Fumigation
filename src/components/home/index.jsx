import React from 'react'
import Navbar from './Navbar';
import Carousel from './carousel';
import ServiceBox from './ServicesOverview';
import Contact from './contact';
import Footer from '../footer'
import Packages from './packages';

const Home = () => {
    return (
        <>
            <Navbar />
            <Carousel />
            <ServiceBox />
            <Contact />
            <Packages />
            <Footer />
        </>
    )
}

export default Home;