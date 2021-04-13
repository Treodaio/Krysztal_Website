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

      <a className={block('label')} href=".">
        <HiPhone className={block('icon')} />
        <p className={block('link-a')}>Kontakt</p>
      </a>

      <a className={block('label')} href=".">
        <BiCartAlt className={block('icon')} />
        <p className={block('link-a')}>Produkty i usługi</p>
      </a>

      <a className={block('label')} href=".">
        <BiInfoCircle className={block('icon')} />
        <p className={block('link-a')} >O nas</p>
      </a>

      <a className={block('label')} href=".">
        <BiImages className={block('icon')} />
        <p className={block('link-a')} >Galeria</p>
      </a>

      <a className={block('label')} href=".">
        <BiBuildingHouse className={block('icon')} />
        <p className={block('link-a')}>Domy na sprzedaż</p>
      </a>

      <a className={block('label')} href=".">
        <BiShoppingBag className={block('icon')} />
        <p className={block('link-a')}>E-sklep</p>
      </a>

    </nav >
  );
}

export default Navigation;
