import React, { useContext } from 'react';
import { StoreContext } from '../../store/StoreProvider';
import { BiMenu } from "react-icons/bi";

import bemCssModules from 'bem-css-modules';
import { default as HeaderStyles } from './Header.module.scss';
const block = bemCssModules(HeaderStyles);

const Header = () => {
  const { setIsActive } = useContext(StoreContext);
  const toggleNavigation = () => { setIsActive(prev => !prev); }

  return (
    <header className={block()}>
      <button className={block('btn_menu')} onClick={toggleNavigation}><BiMenu /></button>
      <div className={block('title')}>
        <h1 className={block('h1')}>Kryształ</h1>
        <h2 className={block('h2')}>Centrum szkła</h2>
      </div>
    </header>
  );
}

export default Header;