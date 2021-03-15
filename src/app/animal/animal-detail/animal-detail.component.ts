import { Component, OnInit } from '@angular/core';
import { Animal } from '../../shared/api/animal';

@Component({
  selector: 'app-animal-detail',
  templateUrl: './animal-detail.component.html',
  styleUrls: ['./animal-detail.component.scss'],
})
export class AnimalDetailComponent implements OnInit {
  animal: Animal;

  constructor() {}

  ngOnInit(): void {
    this.animal = {
      comment: 'comment',
      email: 'email@test.com',
      name: 'Michat',
      phoneNumber: '06.12.34.56.78',
      species: 'cat',
      veterinarian: 'Mr Dupont',
    };
  }
}
