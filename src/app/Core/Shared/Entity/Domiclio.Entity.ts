import { CiudadanoEntity } from "./Ciudadano.Entity";
import { EntityModel } from "./Shared/EntityModel";

export class DomicilioEntity extends EntityModel {
  ciudad: string = "";
  pais: string = "";
  codPostal: string = "";
  direccion: string = "";
  ciudadanos: CiudadanoEntity[] = [];
}