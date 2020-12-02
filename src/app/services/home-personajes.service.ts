import { Injectable } from '@angular/core';
import { InterfaceHomePersonajes } from '../interfaces/home-personajes';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomePersonajesService {
  cachedValues: Array<{ [query: string]: InterfaceHomePersonajes }> = [];

  constructor(
    private _http: HttpClient
  ) { }

  homePersonajes = (query: string): Promise<InterfaceHomePersonajes> => {
    let promise = new Promise<InterfaceHomePersonajes>((resolve, reject) => {
      if (this.cachedValues[query]) {
        resolve(this.cachedValues[query])
      }
      else {
        this._http.get('https://gateway.marvel.com/v1/public/characters?orderBy=-modified&limit=4&ts=1&apikey=0c83318d03be50b51982a3a0a587e16c&hash=6bc33235cf5a06c57a3a3dfe58eab922')
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

  pagePersonajes = (query: string): Promise<InterfaceHomePersonajes> => {
    let promise = new Promise<InterfaceHomePersonajes>((resolve, reject) => {
      if (this.cachedValues[query]) {
        resolve(this.cachedValues[query])
      }
      else {
        this._http.get('https://gateway.marvel.com/v1/public/characters?orderBy=-modified&limit=36&ts=1&apikey=0c83318d03be50b51982a3a0a587e16c&hash=6bc33235cf5a06c57a3a3dfe58eab922')
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