import React from 'react';
import Nav from '../Components/Nav';
import SectionTwo from './Sectiontwo/SectionTwo';
import Sectionthree from './Sectionthree/Sectionthree';
import Sectionfour from './Sectionfour/Sectionfour';
import Sectionfive from './Sectionfive/Sectionfive';
import Sectionsix from "./Section6/Sictionsix";
import Section8 from "./Section8/Section8";
import Footer from "./Footer/Footer";
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
            <Section8 />
            <Footer />


            
        </>
    );
}

 
export default Home;
