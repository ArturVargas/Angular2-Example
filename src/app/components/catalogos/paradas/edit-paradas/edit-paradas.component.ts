import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CatalogosService } from '../../../../services/catalogos/catalogos.service';

@Component({
    selector: 'app-edit-paradas',
    templateUrl: './edit-paradas.component.html',
    styles: [`.ng-valid.touched{ border: 1px solid red;}`]
})
export class EditParadasComponent {

    forma: FormGroup;
    parada: any = {
        nombreParada: ""
    }
    constructor(private catalogosService: CatalogosService) {
        this.forma = new FormGroup({
            'nombreParada': new FormControl('', [Validators.required]),
        })
        this.forma.setValue(this.parada);

    }

    guardarCambios() {

        this.catalogosService.createParada(this.parada)
            .subscribe(
            (data) => {
                console.log(data)
            },
            (error) => {
                console.log(error)
            }
            )

        this.forma.reset({
            nombreParada: ""
        });
    }
    // guardar(forma:NgForm){
    //   console.log("Formulario");
    //   console.log(forma);
    //   console.log(forma.value);
    //   console.log("Usuario", this.usuario);
    // }

}