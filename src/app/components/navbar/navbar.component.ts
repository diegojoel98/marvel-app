/**
 * favoritos.component.ts
 * Componente para la barra de navegación, todos los demás componentes lo comparten
 */

import { Component, OnInit } from '@angular/core';
import { ForoService } from 'src/app/services/foro-service.service';
import { Router } from '@angular/router';
import { SocialAuthService } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [ForoService]
})
export class NavbarComponent implements OnInit {

  public token: string
  public userName: string
  user: SocialUser;
  loggedIn: boolean;

  constructor(
    private _foroService: ForoService,
    private _router: Router,
    private authService: SocialAuthService
  ) { this.userName = null; }


  ngOnInit(): void {
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

  logout() {
    this._foroService.logout();
    this._router.navigate(['/home']);
    this.userName = null;
  }

  signOut(): void {
    this.authService.signOut();
  }

}
