import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uud } from 'uuid';

import { Brand } from './entities/brand.entity';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';

@Injectable()
export class BrandsService {
  //private brands: Brand[] = [
  //{
  //id: uud(),
  //name: 'Toyota',
  //createdAt: new Date().getTime(),
  //},
  //];

  create(createBrandDto: CreateBrandDto) {
    const { name } = createBrandDto;

    const brand: Brand = {
      id: uud(),
      name: name.toLowerCase(),
      createdAt: new Date().getTime(),
    };

    this.brands.push(brand);
    return brand;
  }

  findAll() {
    return this.brands;
  }

  findOne(id: string) {
    const brand = this.brands.find((brand) => brand.id === id);
    if (!brand) {
      throw new NotFoundException(`Brand with ID ${id} not found`);
    }
    return brand;
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {
    let brandDB = this.findOne(id);
    this.brands = this.brands.map((brand) => {
      if (brand.id === id) {
        brand.updatedAt = new Date().getTime();
        brandDB = { ...brandDB, ...updateBrandDto };
        return brandDB;
      }
      return brand;
    });
  }

  remove(id: string) {
    this.brands = this.brands.filter((brand) => brand.id !== id);
  }
  fillBrandsWithSeedData(brands: Brand[]) {
    this.brands = brands;
  }
}
