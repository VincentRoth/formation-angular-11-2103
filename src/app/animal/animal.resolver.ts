import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Animal } from '../shared/api/animal';
import { AnimalService } from '../shared/api/animal.service';

@Injectable({
  providedIn: 'root',
})
export class AnimalResolver implements Resolve<Animal> {
  constructor(private animalService: AnimalService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Animal> {
    const id = route.paramMap.get('id');
    return this.animalService.get(Number(id));
  }
}
