import { Car } from './../../cars/interfaces/car.interface';
import { v4 as uud } from 'uuid';

export const CARS_SEED: Car[] = [
  {
    id: uud(),
    model: 'Corolla',
    brand: 'Toyota',
  },
  {
    id: uud(),
    model: 'Civic',
    brand: 'Honda',
  },
  {
    id: uud(),
    model: 'Cheerokee',
    brand: 'Jeep',
  },
];
