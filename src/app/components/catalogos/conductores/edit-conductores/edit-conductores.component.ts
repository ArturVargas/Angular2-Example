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
    selector: 'app-edit-conductores',
    templateUrl: './edit-conductores.component.html',
    styles: [`.ng-valid.touched{ border: 1px solid red;}`]
})
export class EditConductoresComponent {
    @BlockUI() blockUI: NgBlockUI;
    swal: SweetAlertService;
    forma: FormGroup;
    conductor: any = {
        apellidoPaternoConductor: "",
        apellidoMaternoConductor: "",
        nombreConductor: "",
        telefonoConductor: ""
    }


    constructor(
        private catalogosService: CatalogosService,
        private router: Router,
        private _swal: SweetAlertService,
        config: NgbDatepickerConfig
    ) {
        this.forma = new FormGroup({
            'apellidoPaternoConductor': new FormControl('', [Validators.required]),
            'apellidoMaternoConductor': new FormControl('', [Validators.required]),
            'nombreConductor': new FormControl('', [Validators.required]),
            'telefonoConductor': new FormControl('', [Validators.required])
        })
        this.forma.setValue(this.conductor);
        this.swal = this._swal;
    }

    ngOnInit() {
        this.blockUI.start('Loading...'); // Start blocking

        setTimeout(() => {
            this.blockUI.stop(); // Stop blocking
        }, 2000);
    }

    guardarCambios() {
        console.log(this.conductor);
        this.blockUI.start('Loading...'); // Start blocking
        this.catalogosService.createConductor(this.conductor)
            .subscribe(
            (data) => {
                console.log(data);
                this.blockUI.stop();
                this.swal.success({ title: '', text: 'El conductor fue dado de alta exitosamente' });
                this.router.navigate(['/conductores']);
            },
            (error) => {
                console.log(error);
                this.blockUI.stop();
                this.swal.error({ title: '', text: 'El conductor no fue dado de alta, intente nuevamente' });
            });
    }

}
