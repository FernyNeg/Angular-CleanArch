import { NgModule } from '@angular/core';
import { ICiudadanoService } from '../Core/Interfaces/services/ICiudadano.Service';
import { CiudadanoService } from './Ciudadano.Service';
import { IDomicilioService } from '../Core/Interfaces/services/IDomicilio.Service';
import { DomicilioService } from './Domicilio.Service';
import { IMenuService } from '../Core/Interfaces/services/Admin/IMenu.Service';
import { MenuService } from './Admin/Menu.Service';
import { IProfileService } from '../Core/Interfaces/services/Admin/IProfile.Service';
import { ProfileService } from './Admin/Profile.Service';
import { IPersonService } from '../Core/Interfaces/services/Person/IPerson.Service';
import { PersonService } from './Person/Person.Service';
import { IUserService } from '../Core/Interfaces/services/Person/IUser.Service';
import { UserService } from './Person/User.Service';

@NgModule({
  declarations: [],
  imports: [],
  exports: [],
  providers: [
    { provide: ICiudadanoService, useClass: CiudadanoService },
    { provide: IDomicilioService, useClass: DomicilioService },
    { provide: IMenuService,      useClass: MenuService },
    { provide: IProfileService,   useClass: ProfileService },
    { provide: IPersonService,    useClass: PersonService },
    { provide: IUserService,      useClass: UserService },
  ]
})
export class ServicesModule { }