import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Global } from '../../services/global';
import { ForoService } from '../../services/foro-service.service';
import { ForoModel } from 'src/app/models/foro';
// Import pdfmake-wrapper and the fonts to use
import { PdfMakeWrapper, Txt, Img } from 'pdfmake-wrapper';
//import pdfFonts from "pdfmake/build/vfs_fonts"; // fonts provided for pdfmake

// Set the fonts to use
// configure pdf settings
// configure pdf settings
import * as pdfMake from 'pdfmake/build/pdfmake'
import * as pdfFonts from 'pdfmake/build/vfs_fonts'
//pdfMake.vfs = pdfFonts.pdfMake.vfs;
import * as XLSX from 'xlsx';
import { SocialAuthService } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css'],
  providers: [ForoService]
})
export class CommentComponent implements OnInit {

  public comment: ForoModel
  public url: string
  public qrdata: boolean
  public myUrl: string
  public userName: string
  token: string
  user: SocialUser;
  loggedIn: boolean;
  fileName = 'Comentario.xlsx';

  constructor(
    private _foroService: ForoService,
    private _router: Router,
    private _route: ActivatedRoute,
    private authService: SocialAuthService
  ) { this.url = Global.url; this.qrdata = false; this.userName = null; }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      let id = params['id'];

      this.myUrl = 'localhost/foro/comentario/' + id;

      this._foroService.getComment(id).subscribe(
        res => {
          if (res.comment) {
            this.comment = res.comment;
          } else {
            this._router.navigate(['/foro']);
          }
        },
        err => {
          console.log(err);
          this._router.navigate(['/foro']);
        }
      )
    });

    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });

    this.token = this._foroService.getToken();

    if (this.token != null && this.token != undefined) {
      this._foroService.getUserLogged(this.token).subscribe(
        res => {
          this.userName = res.usuarioDB.nombre;
          console.log('userName: ' + this.userName);
        },
        err => {
          console.log(err);
        }
      )
    }

  }

  delete(commentId) {
    let ok = confirm("¿Estás seguro que quieres eliminar el comentario?");
    if (ok) {
      this._foroService.delete(commentId).subscribe(
        res => {
          console.log(res);
          this._router.navigate(['/foro']);
        },
        err => {
          console.log('error');
          this._router.navigate(['/foro']);
        }
      )
    } else {
      event.preventDefault();
    }
  }

  genQR() {
    if (!this.qrdata) {
      this.qrdata = true;
    } else {
      this.qrdata = false;
    }
  }

  async genPDF() {
    const pdf = new PdfMakeWrapper();
    console.log(this.comment);
    pdf.add(
      new Txt(this.comment.title).bold().fontSize(40).alignment('center').end
    );

    pdf.add(await new Img('http://localhost:3000/api/get-image/' + this.comment.image).build());

    pdf.add(
      new Txt(this.comment.content).fontSize(20).end
    );

    pdf.create().open();
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
