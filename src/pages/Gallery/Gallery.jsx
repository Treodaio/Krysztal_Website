import React from 'react';

import bemCssModules from 'bem-css-modules';
import { default as GalleryStyles } from './Gallery.module.scss';
const block = bemCssModules(GalleryStyles);

const Gallery = () => {
  return (
    <div className={block()}>
      <h1 className={block('title')}>Galeria zdjęć</h1>
      <p className={block('p')}>Tutaj przekonasz się jak nasza firma wygląda</p>
    </div>
  );
}

export default Gallery;