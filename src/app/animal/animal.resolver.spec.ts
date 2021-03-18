import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { AnimalService } from '../shared/api/animal.service';

import { AnimalResolver } from './animal.resolver';

describe('AnimalResolver', () => {
  let resolver: AnimalResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AnimalService],
    });
    resolver = TestBed.inject(AnimalResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
