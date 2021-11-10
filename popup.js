import cardModel from './cmod.js';
import { findItem } from './querysel.js';

/**
 *
 * @function modelHandler
 * @param {event} e
 * @description {handles model popup}
 */
export default function modelHandler(e) {
  const card = findItem(e.currentTarget, cardModel); // find the item in the model
  const {
    imgSrc,
    header,
    authorLang,
    authorList1,
    authorList2,
    para,
    langList1,
    langList2,
    langList3,
    langList4,
  } = card;
  const model = document.createElement('section');
  model.className = 'model';
  model.innerHTML = `
  <div class="card model-card">
  <div class="card-details">
  <header>
  <h2>${header}</h2>
  <img src="closeiconb.svg" alt="close icon" id="closeImg"/>
  </header>
  <div class="author-lang">
  <span>${authorLang}</span>
  <ul>
    <li>${authorList1}</li>
    <li>${authorList2}</li>
  </ul>
  </div>
  <figure>
  <img
    src=${imgSrc}
    alt="project image"
  />
  </figure>
  <div class="card-flex">
  <p class="project-desc">${para}</p>
  <div class="contain">
  <ul class="project-lang">
  <li>${langList1}</li>
  <li>${langList2}</li>
  <li>${langList3}</li>
  <li class="optional">${langList4}</li>
  </ul>
  <hr />
  <div class="action-btn">
  <button class="project-btn" type="button">
  <a href="https://mohamedelshamy55.github.io/Portfolio-mobile-menu/" target="_blank">See live <img src="liveicon.svg" /></a>
  </button>
  <button class="project-btn" type="button">
    <a href="https://mohamedelshamy55.github.io/Portfolio-mobile-menu/" target="_blank">See Source <img src="giticon.svg" /></a>
  </button>
  </div>
  </div>
  </div>
  </div>
  </div>
`;
  // check if language list is more than 3
  if (!langList4) {
    model.querySelector('.optional').style.display = 'none';
  }
  document.querySelector('body').insertAdjacentElement('afterbegin', model);
  model.querySelector('#closeImg').addEventListener('click', () => model.remove());
}
