import React from 'react';
import { close } from '../../utils/icons/icons';
interface ModalProps {
  source: string;
  description: string;
  handleClick: (OPEN: boolean) => void;
  icons?: JSX.Element[];
  direction?: string;
  git?: string;
}
const Modal = ({
  source,
  description,
  // $div,
  handleClick,
  icons,
  direction,
  git,
}: ModalProps) => {
  function closeModalAction(evt: React.MouseEvent<HTMLDivElement>): void {
    evt.stopPropagation();
    handleClick(false);
  }
  return (
    <div className='modal__modal'>
      <div className='modal'>
        <div className='modal__absolute' onClick={closeModalAction}>
          {close}
        </div>
        <div className='modal__flex'>
          <img
            className='modal__img'
            src={source}
            alt='Proyect'
            loading='lazy'
          />
          <p className='modal__p'>
            {description}
            <div className='modal__icons'>
              {icons?.map((icon, index) => (
                <div className='modal__icon' key={index}>
                  {icon}
                </div>
              ))}
            </div>
            <div className='modal__div'>
              <a className='modal__a' href={direction} target='_blank' rel=''>
                Deploy
              </a>
              <a className='modal__a' href={git} target='_blank' rel=''>
                GitHub
              </a>
            </div>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
