import { Injectable } from '@angular/core';
import { InterfaceHomeComics } from '../interfaces/home-comics';
import { InterfaceHomePersonajes } from '../interfaces/home-personajes';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VistaComicService {
  cachedValues: Array<{ [query: string]: InterfaceHomeComics }> = [];

  constructor(
    private _http: HttpClient
  ) { }

  comic = (query: string): Promise<InterfaceHomeComics> => {
    let promise = new Promise<InterfaceHomeComics>((resolve, reject) => {
      if (this.cachedValues[query]) {
        resolve(this.cachedValues[query])
      }
      else {
        this._http.get('https://gateway.marvel.com/v1/public/comics/' + query + '?&ts=1&apikey=0c83318d03be50b51982a3a0a587e16c&hash=6bc33235cf5a06c57a3a3dfe58eab922')
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

  personajesComic = (query: string): Promise<InterfaceHomePersonajes> => {
    let promise = new Promise<InterfaceHomePersonajes>((resolve, reject) => {
      if (this.cachedValues[query]) {
        resolve(this.cachedValues[query])
      }
      else {
        this._http.get('https://gateway.marvel.com/v1/public/comics/' + query + '/characters?&ts=1&apikey=0c83318d03be50b51982a3a0a587e16c&hash=6bc33235cf5a06c57a3a3dfe58eab922')
          .toPromise()
          .then((response) => {
            resolve(response as InterfaceHomePersonajes)
          },
            (error) => {
              reject(error);
            })
      }
    })
    return promise;
  }

}
