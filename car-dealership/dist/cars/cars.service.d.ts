import { Car } from './interfaces/car.interface';
import { CreateCarDto, UpdateCarDto } from './dto';
export declare class CarsService {
    private cars;
    findAll(): Car[];
    findOneById(id: string): Car;
    create(CreateCarDto: CreateCarDto): {
        id: string;
        brand: string;
        model: string;
    };
    update(id: string, updateCarDto: UpdateCarDto): Car;
    delete(id: string): void;
    fillCarsWithSeedData(cars: Car[]): void;
}
