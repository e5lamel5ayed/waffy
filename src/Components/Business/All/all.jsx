import React from 'react';
import SecondNav from '../Nav/secondNav';
import Hero2 from '../Hero/hero2';
import How from '../How/how';
import Why from '../Why/why';
import Dealings from '../Dealings/dealings'
import FQA from '../FQA/fqa'
import Footer2 from '../Footer2/footer2';


//-------------------------

function All() {
  return (
    <>
      <SecondNav />
      <Hero2 />
      <Why />
      <How />
      <Dealings/>
      <FQA/>
      <Footer2/>
   
    </>
  );
}

export default All;