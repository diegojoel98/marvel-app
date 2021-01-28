import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaPersonajeComponent } from './vista-personaje.component';

describe('VistaPersonajeComponent', () => {
  let component: VistaPersonajeComponent;
  let fixture: ComponentFixture<VistaPersonajeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaPersonajeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaPersonajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
