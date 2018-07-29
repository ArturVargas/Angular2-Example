import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//Routes
import { APP_ROUTING } from './app.routes';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { SecurityComponent } from './components/security/security.component';
import { CatalogosComponent } from './components/catalogos/catalogos.component';
import { ReportesComponent } from './components/reportes/reportes.component';
import { AlumnosComponent } from './components/catalogos/alumnos/alumnos.component';
import { ComunicacionComponent } from './components/comunicacion/comunicacion.component';
import { DataTableModule, SharedModule } from 'primeng/primeng';

//Services
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';
import { FiltroService } from './services/filtro.service';
// import { AlumnosComponent } from './components/catalogos/alumnos/alumnos.component';
import { EditAlumnosComponent } from './components/catalogos/alumnos/edit-alumnos/edit-alumnos.component';
import { TutoresComponent } from './components/catalogos/tutores/tutores.component';
import { DireccionesComponent } from './components/catalogos/direcciones/direcciones.component';
import { RutaComponent } from './components/catalogos/ruta/ruta.component';
import { AutobusesComponent } from './components/catalogos/autobuses/autobuses.component';
import { NanasComponent } from './components/catalogos/nanas/nanas.component';
import { ConductoresComponent } from './components/catalogos/conductores/conductores.component';
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

         //api


//Servicios
import { CatalogosService } from './services/catalogos/catalogos.service';

//modulos
import { HttpModule } from "@angular/http";
import { SweetAlertService } from 'ng2-sweetalert2';
//import { NG2DataTableModule } from "angular2-datatable-pagination";
import { LocalStorageModule } from 'angular-2-local-storage';
import { BlockUIModule } from 'ng-block-ui';
import { LoginComponent } from './components/login/login.component';






@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        HomeComponent,
        SecurityComponent,
        CatalogosComponent,
        ReportesComponent,
        AlumnosComponent,
        EditAlumnosComponent,
        TutoresComponent,
        DireccionesComponent,
        RutaComponent,
        AutobusesComponent,
        NanasComponent,
        ConductoresComponent,
        EditAutobusesComponent,
        EditConductoresComponent,
        EditDireccionesComponent,
        EditNanasComponent,
        EditTutoresComponent,
        EditRutasComponent,
        ParadasComponent,
        EditParadasComponent,
        UpdateAlumnosComponent,
        UpdateAutobusesComponent,
        UpdateConductoresComponent,
        UpdateDireccionesComponent,
        UpdateNanasComponent,
        UpdateRutasComponent,
        UpdateTutoresComponent,
        DisciplinasComponent,
        EditDisciplinasComponent,
        UpdateDisciplinasComponent,
        AvisosComponent,
        ComunicacionComponent,
        CircularesComponent,
        NotificacionesComponent,
        EventosComponent,
        EditAvisosComponent,
        EditCircularesComponent,
        EditEventosComponent,
        AsignacionesComponent,
        MenuReportesComponent,
        MenuAutorizacionesComponent,
        AsignacionesRutasParadasComponent,
        AsignacionesRutasTutoresComponent,
        AsignacionesRutasDireccionesComponent,
        LoginComponent
    ],
    imports: [
        BrowserModule,
        APP_ROUTING,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        DataTableModule,
        SharedModule,
        NgbModule.forRoot(),
        LocalStorageModule.withConfig({
            prefix: 'my-app',
            storageType: 'localStorage'
        }),
        BlockUIModule

    ],
    providers: [
        AuthService,
        AuthGuardService,
        FiltroService,
        CatalogosService,
        SweetAlertService 
    ],
    bootstrap: [AppComponent]

})
export class AppModule { }
