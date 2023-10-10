import { Observable } from "rxjs";
import { CiudadanoModel } from "src/app/Data/Model/Ciudadano.Model";
import { ConsultaList } from "src/app/Data/Model/Shared/ConsultaList";

export abstract class ICiudadanoService {
  abstract AgregarCiudadano(param: CiudadanoModel): Observable<CiudadanoModel>;
  abstract EditarCiudadano(param: CiudadanoModel): Observable<CiudadanoModel>;
  abstract BorrarCiudadano(param: CiudadanoModel): Observable<CiudadanoModel>;
  abstract LeerCiudadanosList(param: ConsultaList<CiudadanoModel>): Observable<CiudadanoModel[]>;
  abstract LeerCiudadanoPorId(param: number): Observable<CiudadanoModel>;
}