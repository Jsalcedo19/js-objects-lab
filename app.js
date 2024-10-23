const pokemon = require("./data.js");

const game = {
  party: [],
  gyms: [
    { location: "Pewter City", completed: false, difficulty: 1 },
    { location: "Cerulean City", completed: false, difficulty: 2 },
    { location: "Vermilion City", completed: false, difficulty: 3 },
    { location: "Celadon City", completed: false, difficulty: 4 },
    { location: "Fuchsia City", completed: false, difficulty: 5 },
    { location: "Saffron City", completed: false, difficulty: 6 },
    { location: "Cinnabar Island", completed: false, difficulty: 7 },
    { location: "Viridian City", completed: false, difficulty: 8 },
  ],
  items: [
    { name: "potion", quantity: 4 },
    { name: "pokeball", quantity: 8 },
    { name: "rare candy", quantity: 99 },
  ],
  // Exercise 3: add a new property called difficulty and give it a value"easy".
  difficulty: "esasy", 

};
console.dir(pokemon, { maxArrayLength: null });

// Objects lab question 1 answer

// Find the index of the pokemon with number 59
// Hint: the numbers are non-indexed, so the index might be
// number - 1

// Answer easy
console.log(pokemon[58]);

// Answer medium
// Doesn't work if data set gets modified below the number
// you're looking for
const getPokemon = (pokemon) => pokemon.number === 59;
const pokemonToFind = pokemon.findIndex(getPokemon);
console.log(pokemon[pokemonToFind].name);

// Answer hard
// TODO maybe use indexOf?
const findPokemonByNumber = (num) => {
  const idx = pokemon.findIndex((pokeman) => pokeman.number === num);
  return pokemon[idx];
};

console.log(findPokemonByNumber(59).name);
console.log(findPokemonByNumber(132).name);
//exercise 2:
console.log(game);