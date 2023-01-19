import React from 'react';
import { wsp } from '../../utils/icons/icons';
const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer__div'>
        <div className='footer__flex'>
          <span className='footer__span'>
            Soy JavaScript Full Stack puedes contactarme tambien a mi whatsapp.
            <span className='footer__wsp'>
              <a
                href={`
            https://api.whatsapp.com/send?phone=2612112078&text=Hola`}
                target='_blank'
              >
                {wsp}
              </a>
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
