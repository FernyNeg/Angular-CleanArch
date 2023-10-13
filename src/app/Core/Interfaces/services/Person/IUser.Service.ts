import { Observable } from "rxjs"
import { UserModel } from "src/app/Data/Model/Person/User.Model";
import { ConsultaList } from "src/app/Data/Model/Shared/ConsultaList";
export abstract class IUserService {
  abstract getUsers(param: ConsultaList<UserModel>): Observable<UserModel[]>;
  abstract getUserById(param: UserModel): Observable<UserModel>;
  abstract addUser(param: UserModel): Observable<UserModel>;
  abstract deleteUserById(param: UserModel): Observable<UserModel>;
  abstract updateUserById(param: UserModel): Observable<UserModel>;
}