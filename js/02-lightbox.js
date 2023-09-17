import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryList = document.querySelector(".gallery");
const markup = galleryItems.map((item) => `<li class="gallery__item">
   <a class="gallery__link" href="${item.original}" data-caption="${item.description}">
      <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
   </a>
</li>`).join("");
galleryList.insertAdjacentHTML("beforeend", markup);
var lightbox = new SimpleLightbox('.gallery a', { galleryItems });
console.log(galleryItems);
