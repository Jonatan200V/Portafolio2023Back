import React from 'react';
import calc from '../../assets/proyects/calculate.jfif';
import dog from '../../assets/proyects/dog-pi.png';
import dota from '../../assets/proyects/dota.jfif';
import poke from '../../assets/proyects/poke.jfif';
import re from '../../assets/proyects/re2.jfif';
import ygo from '../../assets/proyects/ygo.jfif';
import pokemon from '../../assets/proyects/tspoke.png';
import games from '../../assets/proyects/games.png';
import ImageX from '../Image/Image';
import { CardProyect } from '../../types';
import {
  react,
  css,
  node,
  express,
  sass,
  redux,
  sequelize,
  postgres,
  javascript,
  html,
  typescript,
  next,
  graph,
  apollo,
} from '../../utils/Tecnologias/Tecnologias';

const Images: CardProyect[] = [
  {
    id: 1,
    source: calc,
    description:
      'Una calculadora realizada con React.Js y Css puro funciona con cualquier tipo de calculo basico.',
    icons: [react, css],
    direction:
      'https://63051d693e98ba02c6962067--legendary-capybara-6e0531.netlify.app',
    directGit: 'https://github.com/Jonatan200V/Calculator',
  },
  {
    id: 2,
    source: dog,
    description:
      'Una SPA realizada con ReactJs, Redux y Sass en el frontend y  NodeJs, ExpressJs, Sequlize y PostgresSQL en el backend puede filtrar razas de perros, ordenar añadir a favoritos, ver el detalle del perro y crear, actualizar y eliminar una raza de perro.',
    icons: [react, redux, css, node, express, sequelize, postgres],
    direction: 'https://build-project-one.vercel.app',
    directGit: 'https://github.com/Jonatan200V/Dogs-PI',
  },
  {
    id: 3,
    source: dota,
    description:
      'Una SPA realizada con ReactJs y Css puro en el frontend y NodeJs y ExpressJs en el backend sus funcionalidades son filtrados de heroes, detalles de cada personaje mostrando todas sus habilidades con una landing page donde mostramos informacion sobre el DOTA 2.',
    icons: [react, sass, node, express],
    direction:
      'https://6345e4a7a91cbe423f020cad--superb-cajeta-b9aa48.netlify.app',
    directGit: 'https://github.com/Jonatan200V/Dota-Page',
  },
  {
    id: 4,
    source: poke,
    description:
      'Una SPA realizada con la api de pokemon podra buscar el pokemon crear un pokemon ver el detalle de cada uno y poder jugar a un mini juego.',
    icons: [react, css],
    direction:
      'https://6330614b467d8c14b221b3d1--jolly-bublanina-7cf401.netlify.app',
    directGit: 'https://github.com/Jonatan200V/ProyectoPokemon/tree/master/src',
  },
  {
    id: 5,
    source: re,
    description: 'Una maquetacion realizada con js css y html responsive.',
    icons: [html, css, javascript],
    direction:
      'https://631969b122bd7b2946d503f9--visionary-tiramisu-397b4f.netlify.app',
    directGit: 'https://github.com/Jonatan200V/StadiaStore',
  },
  {
    id: 6,
    source: ygo,
    description:
      'Una SPA realizada con ReactJs y css en el frontend y NodeJs y ExpressJs en el backend sus funcionalidades son buscar una carta, poder ver el detalle, actualizar la informacion, crear un mazo, ver los mazos del momento y un mini juego.',
    icons: [react, css, node, express],
    direction:
      'https://63cb2174ccc7083cdc7621d2--sparkly-froyo-361b17.netlify.app',
    directGit: 'https://github.com/Jonatan200V/Back-Y-Front-YGO-REFACTORIZADO',
  },
  {
    id: 7,
    source: pokemon,
    description:
      'Es una SPA creada con Typescript React y Sass en el frontend, en esta app podra buscar los pokemons, entrar en sus detalles ver sus habilidades, filtrar por tipos, navegar mediante una paginación y tiene minijuegos muy interesantes. ',
    icons: [react, typescript, sass],
    direction: '',
    directGit: 'https://github.com/Jonatan200V/PokeApiReactTypescript',
  },
  {
    id: 8,
    source: games,
    description:
      'Es un Ecommerce realizado con Next.js, Redux ,Graphql con Apollo server y Sass en el frontend y en el backend Node.js, Express, Sequelize, Apollo server y Postgres',
    directGit: 'https://github.com/Jonatan200V/VideoGAMES',
    direction: 'https://video-games-gamma.vercel.app',
    icons: [
      next,
      graph,
      apollo,
      redux,
      sass,
      node,
      express,
      sequelize,
      postgres,
    ],
  },
];

const Proyects = () => {
  return (
    <div className='pages__item' id='proyects'>
      <div className='proyects'>
        <h2 className='proyects__h2'>Proyectos</h2>
        <div className='proyects__images'>
          {Images.map((im) => (
            <ImageX im={im} key={im.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Proyects;
