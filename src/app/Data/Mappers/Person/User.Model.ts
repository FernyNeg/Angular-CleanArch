import { IMapper } from "src/app/Core/Interfaces/base/IMapper";
import { UserEntity } from "src/app/Core/Shared/Entity/Person/User.Entity";
import { UserModel } from "../../Model/Person/User.Model";

export class UserMapper implements IMapper<UserEntity, UserModel> {
  mapToList(ModelList: UserModel[]): UserEntity[] {
    let entities: UserEntity[] = [];
    ModelList.forEach(model => {
      this.mapTo(model);
    })
    return entities;
  }
  mapFromList(EntityList: UserEntity[]): UserModel[] {
    let models: UserModel[] = [];
    EntityList.forEach(entity => {
      models.push(this.mapFrom(entity))
    })
    return models;
  }
  mapFrom(Entity: UserEntity): UserModel {
    return {
      eMail: Entity.eMail,
      person: Entity.person,
      pwd: Entity.pwd,
      userName: Entity.userName
    }
  }
  mapTo(Model: UserModel): UserEntity {
    return {
      eMail: Model.eMail,
      person: Model.person,
      pwd: Model.pwd,
      userName: Model.userName
    }
  }

}