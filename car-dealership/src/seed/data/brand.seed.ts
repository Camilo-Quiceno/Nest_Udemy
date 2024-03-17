import { Brand } from '../../brands/entities/brand.entity';
import { v4 as uud } from 'uuid';

export const BRAND_SEED: Brand[] = [
  {
    id: uud(),
    name: 'Volvo',
    createdAt: new Date().getTime(),
  },
  {
    id: uud(),
    name: 'Honda',
    createdAt: new Date().getTime(),
  },
  {
    id: uud(),
    name: 'Toyota',
    createdAt: new Date().getTime(),
  },
  {
    id: uud(),
    name: 'Jeep',
    createdAt: new Date().getTime(),
  },
  {
    id: uud(),
    name: 'Tesla',
    createdAt: new Date().getTime(),
  },
];
