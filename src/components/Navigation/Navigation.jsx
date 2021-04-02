import React, { useContext } from 'react';
import { StoreContext } from '../../store/StoreProvider';

import { HiPhone } from 'react-icons/hi';
import { BiCartAlt } from "react-icons/bi";
import { BiInfoCircle } from "react-icons/bi";
import { BiImages } from "react-icons/bi";
import { BiBuildingHouse } from "react-icons/bi";
import { BiShoppingBag } from "react-icons/bi";

import bemCssModules from 'bem-css-modules';
import { default as NavigationStyles } from './Navigation.module.scss';
const block = bemCssModules(NavigationStyles);

const Navigation = () => {
  const { isActive } = useContext(StoreContext);

  return (
    <nav className={block('', { is_active: isActive })}>
      <p className={block('label')}>
        <HiPhone className={block('icon')} />
        <a className={block('link-a')} href="#">Kontakt</a>
      </p>

      <p className={block('label')}>
        <BiCartAlt className={block('icon')} />
        <a className={block('link-a')} href="#">Produkty i usługi</a>
      </p>

      <p className={block('label')}>
        <BiInfoCircle className={block('icon')} />
        <a className={block('link-a')} href="#">O nas</a>
      </p>

      <p className={block('label')}>
        <BiImages className={block('icon')} />
        <a className={block('link-a')} href="#">Galeria</a>
      </p>

      <p className={block('label')}>
        <BiBuildingHouse className={block('icon')} />
        <a className={block('link-a')} href="#">Domy na sprzedaż</a>
      </p>

      <p className={block('label')}>
        <BiShoppingBag className={block('icon')} />
        <a className={block('link-a')} href="#">E-sklep</a>
      </p>

    </nav >
  );
}

export default Navigation;
