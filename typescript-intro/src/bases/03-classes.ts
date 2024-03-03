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
}

export const pikachu = new Pokemon( 4, 'pikachu');

console.log(pikachu);

pikachu.scream();
pikachu.speak();