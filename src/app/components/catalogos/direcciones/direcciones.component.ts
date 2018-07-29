import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FiltroService, Conductor } from 'app/services/filtro.service';
import { CatalogosService } from '../../../services/catalogos/catalogos.service';
import { LocalStorageService } from 'angular-2-local-storage';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { AccordionModule } from 'primeng/primeng';
import { MenuItem } from 'primeng/primeng';
import { SweetAlertService } from 'ng2-sweetalert2';


@Component({
    selector: 'app-direcciones',
    templateUrl: './direcciones.component.html'
})
export class DireccionesComponent implements OnInit {
    @BlockUI() blockUI: NgBlockUI;
    swal: SweetAlertService;
    direcciones: any[] = [];

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

    buscarDireccion(texto: string) {
        this.blockUI.start('Loading...');
        var datos = texto;
        console.log(datos);
        this.catalogosService.consultAsignacionRuta(datos, "*")
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
                }

            },
            (error) => {
                console.log(error)
                this.swal.error({ title: '', text: 'Hubo un error al cargar, intente nuevamente' });
            });
    }
}
