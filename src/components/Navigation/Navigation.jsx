import React, { useContext } from 'react';
import { StoreContext } from '../../store/StoreProvider';

import bemCssModules from 'bem-css-modules';
import { default as NavigationStyles } from './Navigation.module.scss';
const block = bemCssModules(NavigationStyles);

const Navigation = () => {
  const { isActive } = useContext(StoreContext);
  console.log(isActive);

  return (
    <nav className={block()}>
      <p><a href="#">Kontakt</a></p>
      <p><a href="#">Produkty</a></p>
      <p><a href="#">O nas</a></p>
    </nav>
  );
}

export default Navigation;

// , null, { active: isActive }