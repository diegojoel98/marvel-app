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

  getComment(commentId): Observable<any> {
    return this._http.get(this.url + 'comment/' + commentId);
  }

  search(query): Observable<any> {
    return this._http.get(this.url + 'search/' + query);
  }

  create(comment): Observable<any> {
    let params = JSON.stringify(comment);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.post(this.url + 'save', params, { headers: headers });
  }

  update(id, comment): Observable<any> {
    let params = JSON.stringify(comment);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.put(this.url + 'comment/' + id, params, { headers: headers });
  }

  delete(id): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.delete(this.url + 'comment/' + id, { headers: headers });
  }




}
