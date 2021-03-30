import React, { useContext } from 'react';
import { StoreContext } from '../../store/StoreProvider';

import bemCssModules from 'bem-css-modules';
import { default as HeaderStyles } from './Header.module.scss';
const block = bemCssModules(HeaderStyles);

const Header = () => {
  const { setIsActive } = useContext(StoreContext);
  const toggleNavigation = () => { setIsActive(prev => !prev); }

  return (
    <header className={block()}>
      <button className={block('btn_menu')} onClick={toggleNavigation}>Menu</button>
      <p>Tutaj będzie header</p>
    </header>
  );
}

export default Header;