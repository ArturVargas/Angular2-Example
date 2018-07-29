import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FiltroService, Alumno } from 'app/services/filtro.service';
import { CatalogosService } from '../../../services/catalogos/catalogos.service';
import { AccordionModule } from 'primeng/primeng';
import { MenuItem } from 'primeng/primeng';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { SweetAlertService } from 'ng2-sweetalert2';


@Component({
    selector: 'app-menu-reportes',
    templateUrl: './menu-reportes.component.html',
    styles: []
})
export class MenuReportesComponent implements OnInit {
    @BlockUI() blockUI: NgBlockUI;
    reportes: any;
    valor = "*";
    texto = "";
    ventana = 1;
    detalle1;
    detalle2;
    datos: any[];
    ascDesc = "1";
    seleccionar = [
        { id: "1", nombre: "Ascenso" },
        { id: "2", nombre: "Descenso" }
    ];
    selectedReport: any[];
    swal: SweetAlertService;
    constructor(private catalogosService: CatalogosService, private _swal: SweetAlertService) {
        this.swal = this._swal;
     }

    ngOnInit() {
        this.blockUI.start('Loading...'); // Start blocking

        setTimeout(() => {
            this.blockUI.stop(); // Stop blocking
        }, 2000);
    }

    pasarDatos(inputs) {
        this.ventana = 2;
        console.log(inputs);
        this.detalle1 = inputs.paradas;
    }

    pasarMasDatos(inputs) {
        this.ventana = 3;
        console.log(inputs);
        this.detalle2 = inputs.detalle;
    }

    buscarReporte(texto1: string, texto2: string, texto3: string) {
        this.blockUI.start('Loading...');
        console.log(texto1, texto2, texto3);
        if (texto1 == "") {
            this.texto = '/' + this.valor;
        } else {
            this.texto = texto1;
        }
        this.texto = this.texto + '/';
        if (texto2 == "") {
            this.texto = this.texto + this.valor;
        } else {
            this.texto = this.texto + texto2;
        }
        this.texto = this.texto + '/';
        if (texto3 == "") {
            this.texto = this.texto + this.valor;
        } else {
            this.texto = this.texto + texto3;
        }
        this.texto = this.ascDesc + this.texto;
        console.log(this.texto);

        this.catalogosService.consultReporte(this.texto)
            .finally(() => {
                this.blockUI.stop(); // Stop blocking
            })
            .subscribe(
            (data) => {
                console.log(data)
                this.reportes = data.capacidades;
                if (data.cantidad == 0) {
                    this.swal.info({ title: '', text: 'No hay datos con esos filtros' });
                }
            },
            (error) => {
                console.log(error);
                this.swal.error({ title: '', text: 'Error al cargar, intente nuevamente' });
            }
            )

    }

}
