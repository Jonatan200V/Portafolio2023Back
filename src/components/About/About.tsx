import React from 'react';
import AboutText from '../AboutText/AboutText';
import Profile from '../Profile/Profile';

const About = () => {
  return (
    <div className='pages__item'>
      <div className='about' id='about'>
        <AboutText />
        <Profile />
      </div>
    </div>
  );
};

export default About;
