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
    selector: 'app-asignaciones-rutas-tutores',
    templateUrl: './asignaciones-rutas-tutores.component.html'
})
export class AsignacionesRutasTutoresComponent implements OnInit {
    @BlockUI() blockUI: NgBlockUI;
    swal: SweetAlertService;
    asignacion: any[] = [];
    estado = 1;
    semana: any[] = [];
    paradaTutor: any = {};
    ascensos: any[] = [];
    direcciones: any[] = [];
    tutores: any[] = [];

    rute = 1;
    bus = 1;
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

    buscarAsignacionTutor(texto: string) {
        this.blockUI.start('Loading...');
        var datos = texto;
        console.log(datos);
        this.catalogosService.consultTutor(datos, "","","")
            .finally(() => {
                this.blockUI.stop();
            })
            .subscribe(
            (data) => {
                console.log(data);
                if (data.cantidad == 0) {
                    this.swal.info({ title: '', text: 'No se encontraron tutores con esos datos.' });
                } else {
                    this.rute = 2;
                    this.tutores = data.resultados;
                }

            },
            (error) => {
                console.log(error)
                this.swal.error({ title: '', text: 'Hubo un error al cargar, intente nuevamente' });
            });
    }

    buscarAsignacionDireccion(texto: string) {
        this.blockUI.start('Loading...');
        var datos = texto;
        console.log(datos);
        this.catalogosService.consultAsignacionRuta(datos,"*")
            .finally(() => {
                this.blockUI.stop();
            })
            .subscribe(
            (data) => {
                console.log(data);
                if (data.cantidad == 0) {
                    this.swal.info({ title: '', text: 'No se encontraron direcciones con esos datos.' });
                } else {
                    this.direcciones = data.resultados;
                    this.bus = 2;
                }

            },
            (error) => {
                console.log(error)
                this.swal.error({ title: '', text: 'Hubo un error al cargar, intente nuevamente' });
            });
    }

    guardarDatos() {
        this.blockUI.start('Loading...');
        var datos = this.paradaTutor;
        console.log(datos);
        this.catalogosService.createParadasTutores(datos)
            .finally(() => {
                this.blockUI.stop();
            })
            .subscribe(
            (data) => {
                console.log(data);
                this.swal.success({ title: '', text: 'Asociación de Familias a direcciones fue hecha con éxito' });
                this.router.navigate(['/catalogos']);

            },
            (error) => {
                console.log(error)
                this.swal.error({ title: '', text: 'Hubo un error al guardar, intente nuevamente' });
            });
    }

}
