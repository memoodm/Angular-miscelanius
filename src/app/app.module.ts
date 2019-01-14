import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ResaltadoDirective } from './directives/resaltado.directive';
import { CrearUsuarioComponent } from './components/crear-usuario/crear-usuario.component';
import { EditarUsuarioComponent } from './components/editar-usuario/editar-usuario.component';
import { EliminarUsuarioComponent } from './components/eliminar-usuario/eliminar-usuario.component';

import { app_routing } from './app.routes';
import { MiscelaneosComponent } from './components/miscelaneos/miscelaneos.component';
import { PantallaUsuariosComponent } from './components/pantalla-usuarios/pantalla-usuarios.component';

@NgModule({
  declarations: [
    AppComponent,
    ResaltadoDirective,
    CrearUsuarioComponent,
    EditarUsuarioComponent,
    EliminarUsuarioComponent,
    MiscelaneosComponent,
    PantallaUsuariosComponent
  ],
  imports: [
    BrowserModule,
    app_routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
