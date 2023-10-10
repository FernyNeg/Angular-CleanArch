import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { UrlConstantes } from 'src/app/Core/Shared/Constants/UrlConstantes';
import { ICiudadanoRepository } from 'src/app/Core/Interfaces/repositories/ICiudadano.Repository';
import { ConsultaList } from '../Model/Shared/ConsultaList';
import { CiudadanoModel } from '../Model/Ciudadano.Model';
import { CiudadanoMapper } from '../Mappers/Ciudadano.Mapper';

@Injectable({
  providedIn: 'root'
})
export class CiudadanoRepository implements ICiudadanoRepository {
  mapper = new CiudadanoMapper();

  constructor(private conexion: HttpClient) { }
  AgregarCiudadano(param: CiudadanoModel): Observable<CiudadanoModel> {
    return this.conexion
      .post<CiudadanoModel>(UrlConstantes.agregarCiudadano, param)
      .pipe(
        map(this.mapper.mapFrom)
      );
  }
  EditarCiudadano(param: CiudadanoModel): Observable<CiudadanoModel> {
    return this.conexion
      .post<CiudadanoModel>(UrlConstantes.editarCiudadano, param)
      .pipe(
        map(this.mapper.mapFrom)
      );
  }
  BorrarCiudadano(param: CiudadanoModel): Observable<CiudadanoModel> {
    return this.conexion
    .post<CiudadanoModel>(UrlConstantes.borrarCiudadano, param)
    .pipe(
      map(this.mapper.mapFrom)
    );
  }
  LeerCiudadanosList(param: ConsultaList<CiudadanoModel>): Observable<CiudadanoModel[]> {
    return this.conexion
    .post<CiudadanoModel[]>(UrlConstantes.leerCiudadanos, param)
    .pipe(
      map(this.mapper.mapFromList)
    );
  }
  LeerCiudadanoPorId(param: number): Observable<CiudadanoModel> {
    return this.conexion.post<CiudadanoModel>(UrlConstantes.leerCiudadanoPorId, param);
  }

}