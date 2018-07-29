import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Http, Headers, Response } from '@angular/http';

@Injectable()
export class CatalogosService{

    constructor(private http: Http) {

    }

    // Crear
    private creatAlumnoUrl = /*endpoint al servicio*/"";

    createAlumno(alumno: any) {
        return this.http.post(this.creatAlumnoUrl, alumno).map((rest: Response) => rest.json()).
            catch((error: any) => Observable.throw(error.json().error || 'Server error'))
    }

    private creatAutobusUrl = /*endpoint al servicio*/"";

    createAutobus(autobus: any) {
        return this.http.post(this.creatAutobusUrl, autobus).map((rest: Response) => rest.json()).
            catch((error: any) => Observable.throw(error.json().error || 'Server error'))
    }

    private creatConductorUrl = /*endpoint al servicio*/"";

    createConductor(conductor: any) {
        return this.http.post(this.creatConductorUrl, conductor).map((rest: Response) => rest.json()).
            catch((error: any) => Observable.throw(error.json().error || 'Server error'))
    }

    private creatDireccionUrl = /*endpoint al servicio*/"";

    createDireccion(direccion: any) {
        return this.http.post(this.creatDireccionUrl, direccion).map((rest: Response) => rest.json()).
            catch((error: any) => Observable.throw(error.json().error || 'Server error'))
    }

    private creatDisciplinaUrl = "";

    createDisciplina(disciplina: any) {
        return this.http.post(this.creatDisciplinaUrl, disciplina).map((rest: Response) => rest.json()).
            catch((error: any) => Observable.throw(error.json().error || 'Server error'))
    }

    private creatNanaUrl = /*endpoint al servicio*/"";

    createNana(nana: any) {
        return this.http.post(this.creatNanaUrl, nana).map((rest: Response) => rest.json()).
            catch((error: any) => Observable.throw(error.json().error || 'Server error'))
    }

    private creatParadaUrl = "";

    createParada(parada: any) {
        return this.http.post(this.creatParadaUrl, parada).map((rest: Response) => rest.json()).
            catch((error: any) => Observable.throw(error.json().error || 'Server error'))
    }

    private creatRutaUrl = "";

    createRuta(ruta: any) {
        return this.http.post(this.creatRutaUrl, ruta).map((rest: Response) => rest.json()).
            catch((error: any) => Observable.throw(error.json().error || 'Server error'))
    }

    private creatTutorUrl = "";

    createTutor(tutor: any) {
        return this.http.post(this.creatTutorUrl, tutor).map((rest: Response) => rest.json()).
            catch((error: any) => Observable.throw(error.json().error || 'Server error'))
    }

    private creatAvisoUrl = "";

    createAviso(aviso: any) {
        return this.http.post(this.creatAvisoUrl, aviso).map((rest: Response) => rest.json()).
            catch((error: any) => Observable.throw(error.json().error || 'Server error'))
    }

    private creatCircularUrl = "";

    createCircular(circular: any) {
        return this.http.post(this.creatCircularUrl, circular).map((rest: Response) => rest.json()).
            catch((error: any) => Observable.throw(error.json().error || 'Server error'))
    }

    private creatEventoUrl = "";

    createEvento(evento: any) {
        return this.http.post(this.creatEventoUrl, evento).map((rest: Response) => rest.json()).
            catch((error: any) => Observable.throw(error.json().error || 'Server error'))
    }

    private creatParadaRutaUrl = "";

    createParadasRutas(evento: any) {
        return this.http.post(this.creatParadaRutaUrl, evento).map((rest: Response) => rest.json()).
            catch((error: any) => Observable.throw(error.json().error || 'Server error'))
    }

    private creatRutaTutorUrl = "";

    createRutaTutor(evento: any) {
        return this.http.post(this.creatRutaTutorUrl, evento).map((rest: Response) => rest).
            catch((error: any) => Observable.throw(error || 'Server error'))
    }


    // Actualizar

    private updatAlumnoUrl = /*endpoint al servicio*/"";

    updateAlumno(alumno: any) {
        return this.http.put(this.updatAlumnoUrl, alumno).map((rest: Response) => rest.json()).
            catch((error: any) => Observable.throw(error.json().error || 'Server error'))
    }

    private updatAutobusUrl = /*endpoint al servicio*/"";

    updateAutobus(autobus: any) {
        return this.http.put(this.updatAutobusUrl, autobus).map((rest: Response) => rest.json()).
            catch((error: any) => Observable.throw(error.json().error || 'Server error'))
    }

    private updatConductorUrl = /*endpoint al servicio*/"";

    updateConductor(conductor: any) {
        return this.http.put(this.updatConductorUrl, conductor).map((rest: Response) => rest.json()).
            catch((error: any) => Observable.throw(error.json().error || 'Server error'))
    }

//Consultas

    private consultReporteUrl = "";

    consultReporte(reporte: any) {
        return this.http.get(this.consultReporteUrl+reporte).map((rest: Response) => rest.json()).
            catch((error: any) => Observable.throw(error.json().error || 'Server error'))
    }

    private consultaAlumnoUrl = "";

    consultAlumno(noFamilia: string, nombreAlumno: string, apellidoPaterno: string, apellidoMaterno: string) {

        let data: any = {
            "noFamilia": "" + noFamilia,
            "nombreAlumno": "" + nombreAlumno,
            "apellidoPaterno": "" + apellidoPaterno,
            "apellidoMaterno": "" + apellidoMaterno
        }

        return this.http.post(this.consultaAlumnoUrl, data).map((rest: Response) => rest.json()).
            catch((error: any) => Observable.throw(error.json().error || 'Server error'))
    }

    private consultaCircularUrl = "";

    consultCircular(fechaInicio: string, fechaFin: string) {

        let data: any = {
            "fechaInicio": "" + fechaInicio,
            "fechaFin": "" + fechaFin,
            "tipoMensaje": 2
        }

        return this.http.post(this.consultaCircularUrl, data).map((rest: Response) => rest.json()).
            catch((error: any) => Observable.throw(error.json().error || 'Server error'))
    }

    private consultaNotificacionUrl = "";

    consultNotificacion(fechaInicio: string, fechaFin: string) {

        let data: any = {
            "fechaInicio": "" + fechaInicio,
            "fechaFin": "" + fechaFin
        }

        return this.http.post(this.consultaNotificacionUrl, data).map((rest: Response) => rest.json()).
            catch((error: any) => Observable.throw(error.json().error || 'Server error'))
    }

    private consultaEventoUrl = "";

    consultEvento(fechaInicio: string, fechaFin: string) {

        let data: any = {
            "fechaInicio": "" + fechaInicio,
            "fechaFin": "" + fechaFin,
            "tipoMensaje": 1
        }

        return this.http.post(this.consultaEventoUrl, data).map((rest: Response) => rest.json()).
            catch((error: any) => Observable.throw(error.json().error || 'Server error'))
    }

   

}
