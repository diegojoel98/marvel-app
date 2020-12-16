import { Injectable } from '@angular/core';
import { InterfaceHomeComics } from '../interfaces/home-comics';
import { InterfaceHomePersonajes } from '../interfaces/home-personajes';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BuscarComicService {
  cachedValues: Array<{ [query: string]: InterfaceHomeComics }> = [];
  public query: string;

  constructor(
    private _http: HttpClient
  ) { }

  busquedaComic = (query: string): Promise<InterfaceHomeComics> => {
    let promise = new Promise<InterfaceHomeComics>((resolve, reject) => {
      if (this.cachedValues[query]) {
        resolve(this.cachedValues[query])
      }
      else {
        this._http.get('https://gateway.marvel.com/v1/public/comics?title=' + query + '&limit=10&ts=1&apikey=0c83318d03be50b51982a3a0a587e16c&hash=6bc33235cf5a06c57a3a3dfe58eab922')
          .toPromise()
          .then((response) => {
            resolve(response as InterfaceHomeComics)
          },
            (error) => {
              reject(error);
            })
      }
    })
    return promise;
  }

}
