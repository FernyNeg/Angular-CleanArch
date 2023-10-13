import { Observable } from "rxjs";
import { CiudadanoModel } from "../../../Data/Model/Ciudadano.Model";
import { ConsultaList } from "../../../Data/Model/Shared/ConsultaList";

export abstract class ICiudadanoService {
  abstract AgregarCiudadano(param: CiudadanoModel): Observable<CiudadanoModel>;
  abstract EditarCiudadano(param: CiudadanoModel): Observable<CiudadanoModel>;
  abstract BorrarCiudadano(param: CiudadanoModel): Observable<CiudadanoModel>;
  abstract LeerCiudadanosList(param: ConsultaList<CiudadanoModel>): Observable<CiudadanoModel[]>;
  abstract LeerCiudadanoPorId(param: number): Observable<CiudadanoModel>;
}