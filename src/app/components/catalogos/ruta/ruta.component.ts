import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FiltroService, Conductor} from 'app/services/filtro.service';

@Component({
  selector: 'app-ruta',
  templateUrl: './ruta.component.html',
  styles: []
})
export class RutaComponent implements OnInit {

  rutas:any[]=[];

  constructor(private _filtroService:FiltroService) { }

  ngOnInit() {
    this.rutas = this._filtroService.getCatRutas();
    console.log(this.rutas);
  }

 buscarRuta(texto:string){
   console.log(texto);
 }

}
