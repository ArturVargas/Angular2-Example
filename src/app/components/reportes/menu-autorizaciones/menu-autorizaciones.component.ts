import { Component, OnInit } from '@angular/core';
import { CatalogosService } from '../../../services/catalogos/catalogos.service';
import { AccordionModule } from 'primeng/primeng';
import { MenuItem } from 'primeng/primeng';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { Router, ActivatedRoute } from '@angular/router';
import { SweetAlertService } from 'ng2-sweetalert2';


@Component({
    selector: 'app-menu-autorizaciones',
    templateUrl: './menu-autorizaciones.component.html',
    styles: []
})
export class MenuAutorizacionesComponent implements OnInit {
    @BlockUI() blockUI: NgBlockUI;
    swal: SweetAlertService;
    autorizaciones: any[];
    reportes: any;
    valor = "*";
    texto = "";
    ventana = 1;
    detalle1;
    detalle2;
    datos: any[];
    selectedReport: any[];
    constructor(private catalogosService: CatalogosService,
        private router: Router,
        private _swal: SweetAlertService) {
        this.swal = this._swal;
         }

    ngOnInit() {
        this.blockUI.start('Loading...'); // Start blocking 

        setTimeout(() => {
            this.blockUI.stop(); // Stop blocking 
        }, 2000);
    }


    buscarAutorizacion(texto: string) {
        this.blockUI.start('Loading...');
        var datos = texto.split(';');
        console.log(datos);
        this.blockUI.stop();
        this.catalogosService.consultAutorizacion(datos[0], datos[1], datos[2])
            .finally(() => {
                this.blockUI.stop(); // Stop blocking 
            })
            .subscribe(
            (data) => {
                console.log(data)
                if (data.cantidad == 0) {
                    this.autorizaciones = [];
                    this.swal.success({ title: '', text: 'No hay datos' });                    
                } else {
                    this.autorizaciones = data.resultados;
                }
            },
            (error) => {
                this.autorizaciones = [];
                console.log(error);
                this.swal.success({ title: '', text: 'Hubo un error, intente nuevamente' });
            }
            )

    }

}