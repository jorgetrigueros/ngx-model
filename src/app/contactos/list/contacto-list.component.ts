import { Component, OnInit } from '@angular/core';
import { ContactoService } from '../contacto.service';

@Component({
  selector: 'app-contacto-list',
  templateUrl: './contacto-list.component.html'
})
export class ContactoListComponent implements OnInit {

  constructor(public _contacto: ContactoService) { }

  ngOnInit() {
  }

}
