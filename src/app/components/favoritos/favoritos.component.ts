/**
 * favoritos.component.ts
 * Componente donde se mostrarán los favoritos guardados
 */

import { Component, OnInit } from '@angular/core';
import { InterfaceHomePersonajes } from '../../interfaces/home-personajes';
import { VistaPersonajeService } from '../../services/vista-personaje.service';
import { InterfaceHomeComics } from 'src/app/interfaces/home-comics';
import { HomePersonajesService } from '../../services/home-personajes.service';
import { VistaComicService } from 'src/app/services/vista-comic.service';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css'],
  providers: [VistaPersonajeService, VistaComicService]
})
export class FavoritosComponent implements OnInit {

  comics: InterfaceHomeComics[] = [];
  personajes: InterfaceHomePersonajes[] = [];

  constructor(
    private _vistaPersonajeService: VistaPersonajeService,
    private _vistaComicService: VistaComicService
  ) { }

  ngOnInit(): void {

    this.comics = this._vistaComicService.getPosts();
    console.log(this.comics);

    this.personajes = this._vistaPersonajeService.getPosts();
    console.log(this.personajes);

  }

}
