import axios from "axios";
axios.defaults.headers.common["x-api-key"] = "live_2ksxTUj2MSFZVGV9TXZHfNecu0yIWN4c8k2ScOV1AcrcMCLPxarX1JRERhweL1OH"

export function fetchBreeds() {
    return fetch("https://api.thecatapi.com/v1/breeds")
    .then(response => {
        if (!response.ok) {
            throw new Error("Oops! Something went wrong! Try reloading the page!")
        }
        return response.json()
    })
    .then(data => {
       return data.map(breed => ({
            id : breed.id,
            name : breed.name
        }))
    })
}


export function fetchCatByBreed(breedId) {
   return fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`)
   .then(response => {
    if (!response.ok) {
        throw new Error("Oops! Something went wrong! Try reloading the page!")
    }
    return response.json()  

}).then(data => {
    return data
})}

