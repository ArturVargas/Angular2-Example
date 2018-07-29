import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FiltroService, Alumno } from 'app/services/filtro.service';
import { CatalogosService } from '../../../services/catalogos/catalogos.service';

@Component({
    selector: 'app-notificaciones',
    templateUrl: './notificaciones.component.html'
})
export class NotificacionesComponent implements OnInit {

    notificaciones: any[] = [];

    constructor(private catalogosService: CatalogosService) { }

    ngOnInit() {
    }

    buscarNotificacion(texto: string) {
        var datos = texto.split(';');
        console.log(datos);
        this.catalogosService.consultNotificacion(datos[0], datos[1])
            .subscribe(
            (data) => {
                this.notificaciones = data.resultados;
                console.log(this.notificaciones);
            },
            (error) => {
                console.log(error)
            });


    }


}