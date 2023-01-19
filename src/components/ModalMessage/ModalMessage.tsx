import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import iconR from '../../assets/react.jpg';
import { close } from '../../utils/icons/icons';
type FormState = {
  name: string;
  titulo: string;
  email: string;
  texto: string;
};
interface ModalMessageState {
  formulario: FormState;
}
const INITIAL_STATE = {
  name: '',
  titulo: '',
  email: '',
  texto: '',
};
interface ModalMessageProps {
  openModalMessage: () => void;
}
const ModalMessage = ({ openModalMessage }: ModalMessageProps) => {
  const $div = document.getElementById('modal');
  const [form, setForm] =
    useState<ModalMessageState['formulario']>(INITIAL_STATE);
  const [response, setResponse] = useState<boolean>(false);
  function handleChange(
    evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { value, name } = evt.currentTarget;
    setForm({
      ...form,
      [name]: value,
    });
  }
  function closeModal() {
    openModalMessage();
  }
  async function sendEmail(evt: React.FormEvent<HTMLFormElement>) {
    evt.preventDefault();
    try {
      const data = await fetch('http://localhost:5000/api/mail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });
      const res = await data.json();
      console.log(res);
      setResponse(true);
      setTimeout(() => setResponse(false), 3000);
      setForm(INITIAL_STATE);
    } catch (error) {
      console.log(error);
    }
  }
  if ($div === null) {
    return <div>Cargando...</div>;
  } else {
    return ReactDOM.createPortal(
      <div className='email'>
        <div className='email__flex'>
          <div className='email__top'>
            <div className='email__close' onClick={closeModal}>
              {close}
            </div>
            <h2 className='email__h2'>Puedes enviar un mensaje</h2>
            <div className='email__images'>
              <img
                className='email__img'
                src={iconR}
                alt='React-Icon'
                loading='lazy'
              />
            </div>
            <div className='email__text'>
              <p className='email__back'></p>
              <p className='email__p'>Mensaje</p>
              <p className='email__back email__left'></p>
            </div>
          </div>
          <div className='email__center'>
            <form className='email__form' onSubmit={sendEmail}>
              <input
                value={form.name}
                name='name'
                onChange={handleChange}
                type='text'
                className='email__input'
                placeholder='Nombre'
              />
              <input
                value={form.titulo}
                name='titulo'
                onChange={handleChange}
                type='text'
                className='email__input'
                placeholder='Titulo'
              />
              <input
                value={form.email}
                name='email'
                onChange={handleChange}
                type='email'
                className='email__input'
                placeholder='Email'
              />
              <textarea
                value={form.texto}
                name='texto'
                onChange={handleChange}
                className='email__input email__textarea'
                placeholder='Mensaje'
              ></textarea>
              <button className='email__btn'>
                <span className='email__span'>Enviar</span>
                <div className='email__btnabsolute'></div>
              </button>
              <div className='email__message'>
                {response ? (
                  <div className='email__msg'>
                    Mensaje enviado correctamente
                  </div>
                ) : null}
              </div>
            </form>
          </div>
          <div className='email__bottom'>
            <div className='email__btm'>
              <p className='email__paragraph'>Gracias por enviar su mensaje.</p>
            </div>
          </div>
        </div>
      </div>,
      $div
    );
  }
};

export default ModalMessage;
