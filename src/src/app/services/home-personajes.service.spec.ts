import { TestBed } from '@angular/core/testing';

import { HomePersonajesService } from './home-personajes.service';

describe('HomePersonajesService', () => {
  let service: HomePersonajesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomePersonajesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
