import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  public user: any;

  constructor() {
    this.user = {
      name: '',
      lastname: '',
      comment: '',
      gender: ''
    };
  }

  ngOnInit(): void {
  }

  onSubmit() {
    let conf = confirm("¿Estas seguro de enviar el formulario?");
    if (conf) {
      alert("Formulario enviado");
      window.location.href = "mailto:diegojoel98@gmail.com";
      console.log(this.user);
    } else {
      event.preventDefault();
    }
  }

}
