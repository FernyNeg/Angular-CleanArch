import { Observable } from "rxjs"
import { ProfilesModel } from "src/app/Data/Model/Admin/Profiles.Model";
import { ConsultaList } from "src/app/Data/Model/Shared/ConsultaList";
export abstract class IProfileService {
  abstract getProfiles(param: ConsultaList<ProfilesModel>): Observable<ProfilesModel[]>;
  abstract getProfileById(param: ProfilesModel): Observable<ProfilesModel>;
  abstract addProfile(param: ProfilesModel): Observable<ProfilesModel>;
  abstract deleteProfileById(param: ProfilesModel): Observable<ProfilesModel>;
  abstract updateProfileById(param: ProfilesModel): Observable<ProfilesModel>;
}