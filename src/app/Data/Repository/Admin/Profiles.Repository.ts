import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { IProfileRepository } from 'src/app/Core/Interfaces/repositories/Admin/IProfile.Repository';
import { ConsultaList } from '../../Model/Shared/ConsultaList';
import { ProfilesModel } from '../../Model/Admin/Profiles.Model';
import { UrlConstantes } from 'src/app/Core/Shared/Constants/UrlConstantes';

@Injectable({
  providedIn: 'root'
})

export class ProfileRepository implements IProfileRepository {

  constructor(private Conexion: HttpClient) { }
  getProfiles(param: ConsultaList<ProfilesModel>): Observable<ProfilesModel[]> {
    return this.Conexion.post<ProfilesModel[]>(UrlConstantes.getProfiles, param);
  }
  getProfileById(param: ProfilesModel): Observable<ProfilesModel> {
    return this.Conexion.post<ProfilesModel>(UrlConstantes.getProfileById, param);
  }
  addProfile(param: ProfilesModel): Observable<ProfilesModel> {
    return this.Conexion.post<ProfilesModel>(UrlConstantes.addProfile, param);
  }
  deleteProfileById(param: ProfilesModel): Observable<ProfilesModel> {
    return this.Conexion.post<ProfilesModel>(UrlConstantes.deleteProfileById, param);
  }
  updateProfileById(param: ProfilesModel): Observable<ProfilesModel> {
    return this.Conexion.post<ProfilesModel>(UrlConstantes.updateProfileById, param);
  }
}