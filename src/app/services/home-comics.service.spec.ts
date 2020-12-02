import { TestBed } from '@angular/core/testing';

import { HomeComicsService } from './home-comics.service';

describe('HomeComicsService', () => {
  let service: HomeComicsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeComicsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
