import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FiltroService, Tutor } from 'app/services/filtro.service';
import { CatalogosService } from '../../../services/catalogos/catalogos.service';
import { LocalStorageService } from 'angular-2-local-storage';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { AccordionModule } from 'primeng/primeng';
import { MenuItem } from 'primeng/primeng';
import { SweetAlertService } from 'ng2-sweetalert2';

@Component({
  selector: 'app-tutores',
  templateUrl: './tutores.component.html',
  styles: []
})
export class TutoresComponent implements OnInit {
    @BlockUI() blockUI: NgBlockUI;
    swal: SweetAlertService;
    tutores: any[] = [];

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
        //console.log(this.alumnos);
    }

    pasarDatos(inputs: any) {
        console.log(inputs);
        inputs.fechaCalendario = {};
        this.localStorageService.set('tutor', inputs);
        this.router.navigate(['update-tutores']);
    }

    eliminarDatos() {

    }

    buscarTutor(texto: string) {
        this.blockUI.start('Loading...');
        var datos = texto.split(';');
        console.log(datos);
        this.catalogosService.consultTutor(datos[0], datos[1], datos[2], datos[3])
            .finally(() => {
                this.blockUI.stop();
            })
            .subscribe(
            (data) => {
                this.blockUI.stop();
                console.log(data);
                if (data.cantidad ==0) {
                    this.swal.info({ title: '', text: 'No se encontraron tutores con esos datos.' });
                } else {
                    this.tutores = data.resultados;
                }

            },
            (error) => {
                console.log(error)
                this.swal.error({ title: '', text: 'Hubo un error al cargar los tutores, intente nuevamente.' });
            });


    }


}
