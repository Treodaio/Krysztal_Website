import React from 'react';

import bemCssModules from 'bem-css-modules';
import { default as ShopStyles } from './Shop.module.scss';
const block = bemCssModules(ShopStyles);

const Shop = () => {
  return (
    <div className={block()}>
      <h1 className={block('title')}>Sklep</h1>
      <p className={block('p')}>Tutaj wypełnisz formularz zamówienia i złożysz je przez internet</p>
    </div>
  );
}

export default Shop;