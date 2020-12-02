import { Component, OnInit } from '@angular/core';
import { InterfaceHomeComics } from '../../interfaces/home-comics';
import { VistaComicService } from '../../services/vista-comic.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { InterfaceHomePersonajes } from 'src/app/interfaces/home-personajes';

@Component({
  selector: 'app-vista-comic',
  templateUrl: './vista-comic.component.html',
  styleUrls: ['./vista-comic.component.css'],
  providers: [VistaComicService]
})
export class VistaComicComponent implements OnInit {

  public resultado: InterfaceHomeComics;
  public resultadoPersonajes: InterfaceHomePersonajes;
  public queryId: string;

  constructor(
    private _route: ActivatedRoute,
    private router: Router,
    private _vistaComicService: VistaComicService
  ) { }

  ngOnInit(): void {

    this._route.paramMap.subscribe((params: ParamMap) => {
      this.queryId = params.get('id');
    })
    console.log(this.queryId);


    this._vistaComicService.comic(this.queryId).then((response) => {
      this.resultado = response;
    }, (error) => {
      alert("Error: " + error.statusText)
    })

    this._vistaComicService.personajesComic(this.queryId).then((response) => {
      this.resultadoPersonajes = response;
    }, (error) => {
      alert("Error: " + error.statusText)
    })

  }

}
