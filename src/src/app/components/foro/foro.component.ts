import { Component, OnInit } from '@angular/core';
import { ForoService } from '../../services/foro-service.service';
import { ForoModel } from '../../models/foro';
import { Global } from '../../services/global';

@Component({
  selector: 'app-foro',
  templateUrl: './foro.component.html',
  styleUrls: ['./foro.component.css'],
  providers: [ForoService]
})
export class ForoComponent implements OnInit {

  public comments: ForoModel[];
  public url: string

  constructor(
    private _foroService: ForoService
  ) { this.url = Global.url; }

  ngOnInit(): void {
    this._foroService.getComments().subscribe(
      res => {
        if (res.comments) {
          console.log(res.comments);
          this.comments = res.comments;
        }
      },
      err => {
        console.log(err);
      }
    )
  }

}
