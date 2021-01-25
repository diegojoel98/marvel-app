import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ForoService } from '../../services/foro-service.service';
import { ForoModel } from '../../models/foro';
import { Global } from '../../services/global';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-foro',
  templateUrl: './foro.component.html',
  styleUrls: ['./foro.component.css'],
  providers: [ForoService]
})
export class ForoComponent implements OnInit {

  public comments: ForoModel[];
  public url: string;
  public queryString: string;
  public qrdata: boolean;

  fileName = 'ComentariosForo.xlsx';

  constructor(
    private _foroService: ForoService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {
    this.url = Global.url;
    this.qrdata = false;
  }

  ngOnInit(): void {
    this._foroService.getComments().subscribe(
      res => {
        if (res.comments) {
          this.comments = res.comments;
        }
      },
      err => {
        console.log(err);
      }
    )
  }

  goSearch() {
    this._router.navigate(['/foro/buscar-comentario/', this.queryString]);
  }

  genQR() {
    if (!this.qrdata) {
      this.qrdata = true;
    } else {
      this.qrdata = false;
    }
  }

  exportExcel(): void {
    /* pass here the table id */
    let element = document.getElementById('excel-table');
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb, this.fileName);

  }






}
