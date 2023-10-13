import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUserRepository } from 'src/app/Core/Interfaces/repositories/Person/IUser.Repository';
import { IUserService } from 'src/app/Core/Interfaces/services/Person/IUser.Service';
import { UserModel } from 'src/app/Data/Model/Person/User.Model';
import { ConsultaList } from 'src/app/Data/Model/Shared/ConsultaList';

@Injectable({
  providedIn: 'root'
})

export class UserService implements IUserService {

  constructor(private repo: IUserRepository) { }
  getUsers(param: ConsultaList<UserModel>): Observable<UserModel[]> {
    return this.repo.getUsers(param);
  }
  getUserById(param: UserModel): Observable<UserModel> {
    return this.repo.getUserById(param);
  }
  addUser(param: UserModel): Observable<UserModel> {
    return this.repo.addUser(param);
  }
  deleteUserById(param: UserModel): Observable<UserModel> {
    return this.repo.deleteUserById(param);
  }
  updateUserById(param: UserModel): Observable<UserModel> {
    return this.repo.updateUserById(param);
  }

}