import React from 'react';

import bemCssModules from 'bem-css-modules';
import { default as FooterStyles } from './Footer.module.scss';
const block = bemCssModules(FooterStyles);

const Footer = () => {
  return (
    <footer className={block()}>
      <p>To będzie footer</p>
    </footer>
  );
}

export default Footer;