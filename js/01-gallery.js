import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryList = document.querySelector(".gallery");
galleryList.insertAdjacentHTML("beforeend", createMarkup(galleryItems));
galleryList.addEventListener("click", handleClick);
function createMarkup (arr) {
    return arr.map(({ preview, original, description }) => `
    <li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>
    `).join("");
    
}

function handleClick(event) {
    event.preventDefault();
  if (event.target.nodeName !== "IMG")
    return;
    const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="1280">
`)

instance.show()
    console.log(event.target);
}

