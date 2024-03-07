import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';
export declare class CarsController {
    private readonly carsService;
    constructor(carsService: CarsService);
    getAllCars(): import("./interfaces/car.interface").Car[];
    getCarById(id: string): import("./interfaces/car.interface").Car;
    createCar(createCarDTO: CreateCarDto): CreateCarDto;
    updateCar(id: number, body: any): any;
    deleteCar(id: number): {
        method: string;
        id: number;
    };
}
