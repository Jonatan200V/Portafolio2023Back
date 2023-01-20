import React from 'react';
import { pdf } from '../../utils/icons/icons';

const Presentation = () => {
  return (
    <div className='presentation'>
      <div className='presentation__div'>
        Hola Soy <div className='presentation__text'>JONATAN VALDIVIEZO</div>{' '}
        <div className='presentation__text'>Javascript Full Stack</div>
        <div>
          <a href='./CV.pdf' download className='presentation__a'>
            Descargar CV {pdf}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Presentation;
