import { Injectable } from '@nestjs/common';

@Injectable()
export class SeedService {
  populateDB() {
    return 'This action adds all the data to the database';
  }
}
