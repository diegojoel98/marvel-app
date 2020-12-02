import { TestBed } from '@angular/core/testing';

import { BuscarComicService } from './buscar-comic.service';

describe('BuscarComicService', () => {
  let service: BuscarComicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuscarComicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
