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
    selector: 'app-asignaciones-rutas-paradas',
    templateUrl: './asignaciones-rutas-paradas.component.html'
})
export class AsignacionesRutasParadasComponent implements OnInit {
    @BlockUI() blockUI: NgBlockUI;
    swal: SweetAlertService;
    asignacion: any[] = [];
    estado = 1;
    semana: any[] = [];
    nameAlumno = "";
    nanas: any[] = [];
    ascensos: any[] = [];
    rutas: any[] = [];
    descensos: any[] = [];
    conductores: any[] = [];
    autobuses: any[] = [];
    rutaCreada: any = {};
    rute = 1;
    bus = 1;
    ascen = 1;
    descen = 1;
    chofer = 1;
    nani = 1;
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

    buscarAsignacionRuta(texto: string) {
        
        this.blockUI.start('Loading...');
        var datos = texto;
        console.log(datos);
        this.catalogosService.consultAsignacionRutaParada(datos)
            .finally(() => {
                this.blockUI.stop();
            })
            .subscribe(
            (data) => {
                console.log(data);
                if (data.cantidad == 0) {
                    this.swal.info({ title: '', text: 'No se encontraron rutas con esos datos.' });
                } else {
                    this.rute = 2;
                    this.rutas = data.resultados;
                }

            },
            (error) => {
                console.log(error)
                this.swal.error({ title: '', text: 'Hubo un error al cargar, intente nuevamente' });
            });
    }

    buscarAsignacionAscenso(texto: string) {
        this.blockUI.start('Loading...');
        var datos = texto;
        console.log(datos);
        this.catalogosService.consultAsignacionAscenso()
            .finally(() => {
                this.blockUI.stop();
            })
            .subscribe(
            (data) => {
                console.log(data);
                if (data.cantidad == 0) {
                    this.swal.info({ title: '', text: 'No se encontraron ascensos con esos datos.' });
                } else {
                    this.ascensos = data.resultados;
                    this.ascen = 2;
                }

            },
            (error) => {
                console.log(error)
                this.swal.error({ title: '', text: 'Hubo un error al cargar, intente nuevamente' });
            });
    }
    
    buscarAsignacionDescenso(texto: string) {
        this.blockUI.start('Loading...');
        var datos = texto;
        console.log(datos);
        this.catalogosService.consultAsignacionDescenso()
            .finally(() => {
                this.blockUI.stop();
            })
            .subscribe(
            (data) => {
                console.log(data);
                if (data.cantidad == 0) {
                    this.swal.info({ title: '', text: 'No se encontraron descensos con esos datos.' });
                } else {
                    this.descensos = data.resultados;
                    this.descen = 2;
                }

            },
            (error) => {
                console.log(error)
                this.swal.error({ title: '', text: 'Hubo un error al cargar, intente nuevamente' });
            });
    }

    buscarAsignacionConductor(texto: string) {
        this.blockUI.start('Loading...');
        var datos = texto;
        console.log(datos);
        this.catalogosService.consultConductor(datos,"","")
            .finally(() => {
                this.blockUI.stop();
            })
            .subscribe(
            (data) => {
                console.log(data);
                if (data.cantidad == 0) {
                    this.swal.info({ title: '', text: 'No se encontraron conductores con esos datos.' });
                } else {
                    this.conductores = data.resultados;
                    this.chofer = 2;
                }

            },
            (error) => {
                console.log(error)
                this.swal.error({ title: '', text: 'Hubo un error al cargar, intente nuevamente' });
            });
    }

    buscarAsignacionAutobus(texto: string) {
        this.blockUI.start('Loading...');
        var datos = texto;
        console.log(datos);
        this.catalogosService.consultAsignacionAutobus(datos)
            .finally(() => {
                this.blockUI.stop();
            })
            .subscribe(
            (data) => {
                console.log(data);
                if (data.cantidad == 0) {
                    this.swal.info({ title: '', text: 'No se encontraron autobuses con esos datos.' });
                } else {
                    this.autobuses = data.resultados;
                    this.bus = 2;
                }

            },
            (error) => {
                console.log(error)
                this.swal.error({ title: '', text: 'Hubo un error al cargar, intente nuevamente' });
            });
    }

    buscarAsignacionNana(texto: string) {
        this.blockUI.start('Loading...');
        var datos = texto;
        console.log(datos);
        this.catalogosService.consultNana(datos,"","")
            .finally(() => {
                this.blockUI.stop();
            })
            .subscribe(
            (data) => {
                console.log(data);
                if (data.cantidad == 0) {
                    this.swal.info({ title: '', text: 'No se encontraron Nanas con esos datos.' });
                } else {
                    this.nanas = data.resultados;
                    this.nani = 2;
                }

            },
            (error) => {
                console.log(error)
                this.swal.error({ title: '', text: 'Hubo un error al cargar, intente nuevamente' });
            });
    }

    guardarDatos() {
        this.blockUI.start('Loading...');
        var datos = this.rutaCreada;
        console.log(datos);
        this.catalogosService.createParadasRutas(datos)
            .finally(() => {
                this.blockUI.stop();
            })
            .subscribe(
            (data) => {
                console.log(data);
                this.swal.success({ title: '', text: 'La creación Ruta-Parada fue hecha con éxito' });
                this.router.navigate(['/catalogos']);

            },
            (error) => {
                console.log(error)
                this.swal.error({ title: '', text: 'Hubo un error al guardar, intente nuevamente' });
            });
    }

}