import { Component, OnInit } from '@angular/core';
import { InterfaceHomeComics } from '../../interfaces/home-comics';
import { HomeComicsService } from '../../services/home-comics.service';

@Component({
  selector: 'app-comic-page',
  templateUrl: './comic-page.component.html',
  styleUrls: ['./comic-page.component.css']
})
export class ComicPageComponent implements OnInit {

  public resultado: InterfaceHomeComics;
  p: number = 1;

  constructor(
    private _servicioHomeComics: HomeComicsService
  ) { }

  ngOnInit(): void {

    this._servicioHomeComics.pageComics('').then((response) => {
      this.resultado = response;
    }, (error) => {
      alert("Error: " + error.statusText)
    })

  }

}
