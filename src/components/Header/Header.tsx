import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ModalMessage from '../ModalMessage/ModalMessage';
interface linksId {
  id: number;
  url: string;
  name: string;
}
const paths: linksId[] = [
  {
    id: 1,
    url: '#about',
    name: 'Sobre Mi',
  },
  {
    id: 2,
    url: '#proyects',
    name: 'Proyectos',
  },
];
const Header = () => {
  const [open, setOpen] = useState<boolean>(false);
  function openModalMessage(): void {
    setOpen(!open);
  }
  return (
    <div className='header'>
      <div className='header__div'>
        <span className='header__span'>Jonatan</span>
        <span className='header__span'>Valdiviezo</span>
      </div>
      <ul className='header__ul'>
        {paths.map((lin) => (
          <li className='header__li' key={lin.id}>
            <a className='header__text' href={lin.url}>
              {lin.name}
            </a>
            <div className='header__absolute'></div>
          </li>
        ))}
        <li className='header__li'>
          <span className='header__text' onClick={openModalMessage}>
            Contactame
          </span>
          {open ? <ModalMessage openModalMessage={openModalMessage} /> : null}

          <div className='header__absolute'></div>
        </li>
      </ul>
    </div>
  );
};

export default Header;
