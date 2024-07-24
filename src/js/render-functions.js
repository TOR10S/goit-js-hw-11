// Описаний у документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

export function createImages(data) {
    const list = document.querySelector(".gallery-list");
    let images =  data.hits.map((hit) => `<li><div class="image-frame"><a src="${hit.largeImageURL}"><img class="image" src="${hit.webformatURL}" alt="${hit.tags}" /></a><h5>likes</h5><p>${hit.likes}</p></div></li>`).join("");
    list.insertAdjacentHTML("afterbegin", images);
    const lightbox = new SimpleLightbox('.gallery-list a');
    lightbox.refresh();
}

export function clearImages() {
    const list = document.querySelector(".gallery-list");
    list.innerHTML = "";
}

