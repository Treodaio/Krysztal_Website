import React from 'react';

import bemCssModules from 'bem-css-modules';

import processing from './images/processing.JPG';
import glass_door from './images/glass_door.JPG';

import { default as OfferStyles } from './Offer.module.scss';
const block = bemCssModules(OfferStyles);

const Offer = () => {
  return (
    <section className={block()}>
      <a className={block('single-offer')} href="#">
        <div className={block('image-wrapper')}>
          <img className={block('image')} src={processing} alt="Obróbka szkła" />
        </div>
        <p className={block('description')}>Obróbka szkła</p>
      </a>

      <a className={block('single-offer')} href="#">
        <div className={block('image-wrapper')}>
          <img className={block('image')} src={glass_door} alt="Drzwi, przeszklenia, kabiny szklane" />
        </div>
        <p className={block('description')} >Drzwi, przeszklenia, kabiny szklane</p>
      </a>

      <a className={block('single-offer')} href="#">
        <img className={block('image')} src="" alt="Balustrady, schody i podłogi ze szkła" />
        <div className={block('description')}>
          <p className={block('offer-name')} >Balustrady, schody i podłogi ze szkła</p>
        </div>
      </a>

      <a className={block('single-offer')} href="#">
        <img className={block('image')} src="" alt="Witraże żywicowe" />
        <div className={block('description')}>
          <p className={block('offer-name')} >Witraże żywicowe</p>
        </div>
      </a>

      <a className={block('single-offer')} href="#">
        <img className={block('image')} src="" alt="Szkło do Twojego wnętrza" />
        <div className={block('description')}>
          <p className={block('offer-name')} >Szkło do Twojego wnętrza</p>
        </div>
      </a>

      <a className={block('single-offer')} href="#">
        <img className={block('image')} src="" alt="Hurtowa sprzedaż szkła" />
        <div className={block('description')}>
          <p className={block('offer-name')} >Hurtowa sprzedaż szkła</p>
        </div>
      </a>

      <a className={block('single-offer')} href="#">
        <img className={block('image')} src="" alt="Lustra i akcesoria" />
        <div className={block('description')}>
          <p className={block('offer-name')} >Lustra i akcesoria</p>
        </div>
      </a>

      <a className={block('single-offer')} href="#">
        <img className={block('image')} src="" alt="Okucia do szkła firmy CDA" />
        <div className={block('description')}>
          <p className={block('offer-name')} >Okucia do szkła firmy CDA</p>
        </div>
      </a>

      <a className={block('single-offer')} href="#">
        <img className={block('image')} src="" alt="Daszki i zabudowa balkonów" />
        <div className={block('description')}>
          <p className={block('offer-name')} >Daszki i zabudowa balkonów</p>
        </div>
      </a>

      <a className={block('single-offer')} href="#">
        <img className={block('image')} src="" alt="Szyby zespolone" />
        <div className={block('description')}>
          <p className={block('offer-name')} >Szyby zespolone</p>
        </div>
      </a>

      <a className={block('single-offer')} href="#">
        <img className={block('image')} src="" alt="Oprawa obrazów" />
        <div className={block('description')}>
          <p className={block('offer-name')} >Oprawa obrazów</p>
        </div>
      </a>

      <a className={block('single-offer')} href="#">
        <img className={block('image')} src="" alt="Maszyny i żywice do produkcji witraży" />
        <div className={block('description')}>
          <p className={block('offer-name')} >Maszyny i żywice do produkcji witraży</p>
        </div>
      </a>

      <a className={block('single-offer')} href="#">
        <img className={block('image')} src="" alt="Farby do szkła i profili - eksport" />
        <div className={block('description')}>
          <p className={block('offer-name')} >Farby do szkła i profili - eksport</p>
        </div>
      </a>

      <a className={block('single-offer')} href="#">
        <img className={block('image')} src="" alt="Nanotechnologia" />
        <div className={block('description')}>
          <p className={block('offer-name')} >Nanotechnologia</p>
        </div>
      </a>

      <a className={block('single-offer')} href="#">
        <img className={block('image')} src="" alt="Inne produkty" />
        <div className={block('description')}>
          <p className={block('offer-name')} >Inne produkty</p>
        </div>
      </a>

    </section>
  );
}

export default Offer;