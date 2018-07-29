import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CatalogosService } from '../../../../services/catalogos/catalogos.service';
import { Router, ActivatedRoute } from '@angular/router';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { SweetAlertService } from 'ng2-sweetalert2';
import { NgbDatepickerConfig, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';


@Component({
    selector: 'app-edit-eventos',
    templateUrl: './edit-eventos.component.html',
    styles: [`.ng-valid.touched{ border: 1px solid red;}`]
})

export class EditEventosComponent {
  @BlockUI() blockUI: NgBlockUI;
  swal: SweetAlertService;
  forma: FormGroup;
    evento: any = {
        "idTutor": "",
        "idGrupo": 1,
        "tipoMensaje": 1,
        "fechaEvento": "2017-06-28",
        "mensajeCorto": "",
        "mensajeLargo": "",
      //  "escuela": "",
        //"sistemaOperativo": ""

    }
    // nivelSchool = [
    //     { name: "1", nombre:"Kinder"},
    //     { name: "2", nombre:"Primaria"},
    //     { name: "3", nombre:"Secundaria"},
    //     { name: "4", nombre:"Preparatoria"},
    //     { name: "5", nombre:"Toda la Escuela"}
    // ];
    constructor(private catalogosService: CatalogosService,
                private router: Router,
                private _swal: SweetAlertService,
                private config: NgbDatepickerConfig) {

                  this.swal = this._swal;
                  config.minDate = { year: 2014, month: 1, day: 1 };
                  config.maxDate = { year: 2099, month: 12, day: 31 };

                  this.forma = new FormGroup({
                    'idTutor': new FormControl('', [Validators.required]),
                    'idGrupo': new FormControl('',[Validators.required]),
                    'tipoMensaje': new FormControl('',[Validators.required]),
                    'fechaEvento': new FormControl('',[Validators.required]),
                    'mensajeCorto': new FormControl('',[Validators.required]),
                    'mensajeLargo': new FormControl('',[Validators.required])
                    //'escuela': new FormControl('',[Validators.required])
                  })
                  this.forma.setValue(this.evento);
    }

    ngOnInit() {
        this.blockUI.start('Loading...'); // Start blocking

        setTimeout(() => {
            this.blockUI.stop(); // Stop blocking
        }, 2000);
    }

    guardarCambios() {
      this.blockUI.start('Loading...');
        this.catalogosService.createEvento(this.evento)
            .subscribe(
            (data) => {
                console.log(data)
                this.blockUI.stop();
                this.swal.success({ title:'', text:'El evento se creo exitosamente'});
                this.router.navigate(['/eventos']);
            },
            (error) => {
                console.log(error)
                this.blockUI.stop();
                this.swal.error({title:'', text:'Servicio no disponible, intente más tarde'
            });
        //this.router.navigate(['/eventos']);
    }
  )
}

}
