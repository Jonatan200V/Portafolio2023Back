import React from 'react';
interface aboutus {
  id: number;
  info: string;
}
const details: aboutus[] = [
  {
    id: 1,
    info: 'Soy Estudiante de soy Henry y tambien autodidacta tengo mas de 1000 horas estudiando en el bootcamp mas las horas que tengo estudiando solo.',
  },
  {
    id: 2,
    info: 'Eh realizado proyectos con tecnologias como React.Js, Next.Js, GraphQl,Node.Js, Express.Js, Sequelize y PostgresSQL Scss.',
  },
  {
    id: 3,
    info: 'Cada dia me encuentro aprendiendo mas y mas me encanta programar es un hobbi que puedo hacer un trabajo eso quiere decir que disfruto cada cosa que tenga que ver con codigos y algoritmos.',
  },
  {
    id: 4,
    info: 'Estoy buscando estabilidad y aprender mas en mi lugar de trabajo.',
  },
];
const AboutText = () => {
  return (
    <div className='about__div'>
      <h2 className='about__h2'>Sobre Mi</h2>
      <ul className='about__ul'>
        {details.map((det) => (
          <li className='about__li' key={det.id}>
            {det.info}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AboutText;
