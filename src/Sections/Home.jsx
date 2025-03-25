import React from 'react';
import Nav from '../Components/Nav';
import Hero from './Hero';
import SectionTwo from './SectionTwo';
import Sectionthree from './Sectionthree/Sectionthree';
import Sectionfour from './Sectionfour/Sectionfour';

//-------------------------

function Home() {
    return (
        <>
            <Nav />
            <Hero />
            <SectionTwo />
            <Sectionthree />
            <Sectionfour />
        </>
    );
}

export default Home;