import React from 'react';
import Nav from '../Components/Nav';
import SectionTwo from './Sectiontwo/SectionTwo';
import Sectionthree from './Sectionthree/Sectionthree';
import Sectionfour from './Sectionfour/Sectionfour';
import Sectionfive from './Sectionfive/Sectionfive';
import Sectionsix from "./Section6/Sictionsix";
import Hero from "./Hero/Hero";

//-------------------------

function Home() {
    return (
        <>
            <Nav />
            <Hero/>
            <SectionTwo />
            <Sectionthree />
            <Sectionfour />
            <Sectionfive />
            <Sectionsix />
        </>
    );
}

 
export default Home;
