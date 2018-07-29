import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FiltroService, Alumno } from 'app/services/filtro.service';
//import {CatalogosService} from '../../services/catalogos.service';

@Component({
    selector: 'app-disciplinas',
    templateUrl: './disciplinas.component.html'
})
export class DisciplinasComponent implements OnInit {

    disciplinas: any[] = [];

    constructor(private _filtroService: FiltroService) { }

    ngOnInit() {
        //this.alumnos = this._filtroService.getCatAlumnos();
        //console.log(this.alumnos);
    }

    buscarDisciplina(texto: string) {
        var datos = texto.split(';');

        this.disciplinas = this._filtroService.buscarDisciplina(datos[0]);

    }


}