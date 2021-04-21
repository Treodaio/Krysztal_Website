import React from 'react';
import { Link } from 'react-router-dom';

import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

import bemCssModules from 'bem-css-modules';
import { default as FooterStyles } from './Footer.module.scss';
const block = bemCssModules(FooterStyles);

const facebook = "https://www.facebook.com/krysztal.szklo";
const allegro = "https://allegro.pl/uzytkownik/Krysztal_Szklo?bmatch=cl-e2101-d3681-c3682-uni-1-4-0319";
const youtube = "https://www.youtube.com/channel/UC4vIjhmPZlTB89xZx08A_3w";
const authorLinkedIn = "https://www.linkedin.com/in/slawomir-pietrzak/";

const Footer = () => {
  return (
    <footer className={block()}>

      <section className={block('social')}>
        <p className={block('social__title')}>Znajdź nas na: </p>
        <a className={block('a')} target="_blank" rel="noopener noreferrer" href={facebook}>
          <FaFacebookSquare className={block('icon')} />
        </a>
        <a className={block('a')} target="_blank" rel="noreferrer" href={youtube}>
          <FaYoutube className={block('icon')} />
        </a>
        <a className={block('a')} target="_blank" rel="noreferrer" href={allegro}>
          <FaShoppingCart className={block('icon')} />
        </a>
      </section>

      <section className={block('extra_info')}>
        <Link className={block('a')} to="/kontakt">
          <p className={block('p')}>Kontakt</p>
        </Link>

        <a className={block('a')} href=".">
          <p className={block('p')}>Polityka prywatności i sprzedaży</p>
        </a>

        <a className={block('a')} href=".">
          <p className={block('p')}>Katalogi</p>
        </a>

      </section>

      <section className={block('create_by')}>
        <p className={block('p')}>Page was created by: <a className={block('a')} href={authorLinkedIn}>Treodaio</a></p>
      </section>
    </footer>
  );
}

export default Footer;