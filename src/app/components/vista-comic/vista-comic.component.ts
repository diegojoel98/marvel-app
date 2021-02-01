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
  public checked: boolean;
  public comicsFav: InterfaceHomeComics[];
  comics: InterfaceHomeComics[] = [];


  constructor(
    private _route: ActivatedRoute,
    private router: Router,
    private _vistaComicService: VistaComicService
  ) { this.checked = false; this.comicsFav = []; }

  ngOnInit(): void {
    /*this.comics = this._vistaComicService.getPosts();
    console.log(this.comics);*/

    this._route.paramMap.subscribe((params: ParamMap) => {
      this.queryId = params.get('id');
    })

    console.log(this._vistaComicService.isFavComic(parseInt(this.queryId, 10)));

    if (this._vistaComicService.isFavComic(parseInt(this.queryId, 10))) {
      this.checked = true;
    }

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

  addRemoveFav(fav) {
    if (this.checked) this.checked = false;
    else this.checked = true;
    if (this._vistaComicService.toggleFav(fav)) {
      //this.showInfo('Added to favourites');
      console.log('Added to fav');
    } else {
      //this.showWarning('Removed from favourites');
      console.log('Removed from fav');

    }
  }

}
