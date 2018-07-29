import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FiltroService, Alumno } from 'app/services/filtro.service';
import { CatalogosService } from '../../../services/catalogos/catalogos.service';

@Component({
    selector: 'app-avisos',
    templateUrl: './avisos.component.html'
})
export class AvisosComponent implements OnInit {

    avisos: any[] = [];

    constructor(private catalogosService: CatalogosService) { }

    ngOnInit() {
    }

    buscarAviso(texto: string) {
        var datos = texto.split(';');
        console.log(datos);
        this.catalogosService.consultAviso(datos[0], datos[1])
            .subscribe(
            (data) => {
                this.avisos = data.resultados;
                console.log(this.avisos);
            },
            (error) => {
                console.log(error)
            });


    }


}