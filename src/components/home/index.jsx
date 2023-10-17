import React from 'react';
import Carousel from './carousel';
import ServiceBox from './ServicesOverview';
import Contact from './contact';
import Footer from '../footer'
import Packages from './packages';
import Testimonials from './testimonials';
import Clients from './clients';

const Home = () => {
    return (
        <>
            <Carousel />
            <ServiceBox />
            <Contact />
            <Packages />
            <Clients />
            <Testimonials />
            <Footer />
        </>
    )
}

export default Home;