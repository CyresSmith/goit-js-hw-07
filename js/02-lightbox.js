import { galleryItems } from './gallery-items.js';
// Change code below this line

const refs = {
  gallery: document.querySelector('.gallery'),
};

// ========== Создание и рендер разметки ==========

const createGalleryMarkup = (items) => {
  const markup = items.map(({ preview, original, description }) => `<a class="gallery__item" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}"/>
              </a>`).join('');

  return markup;
};

const galleryMarkup = createGalleryMarkup(galleryItems);

refs.gallery.insertAdjacentHTML('beforeend', galleryMarkup);

// ========== Галерея SimpleLightbox ==========

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  showCounter: false,
  disableRightClick: true,
});
