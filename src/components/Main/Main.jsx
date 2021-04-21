import React from 'react';
import { Route } from 'react-router-dom';

import Contact from './../../pages/Contact/Contact';
import Offer from './../../pages/Offer/Offer';
import About from './../../pages/About/About';
import Gallery from './../../pages/Gallery/Gallery';
import House from './../../pages/House/House';
import Shop from './../../pages/Shop/Shop';

import bemCssModules from 'bem-css-modules';
import { default as MainStyles } from './Main.module.scss';
const block = bemCssModules(MainStyles);

const Main = () => {
  return (
    <main className={block()}>
      <Route exact path="/" render={() => <h3 className={block('title')}>Witaj na stronie firmy Kryształ. Oferujemy:</h3>} />
      <Route exact path="/oferta" render={() => <h3 className={block('title')}>Oferujemy:</h3>} />

      <Route exact path="/" component={Offer} />
      <Route path="/kontakt" component={Contact} />
      <Route exact path="/oferta" component={Offer} />
      <Route path="/onas" component={About} />
      <Route path="/galeria" component={Gallery} />
      <Route path="/domy" component={House} />
      <Route path="/sklep" component={Shop} />

    </main>
  );
}

export default Main;