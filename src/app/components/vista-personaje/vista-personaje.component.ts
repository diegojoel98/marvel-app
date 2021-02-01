import { Component, OnInit } from '@angular/core';
import { InterfaceHomePersonajes } from '../../interfaces/home-personajes';
import { VistaPersonajeService } from '../../services/vista-personaje.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { InterfaceHomeComics } from 'src/app/interfaces/home-comics';

@Component({
  selector: 'app-vista-personaje',
  templateUrl: './vista-personaje.component.html',
  styleUrls: ['./vista-personaje.component.css'],
  providers: [VistaPersonajeService]
})
export class VistaPersonajeComponent implements OnInit {

  public resultado: InterfaceHomePersonajes;
  public resultadoComics: InterfaceHomeComics;
  public queryId: string;
  public checked: boolean;
  personajes: InterfaceHomePersonajes[] = [];

  constructor(
    private _route: ActivatedRoute,
    private router: Router,
    private _vistaPersonajeService: VistaPersonajeService
  ) { this.queryId = ""; this.checked = false; }

  ngOnInit(): void {

    this._route.paramMap.subscribe((params: ParamMap) => {
      this.queryId = params.get('id');
    })
    console.log(this.queryId);

    console.log(this._vistaPersonajeService.isFavPers(parseInt(this.queryId, 10)));

    if (this._vistaPersonajeService.isFavPers(parseInt(this.queryId, 10))) {
      this.checked = true;
    }


    this._vistaPersonajeService.personaje(this.queryId).then((response) => {
      this.resultado = response;
    }, (error) => {
      alert("Error: " + error.statusText)
    })

    this._vistaPersonajeService.comicsPersonaje(this.queryId).then((response) => {
      this.resultadoComics = response;
    }, (error) => {
      alert("Error: " + error.statusText)
    })

  }

  sendQuery = () => {
    this.resultado = null;
    this.router.navigate(['/personaje/' + this.queryId]);
  }

  addRemoveFav(fav) {
    if (this.checked) this.checked = false;
    else this.checked = true;
    if (this._vistaPersonajeService.toggleFav(fav)) {
      //this.showInfo('Added to favourites');
      console.log('Added to fav');
    } else {
      //this.showWarning('Removed from favourites');
      console.log('Removed from fav');

    }
  }




}
