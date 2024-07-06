import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Facts from '../components/Facts';
import Products from '../components/Products';
import Service from '../components/Service';
import Team from '../components/Team';
import Offer from '../components/Offer';
import Testimonial from '../components/Testimonial';
import VideoModal from '../components/VideoModal';

const Home = () => {
    return (
        <>  
            <Hero />
            <About />
            <Facts />
            <Products />
            <Service />
            <Team />
            <Offer />
            <Testimonial />
            <VideoModal />
        </>
    );
}

export default Home;
