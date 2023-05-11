import React from "react";
import Aos from 'aos';
import 'aos/dist/aos.css';
import section2 from './components/section2';
import section1 from './components/section2';
import Nav from './components/Nav';

// import section2 from './components/section2';
const App = () => {
  //aos initialisation
  Aos.init({
    duration: 1800,
    offset: 0,
  });
  return <div className='overflow-hidden'>
    <section1 />Hello
  </div>;
};


export default App;
