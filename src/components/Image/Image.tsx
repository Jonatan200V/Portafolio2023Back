import React, { useRef, useState } from 'react';
import Modal from '../Modal/Modal';
import { CardProyect } from '../../types';

interface ImageProps {
  im: CardProyect;
}
const ImageX = ({ im }: ImageProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const modalRef = useRef<HTMLDivElement | null>(null);
  function handleClick(OPEN: boolean) {
    setOpen(OPEN);
    console.log(open);
  }
  return (
    <div className='proyects__map' onClick={() => handleClick(true)}>
      {open ? (
        <Modal
          source={im.source}
          description={im.description}
          // $div={modalRef?.current}
          handleClick={handleClick}
          icons={im.icons}
          direction={im.direction}
          git={im.directGit}
        />
      ) : null}
      <img className='proyects__img' key={im.id} src={im.source} />
      <p className='proyects__p'></p>
    </div>
  );
};

export default ImageX;
