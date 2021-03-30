import React from 'react';
import StoreProvider from './store/StoreProvider';

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import Navigation from './components/Navigation/Navigation';

import bemCssModules from 'bem-css-modules';
import { default as AppStyles } from './App.module.scss';
const block = bemCssModules(AppStyles);

function App() {
  return (
    <StoreProvider>
      <div className={block()}>
        <Header />
        <Navigation />
        <Main />
        <Footer />
      </div >
    </StoreProvider>
  );
}

export default App;