import React, { useContext } from 'react';
import { StoreContext } from '../../store/StoreProvider';
import { NavLink } from 'react-router-dom';

import { HiPhone } from 'react-icons/hi';
import {
  BiCartAlt,
  BiInfoCircle, BiImages, BiBuildingHouse, BiShoppingBag
} from "react-icons/bi";


import bemCssModules from 'bem-css-modules';
import { default as NavigationStyles } from './Navigation.module.scss';
const block = bemCssModules(NavigationStyles);

const list = [
  { name: 'Kontakt', path: '/kontakt', icon: <HiPhone className={block('icon')} />, },
  { name: 'Oferta', path: '/oferta', icon: <BiCartAlt className={block('icon')} />, },
  { name: 'O nas', path: '/onas', icon: <BiInfoCircle className={block('icon')} />, },
  { name: 'Galeria', path: '/galeria', icon: <BiImages className={block('icon')} />, },
  { name: 'Domy na sprzedaż', path: '/domy', icon: <BiBuildingHouse className={block('icon')} />, },
  { name: 'E-sklep', path: '/sklep', icon: <BiShoppingBag className={block('icon')} />, },
];

const Navigation = () => {
  const { isActive } = useContext(StoreContext);

  const menu = list.map(item => (
    <li key={item.name} className={block('label')}>
      {item.icon ? item.icon : null}
      <NavLink
        exact={item.exact ? item.exact : null}
        to={item.path}
        className={block('link')}>
        {item.name}
      </NavLink>
    </li>
  ))

  return (
    <nav className={block('', { is_active: isActive })}>
      {menu}
    </nav >
  );
}

export default Navigation;