import { Component, OnInit } from '@angular/core';
import { InterfaceHomePersonajes } from '../../interfaces/home-personajes';
import { HomePersonajesService } from '../../services/home-personajes.service';

@Component({
  selector: 'app-personajes-page',
  templateUrl: './personajes-page.component.html',
  styleUrls: ['./personajes-page.component.css']
})
export class PersonajesPageComponent implements OnInit {

  public resultado: InterfaceHomePersonajes;
  p: number = 1;

  constructor(
    private _servicioHomePersonajes: HomePersonajesService
  ) { }

  ngOnInit(): void {

    this._servicioHomePersonajes.pagePersonajes('').then((response) => {
      this.resultado = response;
    }, (error) => {
      alert("Error: " + error.statusText)
    })

  }

}
