import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CatalogosService } from '../../../../services/catalogos/catalogos.service';
import { Router, ActivatedRoute } from '@angular/router';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { SweetAlertService } from 'ng2-sweetalert2';

@Component({
    selector: 'app-edit-autobuses',
    templateUrl: './edit-autobuses.component.html',
    styles: [`.ng-valid.touched{ border: 1px solid red;}`]
})
export class EditAutobusesComponent {
    @BlockUI() blockUI: NgBlockUI;
    swal: SweetAlertService;
    forma: FormGroup;
    autobus: any = {
        nombreAutobus: "",
        placaAutobus: "",
        marca: "",
        modelo: "",
        anio: "",
        capacidad: ""
    }
    SO = [
      { name: "1", nombre:"FORD"},
      { name: "2", nombre:"VOLVO"},
      { name: "3", nombre:"MERCEDEZ"},
      { name: "4", nombre:"VW"}
    ];

    Mod = [
      { name: "1", nombre:"F40"},
      { name: "2", nombre:"T30"},
      { name: "3", nombre:"CLA"},
      { name: "4", nombre:"CADDY"}
    ];

    Anios = [
      { name: "1", nombre:"2017"},
      { name: "2", nombre:"2016"},
      { name: "3", nombre:"2015"},
      { name: "4", nombre:"2014"}
    ];

    Cap = [
      {name: 1 }, {name: 2 }, {name: 3 }, {name: 4 }, {name: 5 },
      {name: 10 }, {name: 15 },{name: 20 },{name: 25 },{name: 30 },{name: 35 },
      {name: 40 },{name: 45 },{name: 50 }
    ];
    constructor(private catalogosService: CatalogosService,
        private router: Router,
        private _swal: SweetAlertService) {
        this.swal = this._swal;
        this.forma = new FormGroup({
            'nombreAutobus': new FormControl('', [Validators.required]),
            'placaAutobus': new FormControl('', [Validators.required]),
            'marca': new FormControl('', [Validators.required]),
            'modelo': new FormControl('', [Validators.required]),
            'anio': new FormControl('', [Validators.required]),
            'capacidad': new FormControl('', [Validators.required])
        })
        this.forma.setValue(this.autobus);

    }

    ngOnInit() {
        this.blockUI.start('Loading...'); // Start blocking

        setTimeout(() => {
            this.blockUI.stop(); // Stop blocking
        }, 2000);
    }

    guardarCambios() {
        this.blockUI.start('Loading...');
        this.catalogosService.createAutobus(this.autobus)
            .subscribe(
            (data) => {
                console.log(data);
                this.blockUI.stop();
                this.swal.success({ title: '', text: 'El autobús fue dado de alta exitosamente' });
                this.router.navigate(['/autobuses']);
            },
            (error) => {
                console.log(error)
                this.blockUI.stop();
                this.swal.error({ title: '', text: 'El autobus no fue dado de alta, intente nuevamente' });
            }
            )

      /*  this.forma.reset({
            noAutobus: "",
            nombreAutobus: "",
            placaAutobus: "",
            marca: "",
            modelo: "",
            anio: "",
            capacidad: ""
        });*/
    }
    // guardar(forma:NgForm){
    //   console.log("Formulario");
    //   console.log(forma);
    //   console.log(forma.value);
    //   console.log("Usuario", this.usuario);
    // }

}
