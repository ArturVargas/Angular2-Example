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
    selector: 'app-edit-alumnos',
    templateUrl: './edit-alumnos.component.html',
    styles: [`.ng-valid.touched{ border: 1px solid red;}`]
})

export class EditAlumnosComponent {

    @BlockUI() blockUI: NgBlockUI;
    alumno: any = {
        "noFamilia": "",
        "apellidoPaternoAlumno": "",
        "apellidoMaternoAlumno": "",
        "nombreAlumno": "",
        "nivelEscolar": "",
        "grado": "",
        "grupo": "",
        "genero": "",
        "emailAlumno": "null@mail.com",
        "fechaNacimiento": "",
        "telefonoLocal": "null",
        "telefonoMovil": "null",
        "cicloEscolar": ""
    }

   fechaAyuda = [];

    swal: SweetAlertService;

    nivelSchool = [
        { name: "1", nombre:"Kinder"},
        { name: "2", nombre:"Primaria"},
        { name: "3", nombre:"Secundaria"},
        { name: "4", nombre:"Preparatoria"}
    ];

    grade = [
        { name: "1" },
        { name: "2" },
        { name: "3" },
          { name: "4" },
            { name: "5" },
              { name: "6" }
    ];

    generr = [
        { name: "M", nombre: "Masculino" },
        { name: "F", nombre: "Femenino" }
    ];

    ciclo = [
        { name: "2016/2017" },
        { name: "2017/2018" }
    ];

    group = [
        { name: "A" },
        { name: "B" },
        { name: "C" },
        { name: "D" },
        { name: "E" }

    ];


    constructor(private catalogosService: CatalogosService,
        private router: Router,
        private _swal: SweetAlertService, config: NgbDatepickerConfig) {

        this.swal = this._swal;
        config.minDate = { year: 1900, month: 1, day: 1 };
        config.maxDate = { year: 2099, month: 12, day: 31 };
    }

    ngOnInit() {
        this.blockUI.start('Loading...'); // Start blocking

        setTimeout(() => {
            this.blockUI.stop(); // Stop blocking
        }, 2000);
    }

    guardarCambios() {
        this.alumno.fechaAyuda = this.alumno.fechaNacimiento;
        this.blockUI.start('Loading...'); // Start blocking
        console.log(this.alumno.fechaNacimiento);
        console.log(this.alumno.fechaNacimiento.month);
        let mes = '';
        let dia = '';
        if (new String(this.alumno.fechaNacimiento.month).indexOf('1') >= 1) {
            if (this.alumno.fechaNacimiento.month != 10 && this.alumno.fechaNacimiento.month != 11 && this.alumno.fechaNacimiento.month != 12) {
                mes = '01';
            }
        } else {
            mes = '0' + this.alumno.fechaNacimiento.month;
        }
        if (this.alumno.fechaNacimiento.day < 10) {
            dia = '0' + this.alumno.fechaNacimiento.day;
        } else {
            dia = this.alumno.fechaNacimiento.day;
        }
        console.log(mes);
        console.log(mes);
        let fecha = this.alumno.fechaNacimiento.year + '-' + mes + '-' + dia;
        console.log(fecha);
        this.alumno.fechaNacimiento = fecha;
        //return;

        this.catalogosService.createAlumno(this.alumno)
            .subscribe(
            (data) => {
                console.log(data);
                this.blockUI.stop();
                this.swal.success({ title: '', text: 'El alumno fue dado de alta exitosamente' });
                this.router.navigate(['/alumnos']);
            },
            (error) => {
                console.log(error);
                this.blockUI.stop();
                this.swal.error({ title: '', text: 'El alumno no fue dado de alta, intente nuevamente' });
                this.alumno.fechaNacimiento = this.alumno.fechaAyuda;
            });
    }

}
