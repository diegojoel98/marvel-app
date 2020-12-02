import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaComicComponent } from './vista-comic.component';

describe('VistaComicComponent', () => {
  let component: VistaComicComponent;
  let fixture: ComponentFixture<VistaComicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaComicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaComicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
