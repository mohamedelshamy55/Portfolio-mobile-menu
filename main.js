import {
  clickHandler,
  hamburger,
  navList,
  activeHandler,
  btns,
} from './jlistt.js';

import modalHandler from './popup.js';

// hamburger toggle
hamburger.addEventListener('click', clickHandler);

// nav list active toggle
navList.forEach((item) => {
  item.addEventListener('click', activeHandler);
});

// handle button click for modal popup
btns.forEach((btn) => btn.addEventListener('click', modalHandler));
