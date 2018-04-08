import { Injectable } from '@angular/core';
import { ModelFactory, Model } from 'ngx-model';
import { Contacto } from './contacto.interface';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { generateUid } from '../util';


@Injectable()
export class ContactoService {
    private model: Model<Contacto[]>;
    contacto$: Observable<Contacto[]>;

    constructor(private modelFactory: ModelFactory<Contacto[]>) {
        this.model = this.modelFactory.create([]); // create model and pass initial data
        this.contacto$ = this.model.data$;         // expose model data as named public property
    }

    /**
     * Añadir un nuevo contacto
     * @param name
     */
    addContacto(nombre: string, apellidos: string, fechaNacimiento: Date) {
        const id = generateUid('-');
        const contactos = this.model.get();
        this.model.set(contactos.concat([{ id, nombre, apellidos, fechaNacimiento }]));
    }

    /**
     * Eliminar un contacto
     * @param id
     */
    removeContacto(id) {
        const contactos = this.model.get();
        const index = contactos.findIndex(x => x.id === id);
        if (index !== -1) {
            this.model.set([...contactos.slice(0, index), ...contactos.slice(index + 1, contactos.length)]);
        }
    }
}
