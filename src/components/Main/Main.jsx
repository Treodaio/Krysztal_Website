import React from 'react';

import bemCssModules from 'bem-css-modules';
import { default as MainStyles } from './Main.module.scss';
const block = bemCssModules(MainStyles);

const Main = () => {
  return (
    <main className={block()}>
      main
    </main>
  );
}

export default Main;