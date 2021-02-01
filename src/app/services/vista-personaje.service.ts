import { Injectable } from '@angular/core';
import { InterfaceHomePersonajes } from '../interfaces/home-personajes';
import { InterfaceHomeComics } from '../interfaces/home-comics';
import { HttpClient } from '@angular/common/http';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class VistaPersonajeService {
  cachedValues: Array<{ [query: string]: InterfaceHomePersonajes }> = [];

  constructor(
    private _http: HttpClient
  ) { }

  personaje = (query: string): Promise<InterfaceHomePersonajes> => {
    let promise = new Promise<InterfaceHomePersonajes>((resolve, reject) => {
      if (this.cachedValues[query]) {
        resolve(this.cachedValues[query])
      }
      else {
        this._http.get('https://gateway.marvel.com/v1/public/characters/' + query + '?&ts=1&apikey=0c83318d03be50b51982a3a0a587e16c&hash=6bc33235cf5a06c57a3a3dfe58eab922')
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

  comicsPersonaje = (query: string): Promise<InterfaceHomeComics> => {
    let promise = new Promise<InterfaceHomeComics>((resolve, reject) => {
      if (this.cachedValues[query]) {
        resolve(this.cachedValues[query])
      }
      else {
        this._http.get('https://gateway.marvel.com/v1/public/characters/' + query + '/comics?&ts=1&limit=6&apikey=0c83318d03be50b51982a3a0a587e16c&hash=6bc33235cf5a06c57a3a3dfe58eab922')
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

  toggleFav(fav): boolean {
    let data = [];
    console.log('favService: ' + fav);
    data = JSON.parse(localStorage.getItem('FavChar')) || [];
    if (_.find(data, { 'name': fav.name })) {
      data = _.reject(data, { 'name': fav.name });
      localStorage.setItem('FavChar', JSON.stringify(data));
      return false;
    } else {
      data = _.concat(data, fav);
      localStorage.setItem('FavChar', JSON.stringify(data));
      return true;
    }
  }

  getPosts(): any {
    return JSON.parse(localStorage.getItem('FavChar'));
  }

  isFavPers(id): boolean {
    let data = [];
    data = JSON.parse(localStorage.getItem('FavChar'));
    if (_.find(data, { 'id': id })) {
      console.log('id: ' + id);
      return true;
    } else {
      return false;
    }
  }

}
