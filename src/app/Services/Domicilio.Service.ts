import { Observable } from "rxjs";

import { IDomicilioService } from '../Core/Interfaces/services/IDomicilio.Service'
import { IDomicilioRepository } from '../Core/Interfaces/repositories/IDomicilio.Repository'
import { ConsultaList } from '../Data/Model/Shared/ConsultaList';
import { DomicilioModel } from '../Data/Model/Domicilio.Model';
import { Injectable } from "@angular/core";


@Injectable({ providedIn: 'root' })
export class DomicilioService implements IDomicilioService {

  constructor(private repo: IDomicilioRepository) { }
  AgregarDomicilio(domicilio: DomicilioModel): Observable<DomicilioModel> {
    return this.repo.AgregarDomicilio(domicilio);
  }
  EditarDomicilio(param: DomicilioModel): Observable<DomicilioModel> {
    return this.repo.EditarDomicilio(param);
  }
  LeerDomicilioPorId(param: number): Observable<DomicilioModel> {
    return this.repo.LeerDomicilioPorId(param);
  }
  LeerDomiciolioList(nombre: ConsultaList<DomicilioModel>): Observable<DomicilioModel[]> {
    return this.repo.LeerDomiciolioList(nombre);
  }
  BorrarDomicilio(param: DomicilioModel): Observable<DomicilioModel> {
    return this.repo.BorrarDomicilio(param);
  }


}