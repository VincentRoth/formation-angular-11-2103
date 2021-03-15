import { Injectable } from '@angular/core';
import { Animal } from './animal';

@Injectable({
  providedIn: 'root',
})
export class AnimalService {
  constructor() {}

  getAll(): Animal[] {
    return [
      {
        comment: 'comment2',
        email: 'email@test.com',
        name: 'Michat',
        phoneNumber: '06.12.34.56.78',
        species: 'cat',
        veterinarian: 'Mr Dupont',
      },
      {
        comment: 'comment',
        email: 'email2@test.com',
        name: 'Milou',
        phoneNumber: '06.12.34.56.89',
        species: 'dog',
        veterinarian: 'Mr Dupond',
      },
    ];
  }

  get(): Animal {
    return {
      comment: 'comment2',
      email: 'email@test.com',
      name: 'Michat',
      phoneNumber: '06.12.34.56.78',
      species: 'cat',
      veterinarian: 'Mr Dupont',
    };
  }
}
