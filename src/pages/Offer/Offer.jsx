import React from 'react';
import { Link } from 'react-router-dom';

import bemCssModules from 'bem-css-modules';

import processing from './images/processing.JPG';
import g_compared from './images/glass_compared.JPG';
import g_door from './images/glass_door.JPG';
import g_ferrule from './images/glass_ferrule.JPG';
import g_graphic from './images/glass_graphic.JPG';
import g_mirror from './images/glass_mirror.JPG';
import g_nano from './images/glass_nano.JPG';
import g_others from './images/glass_others.JPG';
import g_painted from './images/glass_painted.JPG';
import g_roofs from './images/glass_roofs.JPG';
import g_stairs from './images/glass_stairs.JPG';
import g_wholesale from './images/glass_wholesale.JPG';
import g_machines from './images/machines.JPG';
import g_pictures_framing from './images/pictures_framing.JPG';
import g_resin_stained from './images/glass_resin_stained.JPG';

import { default as OfferStyles } from './Offer.module.scss';
const block = bemCssModules(OfferStyles);

const offerList = [
  { name: 'Obróbka szkła', img: processing, path: "/oferta/processing" },
  { name: 'Drzwi przeszklenia, kabiny szklane', img: g_door, path: "/oferta/g_door" },
  { name: 'Balustrady, schody i podłogi ze szkła', img: g_stairs, path: "/oferta/g_stairs" },
  { name: 'Witraże żywicowe', img: g_resin_stained, path: "/oferta/g_resin_stained" },
  { name: 'Szkło do Twojego wnętrza', img: g_graphic, path: "/oferta/g_graphic" },
  { name: 'Hurtowa sprzedaż szkła', img: g_wholesale, path: "/oferta/g_wholesale" },
  { name: 'Lustra i akcesoria', img: g_mirror, path: "/oferta/g_mirror" },
  { name: 'Okucia do szkła firmy CDA', img: g_ferrule, path: "/oferta/g_ferrule" },
  { name: 'Daszki i zabudowa balkonów', img: g_roofs, path: "/oferta/g_roofs" },
  { name: 'Szyby zespolone', img: g_compared, path: "/oferta/g_compared" },
  { name: 'Oprawa obrazów', img: g_pictures_framing, path: "/oferta/g_pictures_framing" },
  { name: 'Maszyny i żywice do produkcji witraży', img: g_machines, path: "/oferta/g_machines" },
  { name: 'Farby do szkła i profili - eksport', img: g_painted, path: "/oferta/g_painted" },
  { name: 'Nanotechnologia', img: g_nano, path: "/oferta/g_nano" },
  { name: 'Inne produkty', img: g_others, path: "/oferta/g_others" },
];

const Offer = () => {
  const offerItems = offerList.map(item => (
    <Link key={item.name} className={block('single-offer')} to={item.path}>
      <div className={block('image-wrapper')}>
        <img className={block('image')} src={item.img} alt={item.name} />
      </div>
      <div className={block('description')}>
        <p className={block('offer-name')}>{item.name}</p>
      </div>
    </Link>
  ))

  return (
    <section className={block()}>
      {offerItems}
    </section>
  );
}

export default Offer;

