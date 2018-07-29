import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CatalogosService } from '../../../../services/catalogos/catalogos.service';
import { LocalStorageService } from 'angular-2-local-storage';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { SweetAlertService } from 'ng2-sweetalert2';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbDatepickerConfig, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';


@Component({
    selector: 'app-update-alumnos',
    templateUrl: './update-alumnos.component.html',
    styles: [`.ng-valid.touched{ border: 1px solid red;}`]
})
export class UpdateAlumnosComponent {

    @BlockUI() blockUI: NgBlockUI;

    swal: SweetAlertService;

    alumno: any = {
        apellidoPaternoAlumno: "",
        apellidoMaternoAlumno: "",
        nombreAlumno: "",
        nivelEscolar: "",
        grado: "",
        grupo: "",
        genero: "",
        emailAlumno: "",
        fechaNacimiento: "",
        fechaCalendario: { },
        telefonoLocal: "",
        telefonoMovil: "",
        cicloEscolar: ""
    }

    nivelSchool = [
      { name: "1", nombre:"Kinder"},
      { name: "2", nombre:"Primaria"},
      { name: "3", nombre:"Secundaria"},
      { name: "4", nombre:"Preparatoria"}
    ];

    grade = [
        { name: "1" },
        { name: "2" },
        { name: "3" }
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
        { name: "1. Klasse B" },
        { name: "1. KINDERGARTEN A" },
        { name: "1. Klasse A" }

    ];

    constructor(
        private catalogosService: CatalogosService,
        private router: Router,
        private localStorageService: LocalStorageService,
        private _swal: SweetAlertService,
        config: NgbDatepickerConfig
    ) {
        this.swal = this._swal;
        config.minDate = { year: 1900, month: 1, day: 1 };
        config.maxDate = { year: 2099, month: 12, day: 31 };

        this.blockUI.start('Loading...'); // Start blocking
        this.alumno = this.localStorageService.get('alumno');
        var fechaNacimiento2 = this.alumno.fechaNacimiento.split('-');
        console.log(this.alumno);
        console.log(this.alumno.fechaNacimiento);
        this.alumno.fechaCalendario.year = parseInt(fechaNacimiento2[0]);
        this.alumno.fechaCalendario.month = parseInt(fechaNacimiento2[1]);
        this.alumno.fechaCalendario.day = parseInt(fechaNacimiento2[2]);


        setTimeout(() => {
            this.blockUI.stop(); // Stop blocking
        }, 2000);
    }

    guardarCambios() {
        this.blockUI.start('Loading...'); // Start blocking
        let mes = '';
        let dia = '';
        this.alumno.fechaNacimiento = this.alumno.fechaCalendario;
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

        this.catalogosService.updateAlumno(this.alumno)
            .subscribe(
            (data) => {
                console.log(data)
                this.blockUI.stop();
                this.swal.success({ title: '', text: 'El alumno fue dado de actualizado exitosamente' });
                this.router.navigate(['/alumnos']);
            },
            (error) => {
                console.log(error)
                this.blockUI.stop();
                this.swal.error({ title: '', text: 'El alumno no fue actualizado, intente nuevamente' });
            }
            )

    }
    // guardar(forma:NgForm){
    //   console.log("Formulario");
    //   console.log(forma);
    //   console.log(forma.value);
    //   console.log("Usuario", this.usuario);
    // }

}
