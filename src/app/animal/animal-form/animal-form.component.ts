import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Animal } from '../../shared/api/animal';
import { AnimalService } from '../../shared/api/animal.service';

@Component({
  selector: 'app-animal-form',
  templateUrl: './animal-form.component.html',
  styleUrls: ['./animal-form.component.scss'],
})
export class AnimalFormComponent implements OnInit {
  animal: Animal;

  constructor(
    private animalService: AnimalService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.animalService.get(Number(id)).subscribe((animal) => {
        this.animal = animal;
      });
    } else {
      this.animal = {
        name: '',
        comment: '',
        email: '',
        phoneNumber: '',
        species: '',
        veterinarian: '',
      };
    }
  }

  onSubmit(): void {
    if (this.animal.id) {
      this.animalService.update(this.animal).subscribe(() => {
        this.router.navigate(['/animals']);
      });
    } else {
      this.animalService.create(this.animal).subscribe(() => {
        this.router.navigate(['/animals']);
      });
    }
  }
}
