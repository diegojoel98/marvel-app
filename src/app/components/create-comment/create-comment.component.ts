/**
 * create-comment.component.ts
 * Componente para crear un comentario
 */

import { Component, OnInit } from '@angular/core';
import { ForoModel } from '../../models/foro';
import { ForoService } from '../../services/foro-service.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Global } from '../../services/global';

@Component({
  selector: 'app-create-comment',
  templateUrl: './create-comment.component.html',
  styleUrls: ['./create-comment.component.css'],
  providers: [ForoService]
})
export class CreateCommentComponent implements OnInit {

  public comment: ForoModel;
  public status: string;

  afuConfig = {
    multiple: false,
    formatsAllowed: ".jpg, .png, .gif, .jpeg, .bmp",
    maxSize: "20",
    uploadAPI: {
      url: Global.url + 'upload-image',
    },
    theme: "attachPin",
    hideProgressBar: false,
    hideResetBtn: false,
    hideSelectBtn: true,
    fileNameIndex: true,
    replaceTexts: {
      selectFileBtn: 'Select Files',
      resetBtn: 'Reset',
      uploadBtn: 'Upload',
      dragNDropBox: 'Drag N Drop',
      attachPinBtn: 'Sube tu imagen...',
      afterUploadMsg_success: 'Subida de imagen exitosa !',
      afterUploadMsg_error: 'Subida fallida !',
      sizeLimit: 'Size Limit'
    }
  };

  constructor(
    private _foroService: ForoService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {
    this.comment = new ForoModel('', '', '', null, null);
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this._foroService.create(this.comment).subscribe(
      res => {
        if (res.status == 'success') {
          this.status = 'success';
          this.comment = res.comment;
          console.log(this.comment);
          this._router.navigate(['/foro']);
        } else {
          this.status = 'error';
        }
      },
      err => {
        console.log(err);
        this.status = 'error';
      }
    )
  }

  imageUpload(data) {
    /*console.log(data);
    console.log(data.response);
    console.log(data.body.img);*/
    this.comment.image = data.body.image;
    console.log(this.comment.image);
  }


}
