export class Pokemon {
    constructor(
        public readonly id: number, 
        public name: string
    ) {} 
}

export const pikachu = new Pokemon( 4, 'pikachu')