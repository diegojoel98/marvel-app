import { Component, OnInit } from '@angular/core';
import { ForoService } from '../../services/foro-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ForoService]
})
export class LoginComponent implements OnInit {

  public user: any;

  constructor(
    private _foroService: ForoService
  ) {
    this.user = {
      email: '',
      password: ''
    };
  }

  ngOnInit(): void {
  }

  onSubmit() {
    alert("Hoy");
  }

}
