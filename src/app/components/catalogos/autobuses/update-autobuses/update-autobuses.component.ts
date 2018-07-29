import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CatalogosService } from '../../../../services/catalogos/catalogos.service';
import { LocalStorageService } from 'angular-2-local-storage';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { SweetAlertService } from 'ng2-sweetalert2';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-update-autobuses',
    templateUrl: './update-autobuses.component.html',
    styles: [`.ng-valid.touched{ border: 1px solid red;}`]
})
export class UpdateAutobusesComponent {

    @BlockUI() blockUI: NgBlockUI;
    swal: SweetAlertService;

    forma: FormGroup;
    autobus: any = {
        noAutobus: "",
        nombreAutobus: "",
        placaAutobus: "",
        marca: "",
        modelo: "",
        anio: "",
        capacidad: ""
    }
    constructor(
        private catalogosService: CatalogosService,
        private router: Router,
        private localStorageService: LocalStorageService,
        private _swal: SweetAlertService
    ) {
        this.forma = new FormGroup({
            'noAutobus': new FormControl('', [Validators.required]),
            'nombreAutobus': new FormControl('', [Validators.required]),
            'placaAutobus': new FormControl('', [Validators.required]),
            'marca': new FormControl('', [Validators.required]),
            'modelo': new FormControl('', [Validators.required]),
            'anio': new FormControl('', [Validators.required]),
            'capacidad': new FormControl('', [Validators.required])
        })
        this.forma.setValue(this.autobus);

        this.swal = this._swal;

        this.blockUI.start('Loading...'); // Start blocking 
        this.autobus = this.localStorageService.get('autobus');

        console.log(this.autobus);

        setTimeout(() => {
            this.blockUI.stop(); // Stop blocking 
        }, 2000);

    }

    guardarCambios() {
        this.blockUI.start('Loading...'); // Start blocking 
        this.catalogosService.updateAutobus(this.autobus)
            .subscribe(
            (data) => {
                console.log(data)
                this.blockUI.stop();
                this.swal.success({ title: '', text: 'El autobus fue dado de actualizado exitosamente' });
                this.router.navigate(['/autobuses']);
            },
            (error) => {
                console.log(error)
                this.blockUI.stop();
                this.swal.error({ title: '', text: 'El autobus no fue actualizado, intente nuevamente' });
            }
            )

       /* this.forma.reset({
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