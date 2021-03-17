import { TestBed } from '@angular/core/testing';

import { AnimalResolver } from './animal.resolver';

describe('AnimalResolver', () => {
  let resolver: AnimalResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(AnimalResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
