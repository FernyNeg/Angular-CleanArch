import { NgModule } from "@angular/core";

import { HttpClientModule } from '@angular/common/http';
import { ICiudadanoRepository } from "../Core/Interfaces/repositories/ICiudadano.Repository";
import { CiudadanoRepository } from "./Repository/Ciudadano.Repository";
import { IDomicilioRepository } from "../Core/Interfaces/repositories/IDomicilio.Repository";
import { DomicilioRepository } from "./Repository/Domicilio.Repository";

@NgModule({
  imports: [
    HttpClientModule
  ],
  providers: [
    { provide: ICiudadanoRepository, useClass: CiudadanoRepository },
    { provide: IDomicilioRepository, useClass: DomicilioRepository },
  ]
})
export class DataModule { }