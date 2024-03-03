import { pikachu } from './bases/03-classes';

import './style.css'

const app = document.querySelector<HTMLDivElement>('#app')!;

app.innerHTML = `
                <h1>Hello ${pikachu.name}!!</h1>
                `;


