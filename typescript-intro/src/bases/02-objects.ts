export const pokemonIds = [1, 2, 3, 4, 5];

interface Pokemon {
    id: number;
    name: string;
    age: number | undefined;
}

export const pokemon:Pokemon = { 
    name: 'Pikachu', 
    id: 25, 
    age: 1
};

export const pokemons = [];