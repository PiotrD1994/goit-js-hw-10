import axios from "axios";
axios.defaults.headers.common["x-api-key"] = "live_2ksxTUj2MSFZVGV9TXZHfNecu0yIWN4c8k2ScOV1AcrcMCLPxarX1JRERhweL1OH";
import { fetchBreeds, fetchCatByBreed } from "./cat-api";

const breedSelect = document.querySelector('.breed-select');
const loader = document.querySelector('.loader');
const catInfo = document.querySelector('.cat-info');
const errorMessage = document.querySelector('.error')


fetchBreeds().then(breeds => {
    for (let i = 0; i < breeds.length; i++) {
        const breed = breeds[i]
        const options = document.createElement('option')
        options.value = breed.id
        options.textContent = breed.name
        breedSelect.appendChild(options)
    }
})

breedSelect.addEventListener('change', handleSelectChange)

function handleSelectChange() {
const selectedBreedId = breedSelect.value
if (selectedBreedId) {
    loader.style.display = "block"
    fetchCatByBreed(selectedBreedId)
    .then(catData => {
        const markup = `
        <div>
        <img src="${catData.url}" alt="${catData.name}">
        <h1>${catData.name}</h1>
        <p>${catData.description}</p>
        <p>${catData.temperament}</p>
        </div>`
        catInfo.innerHTML = markup
    })
    .catch(error =>{
        errorMessage.style.display = "block"
    })
    .finally(() =>{
        loader.style.display = "none"
    })
}
}

