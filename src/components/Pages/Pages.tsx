import React from 'react';
import About from '../About/About';
import Proyects from '../Proyects/Proyects';
import Presentation from '../Presentation/Presentation';
import Tech from '../Tech/Tech';

const Pages = () => {
  return (
    <div className='pages'>
      <Presentation />
      <About />
      <Proyects />
      <Tech />
    </div>
  );
};

export default Pages;
