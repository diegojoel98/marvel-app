import { Component, OnInit } from '@angular/core';
import { InterfaceHomePersonajes } from '../../interfaces/home-personajes';
import { HomePersonajesService } from '../../services/home-personajes.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {

  public resultado: InterfaceHomePersonajes;

  constructor(
    private _servicioHomePersonajes: HomePersonajesService
  ) { }

  ngOnInit(): void {

    this._servicioHomePersonajes.homePersonajes('').then((response) => {
      this.resultado = response;
    }, (error) => {
      alert("Error: " + error.statusText)
    })

  }

}
