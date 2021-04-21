import React from 'react';

import bemCssModules from 'bem-css-modules';
import { default as ContactStyles } from './Contact.module.scss';
const block = bemCssModules(ContactStyles);

const Contact = () => {
  return (
    <div className={block()}>
      <h1 className={block('title')}>Zapraszamy do kontaktu :)</h1>
      <p className={block('p')}>Tutaj wkrótce pojawi się sekcja kontakt z lokalizacją, nr. telefonów, mailami</p>
    </div>
  );
}

export default Contact;