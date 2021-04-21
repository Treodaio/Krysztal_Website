import React from 'react';

import bemCssModules from 'bem-css-modules';
import { default as AboutStyles } from './About.module.scss';
const block = bemCssModules(AboutStyles);

const About = () => {
  return (
    <div className={block()}>
      <h1 className={block('title')}>Informacje o firmie</h1>
      <p className={block('p')}>Ta sekcja powstanie już wkrótce</p>
    </div>
  );
}

export default About;