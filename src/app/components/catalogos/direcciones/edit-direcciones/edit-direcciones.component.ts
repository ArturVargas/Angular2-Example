import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CatalogosService } from '../../../../services/catalogos/catalogos.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Router, ActivatedRoute } from '@angular/router';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { SweetAlertService } from 'ng2-sweetalert2';
import { NgbDatepickerConfig, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';


@Component({
    selector: 'app-edit-direcciones',
    templateUrl: './edit-direcciones.component.html',
    styles: [`.ng-valid.touched{ border: 1px solid red;}`]
})
export class EditDireccionesComponent {

    @BlockUI() blockUI: NgBlockUI;
    forma: FormGroup;
    direccion: any = {
        calle: "",
        numeroExterior: "",
        numeroInterior: "",
        colonia: "",
        municipio: "",
        estado: "",
        codigoPostal: "",
        referencias: ""
    }

    swal: SweetAlertService;

    constructor(
        private catalogosService: CatalogosService,
        private router: Router,
        private _swal: SweetAlertService, config: NgbDatepickerConfig
    ) {
        this.swal = this._swal;

        this.forma = new FormGroup({
            'numeroInterior': new FormControl('', []),
            'calle': new FormControl('', [Validators.required]),
            'numeroExterior': new FormControl('', [Validators.required]),
            'colonia': new FormControl('', [Validators.required]),
            'municipio': new FormControl('', [Validators.required]),
            'estado': new FormControl('', [Validators.required]),
            'codigoPostal': new FormControl('', [Validators.required]),
            'referencias': new FormControl('', [Validators.required])
        })
        this.forma.setValue(this.direccion);

    }


    ngOnInit() {
        this.blockUI.start('Loading...'); // Start blocking

        setTimeout(() => {
            this.blockUI.stop(); // Stop blocking
        }, 2000);
    }

    guardarCambios() {
        this.blockUI.start('Loading...'); // Start blocking
        var datos = this.direccion;
        console.log(datos);
        this.catalogosService.createDireccion(datos)
            .subscribe(
            (data) => {
                console.log(data);
                this.blockUI.stop();
                this.swal.success({ title: '', text: 'La parada fue dada de alta exitosamente' });
                this.router.navigate(['/direcciones']);
            },
            (error) => {
                console.log(error);
                this.blockUI.stop();
                this.swal.error({ title: '', text: 'La parada no fue dada de alta, intente nuevamente' });
            }
            )

       /* this.forma.reset({
            idDireccion: "",
            noFamilia: "",
            calle: "",
            numeroExterior: "",
            numeroInterior: "",
            colonia: "",
            municipio: "",
            grupo: "",
            estado: "",
            codigoPostal: "",
            referencias: ""
        });*/
    }
    // guardar(forma:NgForm){
    //   console.log("Formulario");
    //   console.log(forma);
    //   console.log(forma.value);
    //   console.log("Usuario", this.usuario);
    // }

}
