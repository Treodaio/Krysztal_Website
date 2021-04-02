import React from 'react';

import bemCssModules from 'bem-css-modules';
import { default as MainStyles } from './Main.module.scss';
const block = bemCssModules(MainStyles);

const Main = () => {
  return (
    <main className={block()}>
      <h3 className={block('title')}>Witaj na stronie Kryształ Podegrodzie. Oferujemy:</h3>
    </main>
  );
}

export default Main;