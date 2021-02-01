/**
 * comic-page.component.ts
 * Componente donde se muestran todos los cómics
 */

import { Component, OnInit } from '@angular/core';
import { InterfaceHomeComics } from '../../interfaces/home-comics';
import { HomeComicsService } from '../../services/home-comics.service';

@Component({
  selector: 'app-comic-page',
  templateUrl: './comic-page.component.html',
  styleUrls: ['./comic-page.component.css'],
  providers: [HomeComicsService]
})
export class ComicPageComponent implements OnInit {

  public resultado: InterfaceHomeComics;
  p: number = 1;

  constructor(
    private _servicioHomeComics: HomeComicsService,
  ) { }

  ngOnInit(): void {

    this._servicioHomeComics.pageComics('').then((response) => {
      this.resultado = response;
    }, (error) => {
      alert("Error: " + error.statusText)
    })

  }

  titulo = () => {
    this._servicioHomeComics.pageComicsTitulo('').then((response) => {
      this.resultado = response;
    }, (error) => {
      alert("Error: " + error.statusText)
    })
  }

  tituloDes = () => {
    this._servicioHomeComics.pageComicsTituloDes('').then((response) => {
      this.resultado = response;
    }, (error) => {
      alert("Error: " + error.statusText)
    })
  }

  modificacion = () => {
    this._servicioHomeComics.pageComicsMod('').then((response) => {
      this.resultado = response;
    }, (error) => {
      alert("Error: " + error.statusText)
    })
  }

  modificacionDes = () => {
    this._servicioHomeComics.pageComicsModDes('').then((response) => {
      this.resultado = response;
    }, (error) => {
      alert("Error: " + error.statusText)
    })
  }

  venta = () => {
    this._servicioHomeComics.pageComicsVenta('').then((response) => {
      this.resultado = response;
    }, (error) => {
      alert("Error: " + error.statusText)
    })
  }

  ventaDes = () => {
    this._servicioHomeComics.pageComicsVentaDes('').then((response) => {
      this.resultado = response;
    }, (error) => {
      alert("Error: " + error.statusText)
    })
  }


}
