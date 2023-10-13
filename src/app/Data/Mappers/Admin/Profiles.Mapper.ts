import { IMapper } from "src/app/Core/Interfaces/base/IMapper";
import { ProfilesEntity } from "src/app/Core/Shared/Entity/Admin/Profiles.Entity";
import { ProfilesModel } from "../../Model/Admin/Profiles.Model";

export class ProfilesMapper implements IMapper<ProfilesEntity, ProfilesModel>{
  mapFrom(Entity: ProfilesEntity): ProfilesModel {
    return {
      id: Entity.id,
      menuList: Entity.menuList,
      nombre: Entity.nombre
    }
  }
  mapTo(Model: ProfilesModel): ProfilesEntity {
    return {
      id: Model.id,
      menuList: Model.menuList,
      nombre: Model.nombre
    }
  }
  mapToList(ModelList: ProfilesModel[]): ProfilesEntity[] {
    let entities: ProfilesEntity[] = [];
    ModelList.forEach(model => {
      entities.push(this.mapTo(model));
    });
    return entities;
  }
  mapFromList(EntityList: ProfilesEntity[]): ProfilesModel[] {
    let models: ProfilesModel[] = [];
    EntityList.forEach(entity => {
      models.push(this.mapFrom(entity));
    });
    return models;
  }

}