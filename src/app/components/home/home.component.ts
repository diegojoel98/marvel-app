
/**
 * home.component.ts
 * Componente home donde se carga una lista pequeña de cómics y personajes
 */

import { Component, OnInit } from '@angular/core';
import { InterfaceHomePersonajes } from '../../interfaces/home-personajes';
import { HomePersonajesService } from '../../services/home-personajes.service';
import { ForoService } from '../../services/foro-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ForoService]
})
export class HomeComponent implements OnInit {

  public token: string
  public userName: string
  public resultado: InterfaceHomePersonajes;

  constructor(
    private _servicioHomePersonajes: HomePersonajesService,
    private _foroService: ForoService
  ) { this.userName = null; }

  ngOnInit(): void {
    this.token = this._foroService.getToken();

    if (this.token != null && this.token != undefined) {
      this._foroService.getUserLogged(this.token).subscribe(
        res => {
          this.userName = res.usuarioDB.nombre;
          console.log('userName: ' + this.userName);
        },
        err => {
          console.log(err);
        }
      )
    }


    this._servicioHomePersonajes.homePersonajes('').then((response) => {
      this.resultado = response;
    }, (error) => {
      alert("Error: " + error.statusText)
    })

  }

}
