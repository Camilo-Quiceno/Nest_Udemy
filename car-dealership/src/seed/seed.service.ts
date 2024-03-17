import { Injectable } from '@nestjs/common';
import { BRAND_SEED } from './data/brand.seed';
import { CARS_SEED } from './data/cars.seed';
import { BrandsService } from 'src/brands/brands.service';
import { CarsService } from 'src/cars/cars.service';

@Injectable()
export class SeedService {
  constructor(
    private readonly brandsService: BrandsService,
    private readonly carsService: CarsService,
  ) {}
  populateDB() {
    this.brandsService.fillBrandsWithSeedData(BRAND_SEED);
    this.carsService.fillCarsWithSeedData(CARS_SEED);
    return 'This action adds all the data to the database';
  }
}
