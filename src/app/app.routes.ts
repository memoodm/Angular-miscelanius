import { RouterModule, Routes } from '@angular/router';
import { AppComponent} from './app.component';
import { MiscelaneosComponent } from './components/miscelaneos/miscelaneos.component';
import { CrearUsuarioComponent } from './components/crear-usuario/crear-usuario.component';
import { EditarUsuarioComponent } from './components/editar-usuario/editar-usuario.component';
import { EliminarUsuarioComponent } from './components/eliminar-usuario/eliminar-usuario.component';
import { PantallaUsuariosComponent } from './components/pantalla-usuarios/pantalla-usuarios.component';

const app_routes: Routes = [
  { path: 'home', component: MiscelaneosComponent },
  {
    path: 'usuarios/:id',
    component: PantallaUsuariosComponent,
    children: [
        { path: 'crear', component: CrearUsuarioComponent },
        { path: 'editar', component: EditarUsuarioComponent },
        { path: 'eliminar', component: EliminarUsuarioComponent },
        { path: '**', pathMatch: 'full', redirectTo: 'crear' }
    ]
  },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const app_routing = RouterModule.forRoot(app_routes);
