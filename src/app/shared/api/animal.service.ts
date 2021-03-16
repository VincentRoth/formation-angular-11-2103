import { Injectable } from '@angular/core';
import { Animal } from './animal';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AnimalService {
  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<Animal[]> {
    return this.httpClient.get<Animal[]>('/api/animals');
  }

  get(id: number): Observable<Animal> {
    return this.httpClient.get<Animal>(`/api/animals/${id}`);
  }

  delete(id: number): Observable<void> {
    return this.httpClient.delete<void>(`/api/animals/${id}`);
  }
}
