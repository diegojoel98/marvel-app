import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonajesPageComponent } from './personajes-page.component';

describe('PersonajesPageComponent', () => {
  let component: PersonajesPageComponent;
  let fixture: ComponentFixture<PersonajesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonajesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonajesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
