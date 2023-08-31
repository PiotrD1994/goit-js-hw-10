import axios from "axios";
axios.defaults.headers.common["x-api-key"] = "live_2ksxTUj2MSFZVGV9TXZHfNecu0yIWN4c8k2ScOV1AcrcMCLPxarX1JRERhweL1OH"


export function fetchBreeds() {
    return fetch("https://api.thecatapi.com/v1/breeds")
    .then(response => {
     if (!response.ok) {
         throw new Error(response.status)
     }
     return response.json()
    })
    .then(data => {
       return data.map(breed =>({
        id: breed.id,
        name: breed.name
    }))
})
 }

 export function fetchCatByBreed(breedID) {
    return fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedID}`)
    .then(response => {
        if(!response.ok) {
            throw new Error ("Failed to fetch cat information")
        }
        return response.json()
    })
    .then(data => {
        return data[0]
    })
 }
