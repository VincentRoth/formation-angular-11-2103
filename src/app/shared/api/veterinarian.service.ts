import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Veterinarian } from './veterinarian';

@Injectable({
  providedIn: 'root',
})
export class VeterinarianService {
  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<Veterinarian[]> {
    return this.httpClient.get<Veterinarian[]>('/api/veterinarians');
  }

  get(id: number): Observable<Veterinarian> {
    return this.httpClient.get<Veterinarian>(`/api/veterinarians/${id}`);
  }

  delete(id: number): Observable<void> {
    return this.httpClient.delete<void>(`/api/veterinarians/${id}`);
  }

  create(model: Veterinarian): Observable<Veterinarian> {
    return this.httpClient.post<Veterinarian>('/api/veterinarians', model);
  }

  update(model: Veterinarian): Observable<Veterinarian> {
    return this.httpClient.put<Veterinarian>(
      `/api/veterinarians/${model.id}`,
      model
    );
  }
}
