import { createRef } from 'react';

const state = {
  sections: 3,
  pages: 3,
  zoom: 75,
  top: createRef(),
  images: ['/img1.jpg', '/img2.jpg', '/img3.jpg'],
};

export default state;
