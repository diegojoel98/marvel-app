import { TestBed } from '@angular/core/testing';

import { BuscarPersonajeService } from './buscar-personaje.service';

describe('BuscarPersonajeService', () => {
  let service: BuscarPersonajeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuscarPersonajeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
