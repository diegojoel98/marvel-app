/**
 * contacto.component.ts
 * Componente con un formulario para ponerse en contacto con nosotros
 */

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css'],
  providers: []
})
export class ContactoComponent implements OnInit {

  public user: any;
  public qrdata: boolean

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
    } else {
      event.preventDefault();
    }
  }

  genQR() {
    if (!this.qrdata) {
      this.qrdata = true;
    } else {
      this.qrdata = false;
    }
  }

}
