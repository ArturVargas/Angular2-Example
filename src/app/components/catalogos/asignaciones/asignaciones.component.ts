import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FiltroService, Alumno } from 'app/services/filtro.service';
import { CatalogosService } from '../../../services/catalogos/catalogos.service';
import { LocalStorageService } from 'angular-2-local-storage';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { AccordionModule } from 'primeng/primeng';
import { MenuItem } from 'primeng/primeng';
import { SweetAlertService } from 'ng2-sweetalert2';

@Component({
    selector: 'app-asignaciones',
    templateUrl: './asignaciones.component.html'
})
export class AsignacionesComponent implements OnInit {
    @BlockUI() blockUI: NgBlockUI;
    asignaciones: any[] = [];
    asignacionesRuta: any[] = [];
      asignacionesRutaDes: any[] = [];
    swal: SweetAlertService;
    asignacion: any[] = [];
    estado = 1;
    conta = 0;
    acenso = false;
    desenso = false;
    semana: any = {
        lunes: {},
        martes: {},
        miercoles: {},
        jueves: {},
        viernes: {},
        lunes1: {},
        martes2: {},
        miercoles3: {},
        jueves4: {},
        viernes5: {}
    }
    idAlumnoSel=0;
    nameAlumno = "";
    constructor(
        private catalogosService: CatalogosService,
        private router: Router,
        private localStorageService: LocalStorageService,
        private _swal: SweetAlertService
    ) {
        this.swal = this._swal;
    }

    ngOnInit() {
        this.blockUI.start('Loading...'); // Start blocking

        setTimeout(() => {
            this.blockUI.stop(); // Stop blocking
        }, 2000);
    }

    seleccionarAlumnoDatos(alumno){
        this.estado = 2;
        console.log(alumno);
        this.nameAlumno = alumno.nombreAlumno;
        this.idAlumnoSel = alumno.idAlumno;
        console.log(this.idAlumnoSel);
        this.asignaciones= [];
        this.blockUI.start('Loading...');
        this.catalogosService.consultAsignacionDireccionDes("*", alumno.idAlumno, "3")
            .finally(() => {
                this.blockUI.stop();
            })
            .subscribe(
            (data) => {
                console.log(data);
                if (data.cantidad == 0) {
                    this.swal.info({ title: '', text: 'No se encontraron rutas asignadas a ese alumno' });
                } else {
                    this.asignacionesRutaDes = data.resultados;
                }

            },
            (error) => {
                console.log(error)
                this.swal.error({ title: '', text: 'Hubo un error al cargar las rutas, intente nuevamente' });
            });

            this.catalogosService.consultAsignacionDireccion("*", alumno.idAlumno, "2")
                .finally(() => {
                    this.blockUI.stop();
                })
                .subscribe(
                (data) => {
                    console.log(data);
                    if (data.cantidad == 0) {
                        this.swal.info({ title: '', text: 'No se encontraron rutas asignadas a ese alumno' });
                    } else {
                        this.asignacionesRuta = data.resultados;
                    }

                },
                (error) => {
                    console.log(error)
                    this.swal.error({ title: '', text: 'Hubo un error al cargar las rutas, intente nuevamente' });
                });
    }

    cambio() {
        this.estado = 1;
    }

    registrar(entra) {
      console.log(this.idAlumnoSel);
        this.blockUI.start('Loading...');
        var datos: any = {};
        if (entra == 1) {
            datos.idRutaLunes = this.semana.lunes.idRuta;
            datos.idDireccionLunes = this.semana.lunes.idDireccion;
            datos.idRutaMartes = this.semana.martes.idRuta;
            datos.idDireccionMartes = this.semana.martes.idDireccion;
            datos.idRutaMiercoles = this.semana.miercoles.idRuta;
            datos.idDireccionMiercoles = this.semana.miercoles.idDireccion;
            datos.idRutaJueves = this.semana.jueves.idRuta;
            datos.idDireccionJueves = this.semana.jueves.idDireccion;
            datos.idRutaViernes = this.semana.viernes.idRuta;
            datos.idDireccionViernes = this.semana.viernes.idDireccion;
            datos.accion = 1;
            datos.idAlumno = this.idAlumnoSel;
        }

        if (entra == 2) {
            datos.idRutaLunes = this.semana.lunes1.idRuta;
            datos.idDireccionLunes = this.semana.lunes1.idDireccion;
            datos.idRutaMartes = this.semana.martes2.idRuta;
            datos.idDireccionMartes = this.semana.martes2.idDireccion;
            datos.idRutaMiercoles = this.semana.miercoles3.idRuta;
            datos.idDireccionMiercoles = this.semana.miercoles3.idDireccion;
            datos.idRutaJueves = this.semana.jueves4.idRuta;
            datos.idDireccionJueves = this.semana.jueves4.idDireccion;
            datos.idRutaViernes = this.semana.viernes5.idRuta;
            datos.idDireccionViernes = this.semana.viernes5.idDireccion;
            datos.accion = 2;
            datos.idAlumno = this.idAlumnoSel;
         }
        console.log(datos);
        this.catalogosService.createRutaTutor(datos)
            .finally(() => {
                this.blockUI.stop();
            })
            .subscribe(
            (data) => {
                console.log(data);
                this.conta++;
                if (entra == 1) {
                    this.acenso = true;
                    this.swal.success({ title: '', text: 'Asociación de direcciones por día del alumno de ascenso fue hecha con éxito' });
                }
                if (entra == 2) {
                    this.desenso = true;
                    this.swal.success({ title: '', text: 'Asociación de direcciones por día del alumno de descenso fue hecha con éxito' });
                }
                if (this.conta == 2) {
                    this.router.navigate(['/catalogos']);
                }

            },
            (error) => {
                console.log(error)
                this.swal.error({ title: '', text: 'Hubo un error al guardar, intente nuevamente' });
            });
    }

    buscarAsignacionAlumno(texto: string) {
        this.asignaciones = [];
        this.blockUI.start('Loading...');
        var datos = texto;
        console.log(datos);
        this.catalogosService.consultAsignacionAlumno(datos)
            .finally(() => {
                this.blockUI.stop();
            })
            .subscribe(
            (data) => {
                console.log(data);
                if (data.cantidad == 0) {
                    this.swal.info({ title: '', text: 'No se encontraron alumnos' });
                } else {
                    this.asignaciones = data.resultados;
                }

            },
            (error) => {
                console.log(error)
                this.swal.error({ title: '', text: 'Hubo un error al cargar los alumnos, intente nuevamente' });
            });
    }


}
