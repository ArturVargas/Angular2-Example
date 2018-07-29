import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FiltroService, Alumno } from 'app/services/filtro.service';
import { CatalogosService } from '../../../services/catalogos/catalogos.service';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { SweetAlertService } from 'ng2-sweetalert2';
import { LocalStorageService } from 'angular-2-local-storage';
import {NgbDatepickerConfig,NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-eventos',
    templateUrl: './eventos.component.html'
})
export class EventosComponent implements OnInit {

    eventos: any[] = [];
    @BlockUI() blockUI: NgBlockUI;
    swal: SweetAlertService;

    constructor(private catalogosService: CatalogosService,
        private localStorageService: LocalStorageService,
        private _swal: SweetAlertService,
        private config: NgbDatepickerConfig) {
        this.swal = this._swal;
        config.minDate = { year: 2014, month: 1, day: 1 };
        config.maxDate = { year: 2099, month: 12, day: 31 };
        }

    ngOnInit() {
        this.blockUI.start('Loading...'); // Start blocking

        setTimeout(() => {
            this.blockUI.stop(); // Stop blocking
        }, 2000);
    }

    eliminarDatos() {

    }

    buscarEvento(texto: string) {
        this.blockUI.start('Loading...');
        var datos = texto.split(';');
        console.log(datos);
        this.catalogosService.consultEvento(datos[0], datos[1])
            .finally(() => {
                this.blockUI.stop();
            })
            .subscribe(
            (data) => {
                console.log(this.eventos);
                if (data.cantidad == 0) {
                    this.swal.info({ title: '', text: 'No se encontraron eventos con esos datos.' });
                } else {
                    this.eventos = data.resultados;
                }
            },
            (error) => {
                console.log(error);
                this.swal.error({ title: '', text: 'Hubo un error al cargar las eventos, intente nuevamente.' });
            });


    }


}
