import React from 'react';
import Offer from './subcomponents/Offer';
import bemCssModules from 'bem-css-modules';
import { default as MainStyles } from './Main.module.scss';
const block = bemCssModules(MainStyles);

const Main = () => {
  return (
    <main className={block()}>
      <h3 className={block('title')}>Witaj na stronie firmy Kryształ. Oferujemy:</h3>
      <Offer />
    </main>
  );
}

export default Main;