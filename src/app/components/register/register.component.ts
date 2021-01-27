import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public user: UserModel

  constructor() {
    this.user = new UserModel('', '', '', '', '');
  }

  ngOnInit(): void {
  }

  onSubmit() {
    alert("register");
  }

}
