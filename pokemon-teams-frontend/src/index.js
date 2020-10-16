const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`
const MAIN = document.querySelector('main')

getTrainers()

function getTrainers() {
    fetch(TRAINERS_URL)
    .then(res => res.json())
    .then(data => console.log(data))
    //.then(data => data.forEach(trainer => trainerDiv(trainer)))
}

// function buildTrainers(trainers) {
//     trainers.forEach(trainer => trainerDiv(trainer))
// }

function trainerDiv(trainer) {
    let div = document.createElement('div')
    let button = document.createElement('button')
    let ul = document.createElement('ul')
    let p = document.createElement('p')
    div.className = 'card'
    div.dataset.Id = trainer.id
    button.innerText = 'Add Pokemon'
    button.dataset.trainerId = trainer.id
    p.textContent = trainer.name
    div.append(p, button, ul)
    MAIN.appendChild(div)
    buildPokemons(trainer)
}

function buildPokemons(trainer) {
    trainer.pokemons.forEach(pokemon => buildPokemon(trainer, pokemon))
}

function buildPokemon(trainer, pokemon) {
    let li = document.createElement('li')
    let button = document.createElement('button')
    li.textContent = `${pokemon.nickname} (${pokemon.species})`
    button.textContent = "Release"
    button.className = "release"
    button.dataset.pokemonId = pokemon.id

}