import React from 'react';
import Perfil from '../../assets/jonh.jpg';
const Profile = () => {
  return (
    <div className='about__imgc'>
      <div className='about__images'>
        <img className='about__img' alt='Perfil' src={Perfil} />
      </div>
    </div>
  );
};

export default Profile;
