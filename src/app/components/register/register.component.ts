import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ForoService } from '../../services/foro-service.service';
import { UserModel } from '../../models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [ForoService]
})
export class RegisterComponent implements OnInit {

  public user: UserModel
  public error: string

  constructor(
    private _foroService: ForoService,
    private _router: Router
  ) {
    this.user = new UserModel('', '', '', '', '');
    this.error = null;
  }

  ngOnInit(): void {
  }

  register() {
    return this._foroService.register(this.user).subscribe(
      res => {
        console.log(res);
        this._router.navigate(['/home']);
      },
      err => {
        console.log(err);
        this.error = err.error.err.message;
      }
    )
  }

}
