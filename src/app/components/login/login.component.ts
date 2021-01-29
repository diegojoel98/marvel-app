import { Component, OnInit } from '@angular/core';
import { ForoService } from '../../services/foro-service.service';
import { Router } from '@angular/router';

import { SocialAuthService } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ForoService]
})
export class LoginComponent implements OnInit {

  public myuser: any;
  public token: string;
  public error: string;

  user: SocialUser;
  loggedIn: boolean;

  siteKey: string;

  constructor(
    private _foroService: ForoService,
    private _router: Router,
    private authService: SocialAuthService,

  ) {
    this.myuser = {
      email: '',
      password: ''
    };
    this.error = null;
    this.siteKey = '6LcmlUAaAAAAAF2U6wmxUB8LwageM7QhMK_RKIHd';
  }

  ngOnInit(): void {

    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });
  }

  login() {
    return this._foroService.login(this.myuser).subscribe(
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

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this.authService.signOut();
  }


}
