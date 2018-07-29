import { Injectable } from '@angular/core';

@Injectable()
export class FiltroService {

    private alumnos: any[] =
    [
    ];

    

    constructor() {
        console.log("Status 200");
    }

    getCatAlumnos() {
        return this.alumnos;
    }

    buscarAlumno(idFamilia: string, name: string, lastname: string): Alumno[] {
        let alumnosArr: Alumno[] = [];
        let coincideid = false;
        let coincidename = false;
        let coincidelastname = false;

        for (let alumno of this.alumnos) {
            coincideid = false;
            coincidename = false;
            coincidelastname = false;
            if (idFamilia != '') {
                if (alumno.idFamilia.toLowerCase().indexOf(idFamilia.toLowerCase()) >= 0)
                    coincideid = true;
                else
                    coincideid = false;
            } else {
                coincideid = true;
            }
            if (name != '') {
                if (alumno.nombre.toLowerCase().indexOf(name.toLowerCase()) >= 0)
                    coincidename = true;
                else
                    coincidename = false;
            } else {
                coincidename = true;
            }
            if (lastname != '') {
                if (alumno.apellidoP.toLowerCase().indexOf(lastname.toLowerCase()) >= 0 || alumno.apellidoM.toLowerCase().indexOf(lastname.toLowerCase()) >= 0)
                    coincidelastname = true;
                else
                    coincidelastname = false;
            } else {
                coincidelastname = true;
            }
            if (coincideid && coincidename && coincidelastname)
                alumnosArr.push(alumno)
        }

        return alumnosArr;
    }

    private tutores: any[] = [
    ];

    getCatTutores() {
        return this.tutores;
    }

    buscarTutor(texto: string): Tutor[] {
        let conductoresArr: Tutor[] = [];
        texto = texto.toLowerCase();
        for (let lista of this.conductores) {
            let nombre = lista.nombre.toLowerCase();
            if (nombre.indexOf(texto) >= 0) {
                conductoresArr.push(lista)
                console.log("Hola");
            }
        }
        return conductoresArr;
    }

    /* Inicia Nanas */
    private nanas: any[] = [
    ];

    getCatNanas() {
        return this.nanas;
    }

    buscarNana(texto: string): Nana[] {
        let conductoresArr: Nana[] = [];
        texto = texto.toLowerCase();
        for (let lista of this.nanas) {
            let nombre = lista.nombre.toLowerCase();
            if (nombre.indexOf(texto) >= 0) {
                conductoresArr.push(lista)
                console.log("Hola");
            }
        }
        return conductoresArr;
    }

    /*Inicia Coductores*/

    private conductores: any[] =
    [
    ];

    getCatConductores() {
        return this.conductores;
    }

    buscarConductor(texto: string): Conductor[] {
        let conductoresArr: Conductor[] = [];
        texto = texto.toLowerCase();
        for (let lista of this.conductores) {
            let nombre = lista.nombre.toLowerCase();
            if (nombre.indexOf(texto) >= 0) {
                conductoresArr.push(lista)
                console.log("Hola");
            }
        }
        return conductoresArr;
    }

    /*Finaliza Conductores*/

    /*Inicia Direcciones*/

    private direcciones: any[] =
    [
 
    ];

    getCatDirecciones() {
        return this.direcciones;
    }

    buscarDireccion(texto: string): Direccion[] {
        let direccionesArr: Direccion[] = [];
        texto = texto.toLowerCase();
        for (let lista of this.direcciones) {
            let nombre = lista.nombre.toLowerCase();
            if (nombre.indexOf(texto) >= 0) {
                direccionesArr.push(lista)
                console.log("Hola");
            }
        }
        return direccionesArr;
    }

    /*Finaliza Direcciones*/

    /*Inicia Autobuses*/

    private autobuses: any[] =
    [
    ];

    getCatAutobuses() {
        return this.autobuses;
    }

    buscarAutobus(texto: string): Autobus[] {
        let autobusesArr: Autobus[] = [];
        texto = texto.toLowerCase();
        for (let lista of this.autobuses) {
            let nombre = lista.nombre.toLowerCase();
            if (nombre.indexOf(texto) >= 0) {
                autobusesArr.push(lista)
                console.log("Hola");
            }
        }
        return autobusesArr;
    }

    /*Finaliza Autobuses*/

    /*Inicia rutas*/

    private rutas: any[] =
    [
    ];

    getCatRutas() {
        return this.rutas;
    }

    buscarRutas(texto: string): Ruta[] {
        let rutasArr: Ruta[] = [];
        texto = texto.toLowerCase();
        for (let lista of this.rutas) {
            let nombre = lista.nombre.toLowerCase();
            if (nombre.indexOf(texto) >= 0) {
                rutasArr.push(lista)
                console.log("Hola");
            }
        }
        return rutasArr;
    }

        /*inicia Paradas*/
    
    private paradas: any[] =
    [
    ];

    getCatParadas() {
        return this.rutas;
    }

    buscarParadas(texto: string): Parada[] {
        let paradasArr: Parada[] = [];
        texto = texto.toLowerCase();
        for (let lista of this.rutas) {
            let nombre = lista.nombre.toLowerCase();
            if (nombre.indexOf(texto) >= 0) {
                paradasArr.push(lista)
                console.log("Hola");
            }
        }
        return paradasArr;
    }

    //inicia Disciplinas
    private disciplinas: any[] =
    [
    ];

    getCatDisciplinas() {
        return this.disciplinas;
    }

    buscarDisciplina(texto: string): Disciplina[] {
        let disciplinasArr: Disciplina[] = [];
        texto = texto.toLowerCase();
        for (let lista of this.disciplinas) {
            let nombre = lista.nombre.toLowerCase();
            if (nombre.indexOf(texto) >= 0) {
                disciplinasArr.push(lista)
                console.log("Hola");
            }
        }
        return disciplinasArr;
    }

    private reportes: any[] =
    [
    ];

    getCatReportes() {
        return this.reportes;
    }

    buscarReporte(texto: string): Reporte[] {
        let reportesArr: Reporte[] = [];
        texto = texto.toLowerCase();
        for (let lista of this.reportes) {
            let nombre = lista.nombre.toLowerCase();
            if (nombre.indexOf(texto) >= 0) {
                reportesArr.push(lista)
                console.log("Hola");
            }
        }
        return reportesArr;
    }

    private reportesDos: any[] =
    [
    ];

    getCatReportesDos() {
        return this.reportesDos;
    }

    buscarReporteDos(texto: string): ReporteDos[] {
        let reportesDosArr: ReporteDos[] = [];
        texto = texto.toLowerCase();
        for (let lista of this.reportesDos) {
            let nombre = lista.nombre.toLowerCase();
            if (nombre.indexOf(texto) >= 0) {
                reportesDosArr.push(lista)
                console.log("Hola");
            }
        }
        return reportesDosArr;
    }

    private reportesTres: any[] =
    [
    ];

    getCatReportesTres() {
        return this.reportesTres;
    }

    buscarReporteTres(texto: string): ReporteTres[] {
        let reportesTresArr: ReporteTres[] = [];
        texto = texto.toLowerCase();
        for (let lista of this.reportesTres) {
            let nombre = lista.nombre.toLowerCase();
            if (nombre.indexOf(texto) >= 0) {
                reportesTresArr.push(lista)
                console.log("Hola");
            }
        }
        return reportesTresArr;
    }

}

export interface Alumno {
    idAlumno: string,
    nombre: string,
    apellidoP: string,
    apellidoM: string
}

export interface Conductor {
    idConductor: string,
    nombre: string,
    apellidoP: string,
    apellidoM: string
}

export interface Direccion {
    idDireccion: string,
    idFamilia: string,
    calle: string,
    noExterior: string,
    noInterior: string,
    colonia: string,
    municipio: string,
    estado: string,
    codigoPostal: string,
    referencia: string
}

export interface Autobus {
    noAutubus: string,
    nombre: string,
    noMatricula: string,
    marca: string,
    modelo: string,
    anio: string,
    capacidad: string,
    rutas: string
}

export interface Ruta {
    noRuta: string,
    idFamilia: string,
    ascodesc: string,
    hora: string,
    idDireccion: string,
    referencia: string,
    observaciones: string,
    silla: string,
    nombreOperador: string,
    paternoOperador: string,
    maternoOperador: string,
    telefonoOperador: string,
    monitor: string,
    paternoMonitor: string,
    maternoMnitor: string,
    telefonoMonitor: string
}

export interface Nana{

    nombre: string,
    apellidoP: string,
    apellidoM: string,
    telefonoLocal: string,
    correo: string,
    idFamilia: string,
    genero: string
}

export interface Tutor {

    nombre: string,
    apellidoP: string,
    apellidoM: string,
    telefonoLocal: string,
    correo: string,
    idFamilia: string,
    genero: string
}

export interface Parada {
    nombre: string
}

export interface Disciplina {
    nombreDisciplina: string,
    horaComienzoLunes: string,
    horaTerminoLunes: string,
    horaComienzoMartes: string,
    horaTerminoMartes: string,
    horaComienzoMiercoles: string,
    horaTerminoMiercoles: string,
    horaComienzoJueves: string,
    horaTerminoJueves: string,
    horaComienzoViernes: string,
    horaTerminoViernes: string
}

export interface Reporte {
    nombre: string
}

export interface ReporteDos {
    nombre: string
}

export interface ReporteTres {
    nombre: string
}

