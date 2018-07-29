import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CatalogosService } from '../../../../services/catalogos/catalogos.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LocalStorageService } from 'angular-2-local-storage';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { SweetAlertService } from 'ng2-sweetalert2';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbDatepickerConfig, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-update-tutores',
    templateUrl: './update-tutores.component.html',
    styles: [`.ng-valid.touched{ border: 1px solid red;}`]
})
export class UpdateTutoresComponent {

    @BlockUI() blockUI: NgBlockUI;
    swal: SweetAlertService;
    forma: FormGroup;
    tutor: any = {
        apellidoPaternoTutor: "",
        apellidoMaternoTutor: "",
        nombreTutor: "",
        telefonoLocalTutor: "",
        noFamilia: "",
        telefonoMovilTutor: "",
        genero: "",
        correoFamilia: "",
        fechaNacimientoTutor: "",
        fechaCalendario: {},
    }

    generr = [
        { name: "M", nombre: "Masculino" },
        { name: "F", nombre: "Femenino" }
    ];
    constructor(private catalogosService: CatalogosService,
        private router: Router,
        private localStorageService: LocalStorageService,
        private _swal: SweetAlertService,
        config: NgbDatepickerConfig) {

        this.swal = this._swal;
        config.minDate = { year: 1900, month: 1, day: 1 };
        config.maxDate = { year: 2099, month: 12, day: 31 };

        this.forma = new FormGroup({
            'nombreTutor': new FormControl('', [Validators.required]),
            'apellidoPaternoTutor': new FormControl('', [Validators.required]),
            'apellidoMaternoTutor': new FormControl('', []),
            'correoFamilia': new FormControl('', [Validators.required,
            Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]),
            'noFamilia': new FormControl('', [Validators.required]),
            'genero': new FormControl('', [Validators.required]),
            'fechaNacimientoTutor': new FormControl('', [Validators.required]),
            'fechaCalendario': new FormControl('', [Validators.required]),
            'telefonoLocalTutor': new FormControl('', [Validators.required]),
            'telefonoMovilTutor': new FormControl('', [Validators.required])
        })
        this.forma.setValue(this.tutor);

        this.blockUI.start('Loading...'); // Start blocking
        this.tutor = this.localStorageService.get('tutor');
        var fechaNacimiento2 = this.tutor.fechaNacimientoTutor.split('-');
        console.log(this.tutor);
        console.log(fechaNacimiento2);
        this.tutor.fechaCalendario.year = parseInt(fechaNacimiento2[0]);
        this.tutor.fechaCalendario.month = parseInt(fechaNacimiento2[1]);
        this.tutor.fechaCalendario.day = parseInt(fechaNacimiento2[2]);


        setTimeout(() => {
            this.blockUI.stop(); // Stop blocking
        }, 2000);

    }

    guardarCambios() {

        this.blockUI.start('Loading...'); // Start blocking
        let mes = '';
        let dia = '';
        this.tutor.fechaNacimientoTutor = this.tutor.fechaCalendario;
        if (new String(this.tutor.fechaNacimientoTutor.month).indexOf('1') >= 1) {
            if (this.tutor.fechaNacimientoTutor.month != 10 && this.tutor.fechaNacimientoTutor.month != 11 && this.tutor.fechaNacimientoTutor.month != 12) {
                mes = '01';
            }
        } else {
            mes = '0' + this.tutor.fechaNacimientoTutor.month;
        }
        if (this.tutor.fechaNacimientoTutor.day < 10) {
            dia = '0' + this.tutor.fechaNacimientoTutor.day;
        } else {
            dia = this.tutor.fechaNacimientoTutor.day;
        }
        console.log(mes);
        console.log(mes);
        let fecha = this.tutor.fechaNacimientoTutor.year + '-' + mes + '-' + dia;
        console.log(fecha);
        this.tutor.fechaNacimientoTutor = fecha;

        this.catalogosService.updateTutor(this.tutor)
            .subscribe(
            (data) => {
                console.log(data)
                this.blockUI.stop();
                this.swal.success({ title: '', text: 'El tutor fue dado de alta exitosamente.' });
                this.router.navigate(['/tutores']);
            },
            (error) => {
                console.log(error)
                this.blockUI.stop();
                this.swal.error({ title: '', text: 'El tutor no fue dado de alta, intente nuevamente.' });
            }
            )
    

     /*   this.forma.reset({
            apellidoPaternoTutor: "",
            apellidoMaternoTutor: "",
            nombreTutor: "",
            telefonoLocalTutor: "",
            noFamilia: "",
            telefonoMovilTutor: "",
            genero: "",
            correoFamilia: "",
            registradoAplicacion: "",
            fechaNacimientoTutor: ""
        });*/
    }
    // guardar(forma:NgForm){
    //   console.log("Formulario");
    //   console.log(forma);
    //   console.log(forma.value);
    //   console.log("Usuario", this.usuario);
    // }

}
