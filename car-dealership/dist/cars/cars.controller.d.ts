import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dt';
export declare class CarsController {
    private readonly carsService;
    constructor(carsService: CarsService);
    getAllCars(): import("./interfaces/car.interface").Car[];
    getCarById(id: string): import("./interfaces/car.interface").Car;
    createCar(createCarDTO: CreateCarDto): {
        id: string;
        brand: string;
        model: string;
    };
    updateCar(id: string, updateCarDto: UpdateCarDto): import("./interfaces/car.interface").Car;
    deleteCar(id: string): void;
}
