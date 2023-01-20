import React from 'react';
import { linkedin, github, instagram } from '../../utils/icons/icons';
interface Icons {
  id: number;
  icon: JSX.Element;
  direct: string;
}
const icons: Icons[] = [
  {
    id: 1,
    icon: linkedin,
    direct: 'https://www.linkedin.com/in/jonatan-valdiviezo2205/',
  },
  {
    id: 2,
    icon: github,
    direct: 'https://github.com/Jonatan200V',
  },
  {
    id: 3,
    icon: instagram,
    direct: 'https://www.instagram.com/jonnhyvaldiviezo/',
  },
];
const Iconss = () => {
  return (
    <div className='icons'>
      <ul className='icons__ul'>
        {icons.map((icon) => (
          <li className='icons__li' key={icon.id}>
            <a target='_blank' href={icon.direct}>
              {icon.icon}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Iconss;
