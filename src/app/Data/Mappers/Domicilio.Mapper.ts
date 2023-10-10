import { IMapper } from "src/app/Core/Interfaces/base/IMapper";
import { DomicilioEntity } from "src/app/Core/Shared/Entity/Domiclio.Entity";
import { DomicilioModel } from "../Model/Domicilio.Model";

export class DomicilioMapper implements IMapper<DomicilioEntity, DomicilioModel>{
  mapToList(ModelList: DomicilioModel[]): DomicilioEntity[] {
    let domicilios: Array<DomicilioEntity> = new Array<DomicilioEntity>();
    ModelList.forEach(Model => {
      domicilios.push({
        id: Model.id,
        codPostal: Model.codPostal,
        ciudad: Model.ciudad,
        ciudadanos: Model.ciudadanos,
        direccion: Model.direccion,
        pais: Model.pais
      });
    });
    return domicilios
  }
  mapFromList(EntityList: DomicilioEntity[]): DomicilioModel[] {
    let domicilios: Array<DomicilioModel> = new Array<DomicilioModel>();
    EntityList.forEach(Entity => {
      domicilios.push({
        id: Entity.id,
        codPostal: Entity.codPostal,
        ciudad: Entity.ciudad,
        ciudadanos: Entity.ciudadanos,
        direccion: Entity.direccion,
        pais: Entity.pais,
        activo: false
      });
    });
    return domicilios;
  }
  mapFrom(Entity: DomicilioEntity): DomicilioModel {
    return {
      id: Entity.id,
      codPostal: Entity.codPostal,
      ciudad: Entity.ciudad,
      ciudadanos: Entity.ciudadanos,
      direccion: Entity.direccion,
      pais: Entity.pais,
      activo: false
    }
  }
  mapTo(Model: DomicilioModel): DomicilioEntity {
    return {
      id: Model.id,
      codPostal: Model.codPostal,
      ciudad: Model.ciudad,
      ciudadanos: Model.ciudadanos,
      direccion: Model.direccion,
      pais: Model.pais,
    }
  }

}