import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {HomeComponent} from './components/home/home.component';
import {CatalogosComponent} from './components/catalogos/catalogos.component';
import {SecurityComponent} from './components/security/security.component';
import {ReportesComponent} from './components/reportes/reportes.component';
import { AuthGuardService } from './services/auth-guard.service';
import { ComunicacionComponent } from './components/comunicacion/comunicacion.component';

import {AlumnosComponent} from './components/catalogos/alumnos/alumnos.component';
import {TutoresComponent} from './components/catalogos/tutores/tutores.component';
import {DireccionesComponent} from './components/catalogos/direcciones/direcciones.component';
import {RutaComponent} from './components/catalogos/ruta/ruta.component';
import {AutobusesComponent} from './components/catalogos/autobuses/autobuses.component';
import {NanasComponent} from './components/catalogos/nanas/nanas.component';
import {ConductoresComponent} from './components/catalogos/conductores/conductores.component';
import { EditAlumnosComponent } from './components/catalogos/alumnos/edit-alumnos/edit-alumnos.component';
import { EditAutobusesComponent } from './components/catalogos/autobuses/edit-autobuses/edit-autobuses.component';
import { EditConductoresComponent } from './components/catalogos/conductores/edit-conductores/edit-conductores.component';
import { EditDireccionesComponent } from './components/catalogos/direcciones/edit-direcciones/edit-direcciones.component';
import { EditNanasComponent } from './components/catalogos/nanas/edit-nanas/edit-nanas.component';
import { EditTutoresComponent } from './components/catalogos/tutores/edit-tutores/edit-tutores.component';
import { EditRutasComponent } from './components/catalogos/ruta/edit-rutas/edit-rutas.component';
import { ParadasComponent } from './components/catalogos/paradas/paradas.component';
import { EditParadasComponent } from './components/catalogos/paradas/edit-paradas/edit-paradas.component';
import { UpdateAlumnosComponent } from './components/catalogos/alumnos/update-alumnos/update-alumnos.component';
import { UpdateAutobusesComponent } from './components/catalogos/autobuses/update-autobuses/update-autobuses.component';
import { UpdateConductoresComponent } from './components/catalogos/conductores/update-conductores/update-conductores.component';
import { UpdateDireccionesComponent } from './components/catalogos/direcciones/update-direcciones/update-direcciones.component';
import { UpdateNanasComponent } from './components/catalogos/nanas/update-nanas/update-nanas.component';
import { UpdateRutasComponent } from './components/catalogos/ruta/update-rutas/update-rutas.component';
import { UpdateTutoresComponent } from './components/catalogos/tutores/update-tutores/update-tutores.component';
import { DisciplinasComponent } from './components/catalogos/disciplinas/disciplinas.component';
import { EditDisciplinasComponent } from './components/catalogos/disciplinas/edit-disciplinas/edit-disciplinas.component';
import { UpdateDisciplinasComponent } from './components/catalogos/disciplinas/update-disciplinas/update-disciplinas.component';
import { AvisosComponent } from './components/comunicacion/avisos/avisos.component';
import { CircularesComponent } from './components/comunicacion/circulares/circulares.component';
import { NotificacionesComponent } from './components/comunicacion/notificaciones/notificaciones.component';
import { EventosComponent } from './components/comunicacion/eventos/eventos.component';
import { EditAvisosComponent } from './components/comunicacion/avisos/edit-avisos/edit-avisos.component';
import { EditCircularesComponent } from './components/comunicacion/circulares/edit-circulares/edit-circulares.component';
import { EditEventosComponent } from './components/comunicacion/eventos/edit-eventos/edit-eventos.component';
import { AsignacionesComponent } from './components/catalogos/asignaciones/asignaciones.component';
import { MenuReportesComponent } from './components/reportes/menu-reportes/menu-reportes.component';
import { MenuAutorizacionesComponent } from './components/reportes/menu-autorizaciones/menu-autorizaciones.component';
import { AsignacionesRutasParadasComponent } from './components/catalogos/asignaciones-rutas-paradas/asignaciones-rutas-paradas.component';
import { AsignacionesRutasTutoresComponent } from './components/catalogos/asignaciones-rutas-tutores/asignaciones-rutas-tutores.component';
import { AsignacionesRutasDireccionesComponent } from './components/catalogos/asignaciones-rutas-direcciones/asignaciones-rutas-direcciones.component';
import {LoginComponent} from './components/login/login.component';


const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'catalogos', component: CatalogosComponent },
  { path: 'security', component: SecurityComponent, canActivate:[AuthGuardService] },
  { path: 'reportes', component: ReportesComponent },
  { path: 'alumnos', component: AlumnosComponent },
  { path: 'tutores', component: TutoresComponent },
  { path: 'direcciones', component: DireccionesComponent },
  { path: 'autobuses', component: AutobusesComponent },
  { path: 'ruta', component: RutaComponent },
  { path: 'nanas', component: NanasComponent },
  { path: 'conductores', component: ConductoresComponent },
  { path: 'edit-alumnos', component: EditAlumnosComponent },
  { path: 'edit-autobuses', component: EditAutobusesComponent },
  { path: 'edit-conductores', component: EditConductoresComponent },
  { path: 'edit-direcciones', component: EditDireccionesComponent },
  { path: 'edit-nanas', component: EditNanasComponent },
  { path: 'edit-tutores', component: EditTutoresComponent },
  { path: 'edit-rutas', component: EditRutasComponent },
  { path: 'paradas', component: ParadasComponent },
  { path: 'edit-paradas', component: EditParadasComponent },
  { path: 'update-alumnos', component: UpdateAlumnosComponent },
  { path: 'update-autobuses', component: UpdateAutobusesComponent },
  { path: 'update-conductores', component: UpdateConductoresComponent },
  { path: 'update-direcciones', component: UpdateDireccionesComponent },
  { path: 'update-nanas', component: UpdateNanasComponent },
  { path: 'update-rutas', component: UpdateRutasComponent },
  { path: 'update-tutores', component: UpdateTutoresComponent },
  { path: 'disciplinas', component: DisciplinasComponent },
  { path: 'edit-disciplinas', component: EditDisciplinasComponent },
  { path: 'update-disciplinas', component: UpdateDisciplinasComponent },
  { path: 'avisos', component: AvisosComponent },
  { path: 'circulares', component: CircularesComponent },
  { path: 'comunicacion', component: ComunicacionComponent },
  { path: 'notificaciones', component: NotificacionesComponent },
  { path: 'eventos', component: EventosComponent },
  { path: 'edit-avisos', component: EditAvisosComponent },
  { path: 'edit-circulares', component: EditCircularesComponent },
  { path: 'edit-eventos', component: EditEventosComponent },
  { path: 'asignaciones', component: AsignacionesComponent },
  { path: 'asignaciones-rutas-paradas', component: AsignacionesRutasParadasComponent },
  { path: 'asignaciones-rutas-tutores', component: AsignacionesRutasTutoresComponent },
  { path: 'asignaciones-rutas-direcciones', component: AsignacionesRutasDireccionesComponent },
  { path: 'menu-reportes', component: MenuReportesComponent },
  { path: 'menu-autorizaciones', component: MenuAutorizacionesComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },


];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
