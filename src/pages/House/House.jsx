import React from 'react';

import bemCssModules from 'bem-css-modules';
import { default as HouseStyles } from './House.module.scss';
const block = bemCssModules(HouseStyles);

const House = () => {
  return (
    <div className={block()}>
      <h1 className={block('title')}>Domy na sprzedaż</h1>
      <p className={block('p')}>Ta sekcja powstanie już wkrótce</p>
    </div>
  );
}

export default House;