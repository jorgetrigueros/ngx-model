import { Component, OnInit } from '@angular/core';
import { ContactoService } from './../contacto.service';

@Component({
  selector: 'app-contacto-new',
  templateUrl: './contacto-nuevo.component.html'
})
export class ContactoNuevoComponent implements OnInit {

  constructor(private _contacto: ContactoService) { }

  ngOnInit() {
  }

  /**
   * Añadir un contacto
   * @param nombre
   * @param apellidos
   * @param fechaNacimiento
   */
  addContacto(nombre: string, apellidos: string, fechaNacimiento: Date): void {
    this._contacto.addContacto(nombre, apellidos, fechaNacimiento);
  }

}
