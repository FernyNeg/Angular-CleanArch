import { EntityModel } from "../Shared/EntityModel";
import { MenuEntity } from "./Menu.Entity";

export class ProfilesEntity extends EntityModel {
  nombre: string;
  menuList: Array<MenuEntity>;
}