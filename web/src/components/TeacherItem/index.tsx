import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return (
  <article className="teacher-item">
      <header>
        <img src="https://avatars3.githubusercontent.com/u/62044186?s=400&u=d154f3df0c533ebdd47849c2891f2fcc002308a9&v=4" alt="Foto Perfil"/>
        <div>
          <strong>Lucas Valadares</strong>
          <span>Hardware</span>
        </div>
      </header>

      <p>Ama montar e desmontar as coisas vamos comigo ?!</p>
      <footer>
        <p>
          Preço/hora
          <strong>R$ 25,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp"/>
          Entrar em contato
        </button>
      </footer>
  </article>
);
}

export default TeacherItem;