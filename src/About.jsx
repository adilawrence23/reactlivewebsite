import React from 'react';
import web from "../src/images/img3.svg";
import {NavLink} from 'react-router-dom';
import Common from './Common';


const About = () => {
  return (
    <>
      <Common name = 'Know About Us...' imgsrc={web} visit='/contact' btnname='Contact Now'/>
 
    </>
  );
};


export default About;
