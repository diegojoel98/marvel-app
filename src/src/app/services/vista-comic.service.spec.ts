import { TestBed } from '@angular/core/testing';

import { VistaComicService } from './vista-comic.service';

describe('VistaComicService', () => {
  let service: VistaComicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VistaComicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
