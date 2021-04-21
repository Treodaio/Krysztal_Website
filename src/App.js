import React from 'react';
import StoreProvider from './store/StoreProvider';

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import Navigation from './components/Navigation/Navigation';
import { BrowserRouter as Router } from 'react-router-dom'
import bemCssModules from 'bem-css-modules';
import { default as AppStyles } from './App.module.scss';
const block = bemCssModules(AppStyles);

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <StoreProvider>
        <div className={block()}>
          <Header />
          <Navigation />
          <Main />
          <Footer />
        </div >
      </StoreProvider>
    </Router>
  );
}

export default App;