import React, { useEffect, useRef, useState } from 'react';
import Modal from '../Modal/Modal';
import { CardProyect } from '../../types';

interface ImageProps {
  im: CardProyect;
}
const ImageX = ({ im }: ImageProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const divRef = useRef<HTMLDivElement>(null);
  function handleClick(OPEN: boolean) {
    setOpen(OPEN);
  }
  const observe = new IntersectionObserver((entries) => {
    entries.forEach((item) => {
      if (item.isIntersecting) {
        item.target.classList.add('proyects__visibility');
      } else {
        item.target.classList.remove('proyects__visibility');
      }
    });
  });
  window.addEventListener('scroll', () => {
    if (divRef.current !== null) {
      observe.observe(divRef.current);
    }
  });
  return (
    <div
      className='proyects__map'
      onClick={() => handleClick(true)}
      ref={divRef}
    >
      {open ? (
        <Modal
          source={im.source}
          description={im.description}
          handleClick={handleClick}
          icons={im.icons}
          direction={im.direction}
          git={im.directGit}
        />
      ) : null}
      <img className='proyects__img' key={im.id} src={im.source} />
      {/* <p className='proyects__p'></p> */}
    </div>
  );
};

export default ImageX;
