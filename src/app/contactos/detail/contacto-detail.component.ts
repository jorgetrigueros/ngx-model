import { Component, OnInit, Input } from '@angular/core';
import { ContactoService } from '../contacto.service';
import { Contacto } from '../contacto.interface';

@Component({
  selector: 'app-contacto-detail',
  templateUrl: './contacto-detail.component.html'
})
export class ContactoDetailComponent implements OnInit {
    @Input() contacto: Contacto;
  constructor(public _contacto: ContactoService) { }

  ngOnInit() {
  }

  /**
   * Eliminar un contacto
   * @param id
   */
  eliminarContacto(id) {
    this._contacto.removeContacto(id);
  }


}
