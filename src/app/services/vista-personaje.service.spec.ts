import { TestBed } from '@angular/core/testing';

import { VistaPersonajeService } from './vista-personaje.service';

describe('VistaPersonajeService', () => {
  let service: VistaPersonajeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VistaPersonajeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
