import axios from "axios";
axios.defaults.headers.common["x-api-key"] = "live_2ksxTUj2MSFZVGV9TXZHfNecu0yIWN4c8k2ScOV1AcrcMCLPxarX1JRERhweL1OH";
import { fetchBreeds, fetchCatByBreed } from "./cat-api";

const breedSelect = document.querySelector('.breed-select');
const loader = document.querySelector('.loader');
const catInfo = document.querySelector('.cat-info');
const errorMessage = document.querySelector('.error')

fetchBreeds()
.then(breeds => {
    breeds.forEach(breed => {
        const option = document.createElement("option")
        option.value = breed.id
        option.textContent = breed.name
        breedSelect.appendChild(option)
    })
    breedSelect.addEventListener("change", event => {
        const selectedBreedId = event.target.value
        loader.style.display = "block"
        catInfo.style.display = "none"
        fetchCatByBreed(selectedBreedId)
        .then(CatData => {
            catInfo.innerHTML = `
            <img src="${catData.url}" alt="Cat Image">
            <h3>${catData.breeds[0].name}</h3>
            <p><strong>Description:</strong> ${catData.breeds[0].description}</p>
            <p><strong>Temperament:</strong> ${catData.breeds[0].temperament}</p>
        `
        })
    })
}).catch(error => {
    loader.style.display = "none"
    error.style.display = "block"
})