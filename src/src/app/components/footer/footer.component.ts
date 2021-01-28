import { Component, OnInit } from '@angular/core';
import { InterfaceHomeComics } from '../../interfaces/home-comics';
import { HomeComicsService } from '../../services/home-comics.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  providers: [HomeComicsService]
})
export class FooterComponent implements OnInit {

  public resultadoComics: InterfaceHomeComics

  constructor(
    private _homeComicsService: HomeComicsService
  ) { }

  ngOnInit(): void {

    this._homeComicsService.homeComics('').then((response) => {
      this.resultadoComics = response;
    }, (error) => {
      alert("Error: " + error.statusText)
    })

  }

}
