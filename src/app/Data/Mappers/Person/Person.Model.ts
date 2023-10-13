import { IMapper } from "src/app/Core/Interfaces/base/IMapper";
import { PersonEntity } from "src/app/Core/Shared/Entity/Person/Person.Entity";
import { PersonModel } from "../../Model/Person/Person.Model";

export class PersonMapper implements IMapper<PersonEntity, PersonModel>{
  mapToList(ModelList: PersonModel[]): PersonEntity[] {
    let entities: PersonEntity[] = [];
    ModelList.forEach(model => {
      entities.push(this.mapTo(model));
    });
    return entities
  }
  mapFromList(EntityList: PersonEntity[]): PersonModel[] {
    let models: PersonModel[] = [];
    EntityList.forEach(entity => {
      models.push(this.mapFrom(entity));
    });
    return models;
  }
  mapFrom(Entity: PersonEntity): PersonModel {
    return {
      aMaterno: Entity.aMaterno,
      aPaterno: Entity.aPaterno,
      id: Entity.id,
      nombre: Entity.nombre,
      nombreCompleto: Entity.nombre + ' ' + Entity.aPaterno + ' ' + Entity.aMaterno
    }
  }
  mapTo(Model: PersonModel): PersonEntity {
    return {
      aMaterno: Model.aMaterno,
      aPaterno: Model.aPaterno,
      id: Model.id,
      nombre: Model.nombre
    }
  }

}