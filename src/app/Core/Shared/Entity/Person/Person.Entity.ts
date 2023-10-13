import { EntityModel } from "../Shared/EntityModel";

export class PersonEntity extends EntityModel {
  nombre: string;
  aPaterno: string;
  aMaterno: string;
}