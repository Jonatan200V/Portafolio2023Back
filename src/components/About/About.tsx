import React, { useRef } from 'react';
import AboutText from '../AboutText/AboutText';
import Profile from '../Profile/Profile';

const About = () => {
  const divRef = useRef<HTMLDivElement>(null);
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((item) => {
      if (item.isIntersecting) {
        item.target.classList.add('pages__visibility');
      } else {
        item.target.classList.remove('pages__visibility');
      }
    });
  });

  window.addEventListener('scroll', () => {
    if (divRef.current !== null) {
      observer.observe(divRef.current);
    }
  });
  return (
    <div className='pages__about' ref={divRef}>
      <div className='about' id='about'>
        <AboutText />
        <Profile />
      </div>
    </div>
  );
};

export default About;
