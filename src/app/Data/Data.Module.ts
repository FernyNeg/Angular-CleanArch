import { NgModule } from "@angular/core";

import { HttpClientModule } from '@angular/common/http';
import { ICiudadanoRepository } from "../Core/Interfaces/repositories/ICiudadano.Repository";
import { CiudadanoRepository } from "./Repository/Ciudadano.Repository";
import { IDomicilioRepository } from "../Core/Interfaces/repositories/IDomicilio.Repository";
import { DomicilioRepository } from "./Repository/Domicilio.Repository";
import { IMenuRepository } from "../Core/Interfaces/repositories/Admin/IMenu.Repository";
import { MenuRepository } from "./Repository/Admin/Menu.Repository";
import { IProfileRepository } from "../Core/Interfaces/repositories/Admin/IProfile.Repository";
import { ProfileRepository } from "./Repository/Admin/Profiles.Repository";
import { IPersonRepository } from "../Core/Interfaces/repositories/Person/IPerson.Repsitory";
import { PersonRepository } from "./Repository/Person/Person.Repository";
import { IUserRepository } from "../Core/Interfaces/repositories/Person/IUser.Repository";
import { UserRepository } from "./Repository/Person/User.Repository";

@NgModule({
  imports: [
    HttpClientModule
  ],
  providers: [
    { provide: ICiudadanoRepository, useClass: CiudadanoRepository },
    { provide: IDomicilioRepository, useClass: DomicilioRepository },
    { provide: IMenuRepository,      useClass: MenuRepository },
    { provide: IProfileRepository,   useClass: ProfileRepository },
    { provide: IPersonRepository,    useClass: PersonRepository },
    { provide: IUserRepository,      useClass: UserRepository },
  ]
})
export class DataModule { }