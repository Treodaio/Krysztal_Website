import React from 'react';
import { Route } from 'react-router-dom';

import Offer from './../../pages/Offer/Offer';
import Contact from './../../pages/Contact/Contact';

import bemCssModules from 'bem-css-modules';
import { default as MainStyles } from './Main.module.scss';
const block = bemCssModules(MainStyles);

const Main = () => {
  return (
    <main className={block()}>
      <Route exact path="/" render={() =>
        <h3 className={block('title')}>Witaj na stronie firmy Kryształ. Oferujemy:</h3>}
      />
      <Route exact path="/oferta" render={() =>
        <h3 className={block('title')}>Oferujemy:</h3>} />
      <Route exact path="/" component={Offer} />
      <Route exact path="/oferta" component={Offer} />
      <Route path="/kontakt" component={Contact} />
    </main>
  );
}

export default Main;