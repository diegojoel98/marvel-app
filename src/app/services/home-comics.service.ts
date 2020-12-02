import { Injectable } from '@angular/core';
import { InterfaceHomeComics } from '../interfaces/home-comics';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeComicsService {
  cachedValues: Array<{ [query: string]: InterfaceHomeComics }> = [];

  constructor(
    private _http: HttpClient
  ) { }

  homeComics = (query: string): Promise<InterfaceHomeComics> => {
    let promise = new Promise<InterfaceHomeComics>((resolve, reject) => {
      if (this.cachedValues[query]) {
        resolve(this.cachedValues[query])
      }
      else {
        this._http.get('https://gateway.marvel.com/v1/public/comics?orderBy=modified&limit=4&ts=1&apikey=0c83318d03be50b51982a3a0a587e16c&hash=6bc33235cf5a06c57a3a3dfe58eab922')
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

  pageComics = (query: string): Promise<InterfaceHomeComics> => {
    let promise = new Promise<InterfaceHomeComics>((resolve, reject) => {
      if (this.cachedValues[query]) {
        resolve(this.cachedValues[query])
      }
      else {
        this._http.get('https://gateway.marvel.com/v1/public/comics?orderBy=-focDate&limit=36&ts=1&apikey=0c83318d03be50b51982a3a0a587e16c&hash=6bc33235cf5a06c57a3a3dfe58eab922')
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
