// Описаний у документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

export function createImages(data) {
    const lightbox = new SimpleLightbox('.gallery a', { 
        captions: true,
        captionsData: 'alt',
        captionDelay: 250
     });
    const list = document.querySelector(".gallery-list");
    let images =  data.hits.map((hit) => `<div class="image-frame"><a src="${hit.largeImageURL}"><img class="image" src="${hit.webformatURL}" alt="${hit.tags}" /></a><h5>likes</h5><p>${hit.likes}</p></div>`).join("");
    list.insertAdjacentHTML("afterbegin", images);
    lightbox.refresh();
}

export function clearImages() {
    const list = document.querySelector(".gallery-list");
    list.innerHTML = "";
}