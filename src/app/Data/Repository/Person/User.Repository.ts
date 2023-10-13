import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUserRepository } from 'src/app/Core/Interfaces/repositories/Person/IUser.Repository';
import { UserModel } from '../../Model/Person/User.Model';
import { ConsultaList } from '../../Model/Shared/ConsultaList';
import { UrlConstantes } from 'src/app/Core/Shared/Constants/UrlConstantes';

@Injectable({
  providedIn: 'root'
})

export class UserRepository implements IUserRepository {

  constructor(private conexion: HttpClient) { }
  getUsers(param: ConsultaList<UserModel>): Observable<UserModel[]> {
    return this.conexion.post<UserModel[]>(UrlConstantes.getUsers, param);
  }
  getUserById(param: UserModel): Observable<UserModel> {
    return this.conexion.post<UserModel>(UrlConstantes.getUserById, param);
  }
  addUser(param: UserModel): Observable<UserModel> {
    return this.conexion.post<UserModel>(UrlConstantes.addUser, param);
  }
  deleteUserById(param: UserModel): Observable<UserModel> {
    return this.conexion.post<UserModel>(UrlConstantes.deleteUserById, param);
  }
  updateUserById(param: UserModel): Observable<UserModel> {
    return this.conexion.post<UserModel>(UrlConstantes.updateUserById, param);
  }

}