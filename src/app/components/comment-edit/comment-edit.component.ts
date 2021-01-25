import { Component, OnInit } from '@angular/core';
import { ForoModel } from '../../models/foro';
import { ForoService } from '../../services/foro-service.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Global } from '../../services/global';

@Component({
  selector: 'app-comment-edit',
  templateUrl: './comment-edit.component.html',
  styleUrls: ['./comment-edit.component.css'],
  providers: [ForoService]
})
export class CommentEditComponent implements OnInit {

  public comment: ForoModel;
  public status: string;
  public url: string

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
    this.url = Global.url;
  }

  ngOnInit(): void {
    this.getCommentData();
  }

  onSubmit() {
    this._foroService.update(this.comment._id, this.comment).subscribe(
      res => {
        if (res.status == 'success') {
          this.status = 'success';
          this.comment = res.commentUpdated;
          this._router.navigate(['/foro/comentario/', this.comment._id]);
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
  //let imageData = JSON.parse(data.response);
  //this.article.img = imageData.img;
  //console.log(imageData.img);

  getCommentData() {
    this._route.params.subscribe(params => {
      let id = params['id'];

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
  }

}
