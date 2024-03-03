import axios from 'axios';
import { Move, PokeapiResponse } from '../interfaces/pokeapi-response.interface';

export class Pokemon {

    get imageUrl():string {
        return `https:://pokemon.com/${this.id}.jpg`
    }

    constructor(
        public readonly id: number, 
        public name: string,
    ) {} 

    scream(){
        console.log(`${this.name.toUpperCase()}!!`)
    }

    speak(){
        console.log(`I'm ${this.name}!!`)
    }

    async getMoves(): Promise<Move[]>{
        const { data } = await axios.get<PokeapiResponse>('https://pokeapi.co/api/v2/pokemon/25');
        console.log( data.moves );
        return data.moves;
    }
}

export const pikachu = new Pokemon( 4, 'pikachu');

console.log(pikachu);

pikachu.scream();
pikachu.speak();

console.log( pikachu.getMoves() );