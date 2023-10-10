import { Observable } from "rxjs";
import { DomicilioModel } from "src/app/Data/Model/Domicilio.Model";
import { ConsultaList } from "src/app/Data/Model/Shared/ConsultaList";
export abstract class IDomicilioRepository {
  abstract AgregarDomicilio(domicilio: DomicilioModel): Observable<DomicilioModel>;
  abstract EditarDomicilio(param: DomicilioModel): Observable<DomicilioModel>;
  abstract LeerDomicilioPorId(param: number): Observable<DomicilioModel>;
  abstract LeerDomiciolioList(nombre: ConsultaList<DomicilioModel>): Observable<DomicilioModel[]>;
  abstract BorrarDomicilio(param: DomicilioModel): Observable<DomicilioModel>;
}