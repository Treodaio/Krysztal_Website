import React from 'react';
import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

import bemCssModules from 'bem-css-modules';
import { default as FooterStyles } from './Footer.module.scss';
const block = bemCssModules(FooterStyles);

const Footer = () => {
  return (
    <footer className={block()}>

      <section className={block('social')}>
        <p className={block('social__title')}>Znajdź nas na: </p>
        <a className={block('a')}
          href="https://www.facebook.com/krysztal.szklo">
          <FaFacebookSquare className={block('icon')} />
        </a>
        <a className={block('a')}
          href="https://www.youtube.com/channel/UC4vIjhmPZlTB89xZx08A_3w">
          <FaYoutube className={block('icon')} />
        </a>
        <a className={block('a')}
          href="https://allegro.pl/uzytkownik/Krysztal_Szklo?bmatch=cl-e2101-d3681-c3682-uni-1-4-0319">
          <FaShoppingCart className={block('icon')} />
        </a>
      </section>

      <section className={block('extra_info')}>
        <a className={block('a')} href=".">
          <p className={block('p')}>Kontakt</p>
        </a>

        <a className={block('a')} href=".">
          <p className={block('p')}>Polityka prywatności i sprzedaży</p>
        </a>

        <a className={block('a')} href=".">
          <p className={block('p')}>Katalogi</p>
        </a>

      </section>
      <section className={block('create_by')}>
        <p className={block('p')}>Page was created by: <a className={block('a')} href="https://www.linkedin.com/in/slawomir-pietrzak/">Treodaio</a></p>
      </section>
    </footer>
  );
}

export default Footer;