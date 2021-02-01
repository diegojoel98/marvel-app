/**
 * search-comment.component.ts
 * Componente de búsqueda para los comentarios
 */

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ForoService } from '../../services/foro-service.service';
import { ForoModel } from '../../models/foro';
import { Global } from '../../services/global';

@Component({
  selector: 'app-search-comment',
  templateUrl: './search-comment.component.html',
  styleUrls: ['./search-comment.component.css'],
  providers: [ForoService]
})
export class SearchCommentComponent implements OnInit {

  public comments: ForoModel[];
  public query: string;
  public url: string;
  public queryString: string;

  constructor(
    private _foroService: ForoService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { this.url = Global.url; }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      this.query = params['query'];

      this._foroService.search(this.query).subscribe(
        res => {
          if (res.comments) {
            this.comments = res.comments;
            console.log(this.comments);
          } else {
            this.comments = [];
          }
        },
        err => {
          this.comments = [];
          console.log(err);
        }
      )

    })
  }

  goSearch() {
    this._router.navigate(['/foro/buscar-comentario/', this.queryString]);
  }

}
