import { IMapper } from "src/app/Core/Interfaces/base/IMapper";
import { CiudadanoEntity } from "src/app/Core/Shared/Entity/Ciudadano.Entity";
import { CiudadanoModel } from "../Model/Ciudadano.Model";

export class CiudadanoMapper implements IMapper<CiudadanoEntity, CiudadanoModel> {
  mapToList(ModelList: CiudadanoModel[]): CiudadanoEntity[] {
    let personEntities: CiudadanoEntity[] = [];
    ModelList.forEach(Model => {
      personEntities.push({
        id: Model.id,
        nombre: Model.nombre,
        aPaterno: Model.aPaterno,
        aMaterno: Model.aMaterno,
        domicilios: Model.domicilios,
        edad: Model.edad
      });
    });
    return personEntities;
  }
  mapFromList(EntityList: CiudadanoEntity[]): CiudadanoModel[] {
    let personModels: CiudadanoModel[] = [];
    EntityList.forEach(Entity => {
      personModels.push({
        id: Entity.id,
        nombre: Entity.nombre,
        aPaterno: Entity.aPaterno,
        aMaterno: Entity.aMaterno,
        domicilios: Entity.domicilios,
        edad: Entity.edad
      })
    });
    return personModels;
  }
  mapFrom(Entity: CiudadanoEntity): CiudadanoModel {
    return {
      id: Entity.id,
      nombre: Entity.nombre,
      aPaterno: Entity.aPaterno,
      aMaterno: Entity.aMaterno,
      domicilios: Entity.domicilios,
      edad: Entity.edad
    };
  }
  mapTo(Model: CiudadanoModel): CiudadanoEntity {
    return {
      id: Model.id,
      nombre: Model.nombre,
      aPaterno: Model.aPaterno,
      aMaterno: Model.aMaterno,
      domicilios: Model.domicilios,
      edad: Model.edad
    }
  }
}