import { IMapper } from "src/app/Core/Interfaces/base/IMapper";
import { MenuEntity } from "src/app/Core/Shared/Entity/Admin/Menu.Entity";
import { MenuModel } from "../../Model/Admin/Menu.Model";

export class MenuMapper implements IMapper<MenuEntity, MenuModel> {
  mapToList(ModelList: MenuModel[]): MenuEntity[] {
    let entities: MenuEntity[] = [];
    ModelList.forEach(model => {
      entities.push(this.mapTo(model));
    });
    return entities;
  }
  mapFromList(EntityList: MenuEntity[]): MenuModel[] {
    let models: MenuModel[] = [];
    EntityList.forEach(entity => {
      models.push(this.mapFrom(entity));
    });
    return models;
  }
  mapFrom(Entity: MenuEntity): MenuModel {
    return {
      id: Entity.id,
      icon: Entity.icon,
      options: Entity.options,
      rute: Entity.rute,
      tittle: Entity.tittle
    }
  }
  mapTo(Model: MenuModel): MenuEntity {
    return {
      id: Model.id,
      icon: Model.icon,
      options: Model.options,
      rute: Model.rute,
      tittle: Model.tittle
    }
  }

}