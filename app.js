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
  ]

};
console.dir(pokemon, { maxArrayLength: null });

// Objects lab question 1 answer

// Find the index of the pokemon with number 59
// Hint: the numbers are non-indexed, so the index might be
// number - 1

// Answer easy
console.log(pokemon[58])

// Answer medium
// Doesn't work if data set gets modified below the number 
// you're looking for
const getPokemon = (pokemon) => pokemon.number === 59
const pokemonToFind = pokemon.findIndex(getPokemon)
console.log(pokemon[pokemonToFind].name)

// Answer hard
// TODO maybe use indexOf?
const findPokemonByNumber = (num) => {
  const idx = pokemon.findIndex((pokeman) => pokeman.number === num)
  return pokemon[idx]
}
console.log(typeof(findPokemonByNumber))
console.log(findPokemonByNumber(59).name)
console.log(findPokemonByNumber(132).name)

//exercise 2:
console.log(game);

// Exercise 3: add a new property called difficulty and give it a value"easy".
game.difficulty = "easy"; 
console.log(game);

/*
Exercise 4
1. Select a starter Pokémon from the `pokemon` array. Remember, a starter Pokémon's `starter` property is true.
2. Add this Pokémon to the `game.party` array. Which array method will you use to add them?


Solve Exercise 4 here:
*/

game.party.push(findPokemonByNumber(7))
console.log(game.party)

/*
Exercise 5
1. Choose three more Pokémon from the `pokemon` array and add them to your party.
2. Consider different attributes like 'type' or 'HP' for your selection. Which array method will you use to add them?


Solve Exercise 5 here:
*/
const Charmander = pokemon.find(poke => poke.name === "Charmander");
const Bulbasaur = pokemon.find(poke => poke.name === "Bulbasaur");
const Pikachu = pokemon.find(poke => poke.name === "Pikachu");

game.party.push(Charmander, Bulbasaur, Pikachu);

console.log("Exercise 5 result:",game.party);

/*
Exercise 6
1. Set the `completed` property to true for gyms with a difficulty below 3.
2. Think about how you'd loop through the `gyms` array to check and update the `completed` property.


Solve Exercise 6 here:
*/
