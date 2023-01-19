import React from 'react';
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
  return (
    <div className='tech'>
      <h2 className='tech__h2'>Tecnologias</h2>
      {iconsTech.map((icon) => (
        <div className='tech__icon'>{icon}</div>
      ))}
    </div>
  );
};

export default Tech;
