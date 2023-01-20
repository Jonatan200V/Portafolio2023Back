import React, { useRef } from 'react';
import {
  ducker,
  apollo,
  express,
  git,
  graph,
  next,
  node,
  postgres,
  react,
  redux,
  sass,
  tailwind,
  sequelize,
  typescript,
  html,
  css,
  photosop,
  javascript,
} from '../../utils/Tecnologias/Tecnologias';

const Tech = () => {
  const divRef = useRef<HTMLDivElement | null>(null);
  const iconsTech: JSX.Element[] = [
    ducker,
    git,
    express,
    node,
    postgres,
    sequelize,
    graph,
    apollo,
    javascript,
    typescript,
    react,
    next,
    redux,
    sass,
    tailwind,
    html,
    css,
    photosop,
  ];

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((item) => {
      if (item.isIntersecting) {
        item.target.classList.add('tech__visibility');
      } else {
        item.target.classList.remove('tech__visibility');
      }
    });
  });
  window.addEventListener('scroll', () => {
    if (divRef.current !== null) {
      observer.observe(divRef.current);
    }
  });
  return (
    <div className='tech' ref={divRef}>
      <h2 className='tech__h2'>Tecnologias</h2>
      {iconsTech.map((icon, index) => (
        <div className='tech__icon' key={index}>
          {icon}
        </div>
      ))}
    </div>
  );
};

export default Tech;
