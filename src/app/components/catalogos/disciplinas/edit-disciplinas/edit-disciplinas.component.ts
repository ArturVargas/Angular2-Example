import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CatalogosService } from '../../../../services/catalogos/catalogos.service';

@Component({
    selector: 'app-edit-disciplinas',
    templateUrl: './edit-disciplinas.component.html',
    styles: [`.ng-valid.touched{ border: 1px solid red;}`]
})
export class EditDisciplinasComponent {


    forma: FormGroup;
    disciplina: any = {
        nombreDisciplina: "",
        horaComienzoLunes: "",
        horaTerminoLunes: "",
        horaComienzoMartes: "",
        horaTerminoMartes: "",
        horaComienzoMiercoles: "",
        horaTerminoMiercoles: "",
        horaComienzoJueves: "",
        horaTerminoJueves: "",
        horaComienzoViernes: "",
        horaTerminoViernes: ""
    }
    constructor(private catalogosService: CatalogosService) {
        this.forma = new FormGroup({
            'nombreDisciplina': new FormControl('', [Validators.required]),
            'horaComienzoLunes': new FormControl('', [Validators.required]),
            'horaTerminoLunes': new FormControl('', []),
            'horaComienzoMartes': new FormControl('', [Validators.required]),
            'horaTerminoMartes': new FormControl('', [Validators.required]),
            'horaComienzoMiercoles': new FormControl('', [Validators.required]),
            'horaTerminoMiercoles': new FormControl('', [Validators.required]),
            'horaComienzoJueves': new FormControl('', [Validators.required]),
            'horaTerminoJueves': new FormControl('', [Validators.required]),
            'horaComienzoViernes': new FormControl('', [Validators.required]),
            'horaTerminoViernes': new FormControl('', [Validators.required])
        })
        this.forma.setValue(this.disciplina);

    }

    guardarCambios() {

        this.catalogosService.createDisciplina(this.disciplina)
            .subscribe(
            (data) => {
                console.log(data)
            },
            (error) => {
                console.log(error)
            }
            )
        
        this.forma.reset({
            nombreDisciplina: "",
            horaComienzoLunes: "",
            horaTerminoLunes: "",
            horaComienzoMartes: "",
            horaTerminoMartes: "",
            horaComienzoMiercoles: "",
            horaTerminoMiercoles: "",
            horaComienzoJueves: "",
            horaTerminoJueves: "",
            horaComienzoViernes: "",
            horaTerminoViernes: ""
        });
    }
    // guardar(forma:NgForm){
    //   console.log("Formulario");
    //   console.log(forma);
    //   console.log(forma.value);
    //   console.log("Usuario", this.usuario);
    // }

}