import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

// NgxModelModule
import { NgxModelModule } from 'ngx-model';

// Services
import { ContactoService } from './contactos/contacto.service';

// Component
import { AppComponent } from './app.component';
import { ContactoListComponent } from './contactos/list/contacto-list.component';
import { ContactoNuevoComponent } from './contactos/new/contacto-nuevo.component';
import { ContactoDetailComponent } from './contactos/detail/contacto-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    ContactoListComponent,
    ContactoNuevoComponent,
    ContactoDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxModelModule
  ],
  providers: [
    ContactoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
