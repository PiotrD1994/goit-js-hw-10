import axios from "axios";
axios.defaults.headers.common["x-api-key"] = "live_2ksxTUj2MSFZVGV9TXZHfNecu0yIWN4c8k2ScOV1AcrcMCLPxarX1JRERhweL1OH";
import { fetchBreeds, fetchCatByBreed } from "./cat-api";

const breedSelect = document.querySelector('.breed-select');
const loader = document.querySelector('.loader');
const catInfo = document.querySelector('.cat-info');
const errorMessage = document.querySelector('.error')
const selectedBreedId = breedSelect.value

fetchBreeds().then(breeds => {
    for (let i = 0; i < breeds.length; i++) {
        const breed = breeds[i]
        const options = document.createElement('option')
        options.value = breeds.id
        options.textContent = breed.name
        breedSelect.appendChild(options)
    }
})

breedSelect.addEventListener('change', selectedBreedId)

function selectedBreedId() {
    fetchCatByBreed().then(catData)
    const markup = catData.map((catDataOne => {
        return `<div>
        <img src="${catDataOne.url}" alt="${catDataOne.name}">
        <h1>${catDataOne.name}</h1>
        <p>${catDataOne.description}</p>
        <p>${catDataOne.temperament}</p>
        </div>`
    }).join(""))
    catInfo.innerHTML = markup
}

