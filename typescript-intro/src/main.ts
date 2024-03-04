//import { pikachu } from './bases/03-classes';
//import { charmander } from './bases/04-inyection';
import { charmander } from './bases/06-decorators2';

import './style.css'

const app = document.querySelector<HTMLDivElement>('#app')!;

app.innerHTML = `
                <h1>Hello ${charmander.name}!!</h1>
                `;


            
