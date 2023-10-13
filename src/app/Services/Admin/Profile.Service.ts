import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProfileRepository } from 'src/app/Core/Interfaces/repositories/Admin/IProfile.Repository';
import { IProfileService } from 'src/app/Core/Interfaces/services/Admin/IProfile.Service';
import { ProfilesModel } from 'src/app/Data/Model/Admin/Profiles.Model';
import { ConsultaList } from 'src/app/Data/Model/Shared/ConsultaList';

@Injectable({
  providedIn: 'root'
})

export class ProfileService implements IProfileService {

  constructor(private repo: IProfileRepository) { }
  getProfiles(param: ConsultaList<ProfilesModel>): Observable<ProfilesModel[]> {
    return this.repo.getProfiles(param);
  }
  getProfileById(param: ProfilesModel): Observable<ProfilesModel> {
    return this.repo.getProfileById(param);
  }
  addProfile(param: ProfilesModel): Observable<ProfilesModel> {
    return this.repo.addProfile(param);
  }
  deleteProfileById(param: ProfilesModel): Observable<ProfilesModel> {
    return this.repo.deleteProfileById(param)
  }
  updateProfileById(param: ProfilesModel): Observable<ProfilesModel> {
    return this.repo.updateProfileById(param);
  }

}