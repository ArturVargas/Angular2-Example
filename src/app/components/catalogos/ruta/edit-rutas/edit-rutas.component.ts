import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CatalogosService } from '../../../../services/catalogos/catalogos.service';

@Component({
    selector: 'app-edit-rutas',
    templateUrl: './edit-rutas.component.html',
    styles: [`.ng-valid.touched{ border: 1px solid red;}`]
})
export class EditRutasComponent {

    forma: FormGroup;
    ruta: any = {
        nombreRuta: ""
    }
    constructor(private catalogosService: CatalogosService) {
        this.forma = new FormGroup({
            'nombreRuta': new FormControl('', [Validators.required]),
        })
        this.forma.setValue(this.ruta);

    }

    guardarCambios() {

        this.catalogosService.createRuta(this.ruta)
            .subscribe(
            (data) => {
                console.log(data)
            },
            (error) => {
                console.log(error)
            }
            )

        this.forma.reset({
            nombreRuta: ""
        });
    }
    // guardar(forma:NgForm){
    //   console.log("Formulario");
    //   console.log(forma);
    //   console.log(forma.value);
    //   console.log("Usuario", this.usuario);
    // }

}