import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FiltroService, Alumno } from 'app/services/filtro.service';
import { CatalogosService } from '../../../services/catalogos/catalogos.service';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { SweetAlertService } from 'ng2-sweetalert2';
import { LocalStorageService } from 'angular-2-local-storage';

@Component({
    selector: 'app-circulares',
    templateUrl: './circulares.component.html'
})
export class CircularesComponent implements OnInit {

    circulares: any[] = [];
    @BlockUI() blockUI: NgBlockUI;
    swal: SweetAlertService;

    constructor(
    private catalogosService: CatalogosService,
    //private router: Router,
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
        this.localStorageService.set('cricular', inputs);
        //this.router.navigate(['update-autobuses']);
    }

    eliminarDatos() {

    }

    buscarCircular(texto: string) {
        this.blockUI.start('Loading...');
        var datos = texto.split(';');
        console.log(datos);
        this.catalogosService.consultCircular(datos[0], datos[1])
            .finally(() => {
                this.blockUI.stop();
            })      
            .subscribe(
            (data) => {
                console.log(this.circulares);
                if (data.cantidad == 0) {
                    this.swal.info({ title: '', text: 'No se encontraron circulares con esos datos.' });
                } else {
                    this.circulares = data.resultados;
                }
            },
            (error) => {
                console.log(error);
                this.swal.error({ title: '', text: 'Hubo un error al cargar las circulares, intente nuevamente.' });
            });


    }


}
