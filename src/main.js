// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";
// Описаний у документації


import searchImagesByQuery from "./js/pixabay-api";
import { createImages, clearImages } from "./js/render-functions";

const form = document.querySelector(".gallery-form")
const input = document.querySelector(".input-for-gallery")

form.addEventListener("submit", handleSubmit)

function handleSubmit(event) {
    clearImages()
    event.preventDefault();
    let wordForSearch = input.value.trim();
    searchImagesByQuery(`${wordForSearch}`).then((data) => {if (data.total === 0) {
    iziToast.error({
        message: 'Sorry, there are no images matching your search query. Please try again!',
    });
    return;
  } else {createImages(data)}
});
}

