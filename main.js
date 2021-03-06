import {
  clickHandler,
  hamburger,
  navList,
  activeHandler,
  btns,
} from './jlistt.js';

import modelHandler from './popup.js';

import {
  inputs,
  formHandler,
  form,
  blurHandler,
  autoFill,
} from './querysel.js';

// hamburger toggle
hamburger.addEventListener('click', clickHandler);

// nav list active toggle
navList.forEach((item) => {
  item.addEventListener('click', activeHandler);
});

// handle button click for model popup
btns.forEach((btn) => btn.addEventListener('click', modelHandler));

inputs.forEach((input) => {
  input.addEventListener('blur', blurHandler);
});

form.addEventListener('submit', formHandler);

// auto fills the inputs with available data in the local storage
autoFill();
