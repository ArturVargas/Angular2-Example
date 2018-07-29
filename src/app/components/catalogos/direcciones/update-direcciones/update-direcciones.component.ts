import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CatalogosService } from '../../../../services/catalogos/catalogos.service';

@Component({
    selector: 'app-update-direcciones',
    templateUrl: './update-direcciones.component.html',
    styles: [`.ng-valid.touched{ border: 1px solid red;}`]
})
export class UpdateDireccionesComponent {

    forma: FormGroup;
    direccion: any = {
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
    }
    constructor(private catalogosService: CatalogosService) {
        this.forma = new FormGroup({
            'idDireccion': new FormControl('', [Validators.required]),
            'noFamilia': new FormControl('', [Validators.required]),
            'numeroInterior': new FormControl('', []),
            'calle': new FormControl('', [Validators.required]),
            'numeroExterior': new FormControl('', [Validators.required]),
            'colonia': new FormControl('', [Validators.required]),
            'grupo': new FormControl('', [Validators.required]),
            'municipio': new FormControl('', [Validators.required]),

            'estado': new FormControl('', [Validators.required]),
            'codigoPostal': new FormControl('', [Validators.required]),
            'referencias': new FormControl('', [Validators.required])
        })
        this.forma.setValue(this.direccion);

    }

    guardarCambios() {

        this.catalogosService.updateDireccion(this.direccion)
            .subscribe(
            (data) => {
                console.log(data)
            },
            (error) => {
                console.log(error)
            }
            )

        this.forma.reset({
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
        });
    }
    // guardar(forma:NgForm){
    //   console.log("Formulario");
    //   console.log(forma);
    //   console.log(forma.value);
    //   console.log("Usuario", this.usuario);
    // }

}