import { DomicilioEntity } from "./Domiclio.Entity";
import { EntityModel } from "./Shared/EntityModel";

export class CiudadanoEntity extends EntityModel {
  nombre: string = "";
  aPaterno: string = "";
  aMaterno: string = "";
  edad: string = "";
  domicilios: DomicilioEntity[] = [];
}