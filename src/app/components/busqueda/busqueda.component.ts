import { Component, OnInit } from '@angular/core';
import { InterfaceHomeComics } from '../../interfaces/home-comics';
import { BuscarComicService } from '../../services/buscar-comic.service';
import { InterfaceHomePersonajes } from '../../interfaces/home-personajes';
import { BuscarPersonajeService } from '../../services/buscar-personaje.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  public resultado: InterfaceHomeComics;
  public resultadoPers: InterfaceHomePersonajes;
  public queryComics: string;
  public queryPersonajes: string;

  constructor(
    private _buscarComicService: BuscarComicService,
    private _buscarPersonajeService: BuscarPersonajeService
  ) { }

  ngOnInit(): void {

    /*this._buscarComicService.busquedaComic('spider-man').then((response) => {
      this.resultado = response;
    }, (error) => {
      alert("Error: " + error.statusText)
    })*/

  }

  busquedaComic = () => {
    this._buscarComicService.busquedaComic(this.queryComics).then((response) => {
      this.resultado = response;
    }, (error) => {
      alert("Error: " + error.statusText)
    })
  }

  busquedaPersonaje = () => {
    this._buscarPersonajeService.busquedaPersonaje(this.queryPersonajes).then((response) => {
      this.resultadoPers = response;
    }, (error) => {
      alert("Error: " + error.statusText)
    })
  }


}
