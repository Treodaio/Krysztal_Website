import React from 'react';

import bemCssModules from 'bem-css-modules';

import processing from './images/processing.JPG';
import glass_compared from './images/glass_compared.JPG';
import glass_door from './images/glass_door.JPG';
import glass_ferrule from './images/glass_ferrule.JPG';
import glass_graphic from './images/glass_graphic.JPG';
import glass_mirror from './images/glass_mirror.JPG';
import glass_nano from './images/glass_nano.JPG';
import glass_others from './images/glass_others.JPG';
import glass_painted from './images/glass_painted.JPG';
import glass_roofs from './images/glass_roofs.JPG';
import glass_stairs from './images/glass_stairs.JPG';
import glass_wholesale from './images/glass_wholesale.JPG';
import machines from './images/machines.JPG';
import pictures_framing from './images/pictures_framing.JPG';
import glass_resin_stained from './images/glass_resin_stained.JPG';

import { default as OfferStyles } from './Offer.module.scss';
const block = bemCssModules(OfferStyles);

const Offer = () => {
  return (
    <section className={block()}>
      <a className={block('single-offer')} href="#">
        <div className={block('image-wrapper')}>
          <img className={block('image')} src={processing} alt="glass processing" />
        </div>
        <div className={block('description')}>
          <p className={block('offer-name')}>Obróbka szkła</p>
        </div>
      </a>

      <a className={block('single-offer')} href="#">
        <div className={block('image-wrapper')}>
          <img className={block('image')} src={glass_door} alt="Drzwi, przeszklenia, kabiny szklane" />
        </div>
        <div className={block('description')}>
          <p className={block('offer-name')}>Drzwi, przeszklenia, kabiny szklane</p>
        </div>
      </a>

      <a className={block('single-offer')} href="#">
        <div className={block('image-wrapper')}>
          <img className={block('image')} src={glass_stairs} alt="Balustrady, schody i podłogi ze szkła" />
        </div>
        <div className={block('description')}>
          <p className={block('offer-name')} >Balustrady, schody i podłogi ze szkła</p>
        </div>
      </a>

      <a className={block('single-offer')} href="#">
        <div className={block('image-wrapper')}>
          <img className={block('image')} src={glass_resin_stained} alt="Witraże żywicowe" />
        </div>
        <div className={block('description')}>
          <p className={block('offer-name')} >Witraże żywicowe</p>
        </div>
      </a>

      <a className={block('single-offer')} href="#">
        <div className={block('image-wrapper')}>
          <img className={block('image')} src={glass_graphic} alt="Szkło do Twojego wnętrza" />
        </div>
        <div className={block('description')}>
          <p className={block('offer-name')} >Szkło do Twojego wnętrza</p>
        </div>
      </a>

      <a className={block('single-offer')} href="#">
        <div className={block('image-wrapper')}>
          <img className={block('image')} src={glass_wholesale} alt="Hurtowa sprzedaż szkła" />
        </div>
        <div className={block('description')}>
          <p className={block('offer-name')} >Hurtowa sprzedaż szkła</p>
        </div>
      </a>

      <a className={block('single-offer')} href="#">
        <div className={block('image-wrapper')}>
          <img className={block('image')} src={glass_mirror} alt="Lustra i akcesoria" />
        </div>
        <div className={block('description')}>
          <p className={block('offer-name')} >Lustra i akcesoria</p>
        </div>
      </a>

      <a className={block('single-offer')} href="#">
        <div className={block('image-wrapper')}>
          <img className={block('image')} src={glass_ferrule} alt="Okucia do szkła firmy CDA" />
        </div>
        <div className={block('description')}>
          <p className={block('offer-name')} >Okucia do szkła firmy CDA</p>
        </div>
      </a>

      <a className={block('single-offer')} href="#">
        <div className={block('image-wrapper')}>
          <img className={block('image')} src={glass_roofs} alt="Daszki i zabudowa balkonów" />
        </div>
        <div className={block('description')}>
          <p className={block('offer-name')} >Daszki i zabudowa balkonów</p>
        </div>
      </a>

      <a className={block('single-offer')} href="#">
        <div className={block('image-wrapper')}>
          <img className={block('image')} src={glass_compared} alt="Szyby zespolone" />
        </div>
        <div className={block('description')}>
          <p className={block('offer-name')} >Szyby zespolone</p>
        </div>
      </a>

      <a className={block('single-offer')} href="#">
        <div className={block('image-wrapper')}>
          <img className={block('image')} src={pictures_framing} alt="Oprawa obrazów" />
        </div>
        <div className={block('description')}>
          <p className={block('offer-name')} >Oprawa obrazów</p>
        </div>
      </a>

      <a className={block('single-offer')} href="#">
        <div className={block('image-wrapper')}>
          <img className={block('image')} src={machines} alt="Maszyny i żywice do produkcji witraży" />
        </div>
        <div className={block('description')}>
          <p className={block('offer-name')} >Maszyny i żywice do produkcji witraży</p>
        </div>
      </a>

      <a className={block('single-offer')} href="#">
        <div className={block('image-wrapper')}>
          <img className={block('image')} src={glass_painted} alt="Farby do szkła i profili - eksport" />
        </div>
        <div className={block('description')}>
          <p className={block('offer-name')} >Farby do szkła i profili - eksport</p>
        </div>
      </a>

      <a className={block('single-offer')} href="#">
        <div className={block('image-wrapper')}>
          <img className={block('image')} src={glass_nano} alt="Nanotechnologia" />
        </div>
        <div className={block('description')}>
          <p className={block('offer-name')} >Nanotechnologia</p>
        </div>
      </a>

      <a className={block('single-offer')} href="#">
        <div className={block('image-wrapper')}>
          <img className={block('image')} src={glass_others} alt="Inne produkty" />
        </div>
        <div className={block('description')}>
          <p className={block('offer-name')} >Inne produkty</p>
        </div>
      </a>
    </section>
  );
}

export default Offer;