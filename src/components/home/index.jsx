import React from 'react';
import Carousel from './carousel';
import ServiceBox from './ServicesOverview';
import Contact from './contact';
import Packages from './packages';

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
            <Footer />
        </>
    )
}

export default Home;