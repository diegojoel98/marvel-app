import { Component, OnInit } from '@angular/core';
import { ForoService } from '../../services/foro-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ForoService]
})
export class LoginComponent implements OnInit {

  public user: any;
  public token: string;
  public error: string

  constructor(
    private _foroService: ForoService,
    private _router: Router
  ) {
    this.user = {
      email: '',
      password: ''
    };
    this.error = null;
  }

  ngOnInit(): void {
  }

  login() {
    return this._foroService.login(this.user).subscribe(
      res => {
        console.log(res);
        if (res.token) {
          console.log('_id: ' + res.usuario._id);
          this._foroService.setToken(res.token, res.usuario._id);
          this.token = this._foroService.getToken();
          console.log('This.token is: ' + this.token);
          this._router.navigate(['/home']);
          /*setTimeout(() => {
            location.reload();
            this._router.navigate(['/home']);
          }, 1000);*/
          location.reload();
          location.replace("/home");
        }
      },
      err => {
        console.log(err);
        this.error = err.error.err.message;
        console.log(this.error);
      }
    )
  }

}
