import { Observable } from "rxjs";
import { DomicilioModel } from "../../../Data/Model/Domicilio.Model";
import { ConsultaList } from "../../../Data/Model/Shared/ConsultaList";

export abstract class IDomicilioService {
  abstract AgregarDomicilio(domicilio: DomicilioModel): Observable<DomicilioModel>;
  abstract EditarDomicilio(param: DomicilioModel): Observable<DomicilioModel>;
  abstract LeerDomicilioPorId(param: number): Observable<DomicilioModel>;
  abstract LeerDomiciolioList(nombre: ConsultaList<DomicilioModel>): Observable<DomicilioModel[]>;
  abstract BorrarDomicilio(param: DomicilioModel): Observable<DomicilioModel>;
}