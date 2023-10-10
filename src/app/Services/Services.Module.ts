import { NgModule } from '@angular/core';
import { ICiudadanoService } from '../Core/Interfaces/services/ICiudadano.Service';
import { CiudadanoService } from './Ciudadano.Service';

@NgModule({
  declarations: [],
  imports: [],
  exports: [],
  providers: [
    { provide: ICiudadanoService, useClass: CiudadanoService },
  ]
})
export class ServicesModule { }