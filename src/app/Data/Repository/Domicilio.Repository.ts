import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { IDomicilioRepository } from "../../Core/Interfaces/repositories/IDomicilio.Repository";
import { DomicilioModel } from "../Model/Domicilio.Model";
import { UrlConstantes } from "../../Core/Shared/Constants/UrlConstantes";
import { ConsultaList } from "../Model/Shared/ConsultaList";

@Injectable({
  providedIn: 'root'
})
export class DomicilioRepository implements IDomicilioRepository {
  constructor(private conexion: HttpClient) { }

  AgregarDomicilio(domicilio: DomicilioModel): Observable<DomicilioModel> {
    return this.conexion.post<DomicilioModel>(UrlConstantes.agregarDomicilio, domicilio);
  }
  EditarDomicilio(param: DomicilioModel): Observable<DomicilioModel> {
    return this.conexion.post<DomicilioModel>(UrlConstantes.editarDomicilio, param);
  }
  BorrarDomicilio(param: DomicilioModel): Observable<DomicilioModel> {
    return this.conexion.post<DomicilioModel>(UrlConstantes.borrarDomicilio, param);
  }
  LeerDomiciolioList(nombre: ConsultaList<DomicilioModel>): Observable<DomicilioModel[]> {
    return this.conexion.post<DomicilioModel[]>(UrlConstantes.leerDomicilios, nombre);
  }
  LeerDomicilioPorId(param: number): Observable<DomicilioModel> {
    return this.conexion.post<DomicilioModel>(UrlConstantes.leerDomicilioPorId, param);
  }
}