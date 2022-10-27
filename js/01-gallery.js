import { galleryItems } from './gallery-items.js';
// Change code below this line

const refs = {
  gallery: document.querySelector('.gallery'),
}

function createGalleryMarkup(items) {
  const markup = items.map(({ preview, original, description }) => {
    return `<div class="gallery__item"><a class="gallery__link" href="${original}"><img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/></a></div>`
  }).join('');
  return markup;
}

const galleryMarkup = createGalleryMarkup(galleryItems);

refs.gallery.insertAdjacentHTML('beforeend', galleryMarkup);

function onGalleryClick(e) {
  event.preventDefault();
  if (!e.target.classList.contains('gallery__image')) {
    return;
  } 
  basicLightbox.create(`<img width="1400" height="900" src="${e.target.dataset.source}">`).show();
}

refs.gallery.addEventListener('click', onGalleryClick);