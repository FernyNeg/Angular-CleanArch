import { Injectable } from "@angular/core";
import { ICiudadanoService } from "../Core/Interfaces/services/ICiudadano.Service";
import { ICiudadanoRepository } from "../Core/Interfaces/repositories/ICiudadano.Repository";
import { ConsultaList } from "../Data/Model/Shared/ConsultaList";
import { CiudadanoModel } from "../Data/Model/Ciudadano.Model";
import { Observable } from "rxjs";


@Injectable({ providedIn: 'root' })
export class CiudadanoService implements ICiudadanoService {

  constructor(private repo: ICiudadanoRepository) { }
  AgregarCiudadano(param: CiudadanoModel): Observable<CiudadanoModel> {
    return this.repo.AgregarCiudadano(param);
  }
  EditarCiudadano(param: CiudadanoModel): Observable<CiudadanoModel> {
    return this.repo.EditarCiudadano(param);
  }
  BorrarCiudadano(param: CiudadanoModel): Observable<CiudadanoModel> {
    return this.repo.BorrarCiudadano(param);
  }
  LeerCiudadanosList(param: ConsultaList<CiudadanoModel>): Observable<CiudadanoModel[]> {
    return this.repo.LeerCiudadanosList(param);
  }
  LeerCiudadanoPorId(param: number): Observable<CiudadanoModel> {
    return this.repo.LeerCiudadanoPorId(param);
  }

}