import { Injectable } from '@angular/core';
import { Animal } from './animal';

@Injectable({
  providedIn: 'root',
})
export class AnimalService {
  constructor() {}

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
