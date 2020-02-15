import { createRef } from 'react';
import img1 from './img/img1.jpg';
import img2 from './img/img2.jpg';
import img3 from './img/img3.jpg';

const state = {
  sections: 3,
  pages: 3,
  zoom: 75,
  top: createRef(),
  images: [img1, img2, img3],
};

export default state;
