import { Component, DoCheck, OnInit } from '@angular/core';
import { ForoService } from 'src/app/services/foro-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [ForoService]
})
export class NavbarComponent implements OnInit {

  public token: string
  public userName: string

  constructor(
    private _foroService: ForoService,
    private _router: Router
  ) { this.userName = null; }


  ngOnInit(): void {
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

}
