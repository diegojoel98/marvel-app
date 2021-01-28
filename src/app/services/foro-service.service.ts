import { Injectable } from '@angular/core';
import { ForoModel } from '../models/foro';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Global } from '../services/global';

@Injectable({
  providedIn: 'root'
})
export class ForoService {

  public url: string;

  constructor(
    private _http: HttpClient
  ) {
    this.url = Global.url;
  }

  getComments(): Observable<any> {
    return this._http.get(this.url + 'comments');
  }




}
