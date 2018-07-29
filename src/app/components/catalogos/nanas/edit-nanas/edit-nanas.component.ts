import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CatalogosService } from '../../../../services/catalogos/catalogos.service';
import { Router, ActivatedRoute } from '@angular/router';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { SweetAlertService } from 'ng2-sweetalert2';
import { NgbDatepickerConfig, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-edit-nanas',
    templateUrl: './edit-nanas.component.html',
    styles: [`.ng-valid.touched{ border: 1px solid red;}`]
})
export class EditNanasComponent {
    @BlockUI() blockUI: NgBlockUI;
    forma: FormGroup;
    swal: SweetAlertService;
    nana: any = {
        apellidoPaternoNana: "",
        apellidoMaternoNana: "",
        nombreNana: "",
        telefonoNana: ""
    }
    constructor(private catalogosService: CatalogosService,
        private router: Router,
        private _swal: SweetAlertService, config: NgbDatepickerConfig) {
        this.swal = this._swal;
        this.forma = new FormGroup({
            'apellidoPaternoNana': new FormControl('', [Validators.required]),
            'apellidoMaternoNana': new FormControl('', []),
            'nombreNana': new FormControl('', [Validators.required]),
            'telefonoNana': new FormControl('', [Validators.required])
        })
        this.forma.setValue(this.nana);

    }

    ngOnInit() {
        this.blockUI.start('Loading...'); // Start blocking

        setTimeout(() => {
            this.blockUI.stop(); // Stop blocking
        }, 2000);
    }

    guardarCambios() {
        this.blockUI.start('Loading...'); // Start blocking
        this.catalogosService.createNana(this.nana)
            .subscribe(
            (data) => {
                console.log(data);
                this.blockUI.stop();
                this.swal.success({ title: '', text: 'La nana fue dada de alta exitosamente' });
                this.router.navigate(['/nanas']);
            },
            (error) => {
                console.log(error);
                this.blockUI.stop();
                this.swal.error({ title: '', text: 'La nana no fue dada de alta, intente nuevamente' });
            });

       /* this.forma.reset({
            idNana: "",
            apellidoPaternoNana: "",
            apellidoMaternoNana: "",
            nombreNana: "",
            direccionNana: "",
            telefonoNana: ""
        });*/
    }
    // guardar(forma:NgForm){
    //   console.log("Formulario");
    //   console.log(forma);
    //   console.log(forma.value);
    //   console.log("Usuario", this.usuario);
    // }

}
