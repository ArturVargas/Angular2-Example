import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FiltroService, Conductor } from 'app/services/filtro.service';

@Component({
    selector: 'app-paradas',
    templateUrl: './paradas.component.html',
    styles: []
})
export class ParadasComponent implements OnInit {

    paradas: any[] = [];

    constructor(private _filtroService: FiltroService) { }

    ngOnInit() {
        this.paradas = this._filtroService.getCatParadas();
        console.log(this.paradas);
    }

    buscarParada(texto: string) {
        console.log(texto);
    }

}
