import { Loading, Notify } from "notiflix";
import { fetchBreeds, fetchCatByBreed } from "./cat-api";
import SlimSelect from 'slim-select';
import 'slim-select/dist/slimselect.css';
import 'notiflix/dist/notiflix-3.2.6.min.css';

const breedSelect = document.querySelector('.breed-select');
const loader = document.querySelector('.loader');
const catInfo = document.querySelector('.cat-info');
const errorMessage = document.querySelector('.error');

fetchBreeds().then(breeds => {
  breeds.forEach(element => {
    const options = document.createElement('option');
    options.value = element.id;
    options.textContent = element.name;
    breedSelect.appendChild(options);
  });
  new SlimSelect({
    select: '.breed-select',
  });
}).catch(error => {
  Loading.remove()
  Notify.failure('Oops! Something went wrong! Try reloading the page!', {clickToClose: true})
});


breedSelect.addEventListener('change', chosenCat)


function chosenCat(event) {
    Loading.circle('Loading data, please wait...');
    const breedId = event.target.value;
    fetchCatByBreed(breedId)
}
