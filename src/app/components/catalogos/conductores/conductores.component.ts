import { Component, OnInit } from '@angular/core';
import { FiltroService, Conductor } from 'app/services/filtro.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CatalogosService } from '../../../services/catalogos/catalogos.service';
import { LocalStorageService } from 'angular-2-local-storage';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { AccordionModule } from 'primeng/primeng';
import { MenuItem } from 'primeng/primeng';
import { SweetAlertService } from 'ng2-sweetalert2';

@Component({
    selector: 'app-conductores',
    templateUrl: './conductores.component.html'
})
export class ConductoresComponent implements OnInit {

    conductores: any[] = [];
    @BlockUI() blockUI: NgBlockUI;
    swal: SweetAlertService;

    constructor(private catalogosService: CatalogosService,
        private router: Router,
        private localStorageService: LocalStorageService,
        private _swal: SweetAlertService) {
        this.swal = this._swal;
    }

    ngOnInit() {
        this.blockUI.start('Loading...'); // Start blocking 

        setTimeout(() => {
            this.blockUI.stop(); // Stop blocking 
        }, 2000);
    }

    pasarDatos(inputs: any) {
        console.log(inputs);
        this.localStorageService.set('conductor', inputs);
        this.router.navigate(['update-conductores']);
    }

    eliminarDatos() {

    }

    buscarConductor(texto: string) {
        this.blockUI.start('Loading...');
        var datos = texto.split(';');
        console.log(datos);
        this.catalogosService.consultConductor(datos[0], datos[1], datos[2])
            .finally(() => {
                this.blockUI.stop();
            })
            .subscribe(
            (data) => {
                if (data.cantidad == 0) {
                    this.swal.info({ title: '', text: 'No se encontraron conductores con esos datos.' });
                } else {
                    this.conductores = data.resultados;
                }

            },
            (error) => {
                console.log(error)
                this.swal.error({ title: '', text: 'Hubo un error al cargar los conductores, intente nuevamente.' });
            });
    }
}
