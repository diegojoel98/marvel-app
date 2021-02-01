/**
 * comics.component.ts
 * Componente donde se muestran 5 cómics en la pagina de inicio
 */
import { Component, OnInit } from '@angular/core';
import { InterfaceHomeComics } from '../../interfaces/home-comics';
import { HomeComicsService } from '../../services/home-comics.service';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})
export class ComicsComponent implements OnInit {

  public resultado: InterfaceHomeComics;

  constructor(
    private _servicioHomeComics: HomeComicsService
  ) { }

  ngOnInit(): void {

    this._servicioHomeComics.homeComics('').then((response) => {
      this.resultado = response;
    }, (error) => {
      alert("Error: " + error.statusText)
    })

  }

}
