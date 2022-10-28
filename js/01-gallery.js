import { galleryItems } from './gallery-items.js';
// Change code below this line

const refs = {
  gallery: document.querySelector('.gallery'),
}

// ========== Создание и рендер разметки ==========

const createGalleryMarkup = (items) => {
  const markup = items.map(({ preview, original, description }) => {
    return `<div class="gallery__item"><a class="gallery__link" href="${original}"><img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/></a></div>`
  }).join('');

  return markup;
};

const galleryMarkup = createGalleryMarkup(galleryItems);

refs.gallery.insertAdjacentHTML('beforeend', galleryMarkup);

// ========== Модальное окно basicLightbox ==========

let instance;

const onGalleryClick = (e) => {
  event.preventDefault();

  const imgSource = e.target.dataset.source;

  if (!e.target.classList.contains('gallery__image')) {
    return;
  }

  instance = basicLightbox.create(`<img width="1400" height="900" src="${imgSource}">`);

  instance.show();
  addWindowEventListener();
};

refs.gallery.addEventListener('click', onGalleryClick);

// ========== Функции закрытия по Esc ==========

const addWindowEventListener = () => window.addEventListener('keydown', onEscPress);

const removeWindowEventListener = () => window.removeEventListener('keydown', onEscPress);

const onEscPress = () => {
  instance.close();
  removeWindowEventListener();
};
