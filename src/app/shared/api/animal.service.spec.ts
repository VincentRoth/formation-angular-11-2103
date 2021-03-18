import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { AnimalService } from './animal.service';

describe('AnimalService', () => {
  let service: AnimalService;
  let httpCtrl: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(AnimalService);
    httpCtrl = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get an animal by id', () => {
    service.get(2).subscribe((animal) => expect(animal.id).toEqual(2));
    const testRequest = httpCtrl.expectOne('/api/animals/2');
    expect(testRequest.request.method).toEqual('GET');
    testRequest.flush({ id: 2 });
    httpCtrl.verify();
  });
});
