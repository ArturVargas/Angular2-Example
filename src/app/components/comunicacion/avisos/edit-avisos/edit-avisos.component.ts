import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CatalogosService } from '../../../../services/catalogos/catalogos.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
    selector: 'app-edit-avisos',
    templateUrl: './edit-avisos.component.html',
    styles: [`.ng-valid.touched{ border: 1px solid red;}`]
})

export class EditAvisosComponent {

    aviso: any = {
        "titulo": "",
        "mensajeCorto": "",
        "mensajeLargo": "",
        "escuela": "",
        "sistemaOperativo": ""
    }
    constructor(private catalogosService: CatalogosService, private router: Router) {

    }

    guardarCambios() {  
        this.catalogosService.createAviso(this.aviso)
            .subscribe(
            (data) => {
                console.log(data)
            },
            (error) => {
                console.log(error)
            });
        this.router.navigate(['/avisos']);
    }

}